import { NextResponse } from "next/server";

export function jsonData<T>(data: T, init?: number) {
  return NextResponse.json({ data }, { status: init ?? 200 });
}

export function jsonError(message: string, status: number, code?: string) {
  return NextResponse.json({ error: { message, code } }, { status });
}
