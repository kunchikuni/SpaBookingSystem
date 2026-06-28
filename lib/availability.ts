// Pure availability-calculation logic, shared by the /api/availability
// route and (indirectly) by booking creation validation. Kept separate
// from the repository layer because it's computation, not storage.

const HOURS_BY_WEEKDAY: Record<number, { open: number; close: number }> = {
  0: { open: 10, close: 17 }, // Sunday
  1: { open: 9, close: 20 },
  2: { open: 9, close: 20 },
  3: { open: 9, close: 20 },
  4: { open: 9, close: 20 },
  5: { open: 9, close: 20 },
  6: { open: 8, close: 18 }, // Saturday
};

function formatTime(hour: number, isHalf: boolean): string {
  const wholeHour = Math.floor(hour);
  if (isHalf) {
    const displayHour = ((wholeHour - 1) % 12) + 1;
    return `${displayHour}:30 ${wholeHour < 12 ? "AM" : "PM"}`;
  }
  const displayHour = wholeHour % 12 === 0 ? 12 : wholeHour % 12;
  const suffix = wholeHour < 12 || wholeHour === 24 ? "AM" : "PM";
  return `${displayHour}:00 ${suffix}`;
}

function parseTimeLabel(label: string): number {
  const match = label.match(/(\d+):(\d+)\s(AM|PM)/);
  if (!match) return -1;
  let [, h, m, ampm] = match;
  let hour = parseInt(h, 10);
  const minute = parseInt(m, 10);
  if (ampm === "PM" && hour !== 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

/**
 * Returns the list of bookable time-slot labels for a given date, minus
 * any slots already taken by an existing booking for that therapist, and
 * minus any slot earlier than "now" if the date is today.
 */
export function getAvailableSlots(date: Date, bookedTimes: string[]): string[] {
  const weekday = date.getDay();
  const { open, close } = HOURS_BY_WEEKDAY[weekday];

  const slots: string[] = [];
  for (let hour = open; hour < close; hour += 1.5) {
    slots.push(formatTime(hour, hour % 1 !== 0));
  }

  const now = new Date();
  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  return slots.filter((label) => {
    if (bookedTimes.includes(label)) return false;
    if (isToday && parseTimeLabel(label) <= nowMinutes) return false;
    return true;
  });
}
