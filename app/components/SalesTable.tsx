"use client";

import { useState } from "react";
import { salesData, Sale } from "../lib/data";
import StatusBadge from "./StatusBadge";
import AddSaleModal from "./AddSaleModal";
import {
  CirclePlus,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const tabs = ["Company", "Activities", "Contacts", "Sales", "Requests"];

export default function SalesTable() {
  const [activeTab, setActiveTab] = useState("Sales");
  const [sales, setSales] = useState<Sale[]>(salesData);
  const [showModal, setShowModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const pageSize = 4;
  const [page, setPage] = useState(1);
  const start = (page - 1) * pageSize;
  const paginatedSales = sales.slice(start, start + pageSize);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    const ids = paginatedSales.map((s) => s.id);
    const allSelected = ids.every((id) => selectedIds.includes(id));
    setSelectedIds(allSelected ? [] : ids);
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return;
    setSales((prev) => prev.filter((s) => !selectedIds.includes(s.id)));
    setSelectedIds([]);
    setPage(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg mt-6 overflow-hidden ">
      <div className="flex gap-6 px-6 pt-4 text-sm ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3  ${activeTab === tab
              ? "border-b-2 border-emerald-600 text-emerald-600 font-medium"
              : "text-gray-500 hover:text-gray-900"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Sales" ? (
        <>
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 w-10">
                  <input type="checkbox" onChange={toggleSelectAll} className="w-4 h-4 accent-emerald-600 cursor-pointer" />
                </th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Sale date</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">
                  Stage <span className="ml-1">%</span>
                </th>
                <th className="text-left p-3">Next activity</th>
                <th className="text-left p-3">Sale name</th>
              </tr>
            </thead>

            <tbody>
              {paginatedSales.map((sale) => {
                const selected = selectedIds.includes(sale.id);

                return (
                  <tr
                    key={sale.id}
                    className={`border-b border-gray-200 last:border-none  ${selected ? "bg-emerald-50" : "hover:bg-gray-50"
                      }`}
                  >
                    <td className="p-3 ">
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleSelect(sale.id)}
                        className="w-4 h-4 accent-emerald-600 cursor-pointer"
                      />
                    </td>

                    <td className="p-3">
                      <StatusBadge status={sale.status} />
                    </td>

                    <td className="p-3">{sale.date}</td>

                    <td className="p-3 font-medium">
                      ₹ {sale.amount.toLocaleString()}
                    </td>

                    <td className="p-3">
                      {sale.stage === 100
                        ? "Sold"
                        : `Proposal (${sale.stage}%)`}
                    </td>

                    <td className="p-3">{sale.nextActivity}</td>

                    <td className="p-3">{sale.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="flex items-center justify-between px-6 py-4 text-sm">
            <div className="flex items-center gap-6 text-gray-600">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1 text-orange-600"
              >
                <CirclePlus size={16} /> Add
              </button>

              <button
                onClick={handleDelete}
                className={`flex items-center gap-1 ${selectedIds.length === 0
                  ? "opacity-40 cursor-not-allowed"
                  : ""
                  }`}
                disabled={selectedIds.length === 0}
              >
                <Trash2 size={16} /> Delete
              </button>


            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="h-8 w-8 border rounded-full flex items-center justify-center disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                disabled={start + pageSize >= sales.length}
                onClick={() => setPage((p) => p + 1)}
                className="h-8 w-8 border rounded-full flex items-center justify-center disabled:opacity-40"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="px-6 py-8 text-sm text-gray-500">
          {activeTab} content goes here.
        </div>
      )}

      {showModal && (
        <AddSaleModal
          onClose={() => setShowModal(false)}
          onAdd={(sale) => {
            setSales((prev) => [sale, ...prev]);
            setShowModal(false);
            setPage(1);
          }}
        />
      )}
    </div>
  );
}
