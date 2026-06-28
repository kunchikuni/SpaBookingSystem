"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function ParkingInfoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-surface text-primary border border-primary-200 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
      >
        Parking Info
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Parking Information" maxWidth="md">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-2">Complimentary Valet</h4>
            <p className="text-sm text-text-secondary">
              Available during business hours at our main entrance.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-2">Street Parking</h4>
            <p className="text-sm text-text-secondary">
              Metered parking on Wellness Avenue, 2-hour limit during business hours.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-2">Wellness Center Garage</h4>
            <p className="text-sm text-text-secondary">
              2 blocks east at 200 Wellness Avenue. $5 flat rate with spa validation.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
