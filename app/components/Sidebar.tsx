"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

import { AiOutlineDashboard } from "react-icons/ai";
import {PiBuildings,PiCalendar,PiNotepad,PiChartBar,PiTarget,} from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { BiDollarCircle, BiMessageRoundedDetail } from "react-icons/bi";
import { PiTicketLight } from "react-icons/pi";
import { TbBoxMultiple } from "react-icons/tb";
import { IoAtOutline, IoSettingsOutline } from "react-icons/io5";
import { ChevronRight, ChevronLeft } from "lucide-react";

const menuItems = [
  { icon: AiOutlineDashboard, label: "Dashboard", path: "/company" },
  { icon: PiBuildings, label: "Company", path: "/" },
  { icon: VscAccount, label: "Accounts", path: "/accounts" },
  { icon: PiCalendar, label: "Calendar", path: "/calendar" },
  { icon: BiDollarCircle, label: "Sales", path: "/sales" },
  { icon: PiNotepad, label: "Notes", path: "/notes" },
  { icon: PiTicketLight, label: "Tickets", path: "/tickets" },
  { icon: TbBoxMultiple, label: "Products", path: "/products" },
  { icon: IoAtOutline, label: "Emails", path: "/emails" },
  { icon: BiMessageRoundedDetail, label: "Messages", path: "/messages" },
  { icon: PiChartBar, label: "Reports", path: "/reports" },
  { icon: PiTarget, label: "Targets", path: "/targets" },
  { icon: IoSettingsOutline, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const { mobileOpen, setMobileOpen } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, setMobileOpen]);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`bg-[#376a5e] text-white flex flex-col transition-all duration-300 fixed md:sticky top-0 left-0 h-screen z-40 md:z-auto
          ${mobileOpen ? "w-52" : "w-16"} ${expanded ? "md:w-52" : "md:w-16"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="h-14 flex items-center justify-center font-bold text-xl border-emerald-600 flex-shrink-0">
          <span className="text-xl font-bold text-white">L</span>
        </div>

        <nav className="flex-1 py-4 space-y-2 overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <button
                key={index}
                onClick={() => {
                  item.path !== "#" && router.push(item.path);
                  setMobileOpen(false);
                }}
                className={`w-full flex items-center
          ${mobileOpen || expanded ? "px-4 gap-3 justify-start" : "justify-center"}`}>
                <div
                  className={`h-8 w-9 flex items-center justify-center
            rounded-full transition-colors duration-200
            ${active ? "bg-emerald-600" : "hover:bg-emerald-600/50"}`}>
                  <Icon className="text-lg text-white" />
                </div>

                {(mobileOpen || expanded) && (
                  <span className="text-sm text-white leading-none whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-3 border-t border-gray-50/30 flex justify-center flex-shrink-0 hidden md:flex">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-emerald-600">
            {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      </aside>
    </>
  );
}
