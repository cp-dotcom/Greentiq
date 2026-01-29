"use client";

import { ChevronLeft, ChevronRight, Pencil } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type TabType =
  | "Company"
  | "More"
  | "Interest"
  | "Note"
  | "Market data"
  | "Misc";

export default function CompanyDetails() {
  const [activeTab, setActiveTab] = useState<TabType>("Company");

  return (
    <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full text-indigo-600 flex items-center justify-center font-semibold flex-shrink-0">
            <Image
              src="/logo/greentiq.png"
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 truncate">
                Greentiq Ltd
              </h1>
              <span className="text-orange-400 text-base sm:text-lg">☆</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">
              Kakkanad, Kochi, Kerala
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition">
            <Pencil size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4" />
          </button>

          <button className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <BsThreeDotsVertical size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 px-3 sm:px-4 md:px-6 mt-3 sm:mt-3 md:mt-4 pb-1 sm:pb-1.5 md:pb-2 text-xs sm:text-sm border-b border-gray-200 mx-4 overflow-x-auto">
        {["Company", "More", "Interest", "Note", "Market data", "Misc"].map(
          (tab) => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab as TabType)}
            >
              {tab}
            </Tab>
          ),
        )}
      </div>

      <div className="px-3 sm:px-4 md:px-6 py-6 sm:py-5 md:py-6 text-xs sm:text-sm">
        {activeTab === "Company" && <CompanyInfo />}

        {activeTab !== "Company" && <Placeholder title={activeTab} />}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-t border-gray-200 mx-4 text-xs sm:text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 lg:gap-6 w-full sm:w-auto ">
          <label className="flex items-center gap-2 whitespace-nowrap">
            <input type="checkbox" checked readOnly />
            Stop
          </label>

          <label className="flex items-center gap-2 whitespace-nowrap">
            <input type="checkbox" />
            No mailings
          </label>
        </div>

        <p className="text-xs sm:text-sm whitespace-nowrap">
          Updated: 18/09/2023 OG
        </p>

        <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-auto">
          <button className="h-7 w-7 sm:h-8 sm:w-8 border rounded-full flex items-center justify-center">
            <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
          </button>
          <button className="h-7 w-7 sm:h-8 sm:w-8 border rounded-full flex items-center justify-center">
            <ChevronRight size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CompanyInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-y-4 md:gap-x-12 lg:gap-x-24">
      <Info label="Phone:" value="7356525817" link />
      <Info label="Category:" value="Customer A" />

      <Info label="E-mail:" value="business@greentiq.com" link />
      <Info label="VAT No.:" value="SE123456789" />

      <Info label="Country:" value="India" />
    </div>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="text-gray-500 ">
      {title} content will be displayed here.
    </div>
  );
}

function Info({label,value,link,}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4">
      <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0">
        {label}
      </span>
      {link ? (
        <a
          href="#"
          className="text-blue-600 hover:underline text-xs sm:text-sm break-all"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-900 text-xs sm:text-sm break-all">
          {value}
        </span>
      )}
    </div>
  );
}

function Tab({children,active,onClick,}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-7 sm:h-8 md:h-9 px-2 sm:px-3 md:px-4 flex items-center rounded-full transition whitespace-nowrap text-xs sm:text-sm ${
        active
          ? "bg-emerald-100 text-emerald-700 font-medium"
          : "text-gray-600 hover:text-gray-900 hover:underline"}`
        }
          >
      {children}
    </button>
  );
}
