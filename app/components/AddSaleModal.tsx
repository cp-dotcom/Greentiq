"use client";

import { useState } from "react";
import { Sale, SaleStatus } from "../lib/data";

interface Props {
  onClose: () => void;
  onAdd: (sale: Sale) => void;
}

export default function AddSaleModal({ onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [status, setStatus] = useState<SaleStatus>("Open");
  const [date, setDate] = useState("");
  const [stage, setStage] = useState<number | "">("");
  const [nextActivity, setNextActivity] = useState("");

  function handleSubmit() {
    if (!name || !date || amount === "" || stage === "") return;

    const newSale: Sale = {
      id: Date.now(),
      name,
      amount,
      status,
      date,
      stage,
      nextActivity: nextActivity || "—",
    };

    onAdd(newSale);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg p-4 sm:p-6 shadow-lg max-h-[90vh] overflow-y-auto">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Add Sale</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="col-span-full">
            <label className="block text-gray-600 mb-1 text-xs sm:text-sm">
              Sale name
            </label>
            <input
              className="w-full border rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm"
              placeholder="Enter sale name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-xs sm:text-sm">
              Status
            </label>
            <select
              className="w-full border rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value as SaleStatus)}
            >
              <option>Open</option>
              <option>Sold</option>
              <option>Lost</option>
              <option>Stalled</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-xs sm:text-sm">
              Sale date
            </label>
            <input
              type="date"
              className="w-full border rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-xs sm:text-sm">
              Amount (₹)
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-full border rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-xs sm:text-sm">
              Stage (%)
            </label>
            <input
              type="number"
              placeholder="0"
              min={0}
              max={100}
              className="w-full border rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm"
              value={stage}
              onChange={(e) =>
                setStage(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>

          <div className="col-span-full">
            <label className="block text-gray-600 mb-1 text-xs sm:text-sm">
              Next activity date
            </label>
            <input
              type="date"
              className="w-full border rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm"
              value={nextActivity}
              onChange={(e) => setNextActivity(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-6 text-xs sm:text-sm">
          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-2 rounded-md border w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 sm:px-4 py-2 rounded-md bg-emerald-600 text-white w-full sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
