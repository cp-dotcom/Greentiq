
import { BiDollarCircle } from "react-icons/bi";
import { BsChevronDown, BsStars } from "react-icons/bs";
import {PiCalendar,PiListMagnifyingGlass,PiNotepad,} from "react-icons/pi";


export default function SalesPreview() {
  return (
    <aside className="w-full lg:w-[320px] bg-white rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <IconCircle active>
            <PiListMagnifyingGlass size={16} />
          </IconCircle>

          <IconCircle>
            <BiDollarCircle size={16} />
          </IconCircle>

          <IconCircle>
            <PiCalendar size={16} />
          </IconCircle>

          <IconCircle>
            <PiNotepad size={16} />
          </IconCircle>

          <IconCircle>
            <BsStars size={14} />
          </IconCircle>
        </div>

        <IconCircle>
          <BsChevronDown size={14} />
        </IconCircle>
      </div>

      <div className="mb-3 sm:mb-4">
        <h3 className="text-blue-600 font-medium text-base sm:text-lg">
          Website Redesign
        </h3>
        <p className="text-gray-900 font-semibold text-sm sm:text-base">₹ 12,000</p>
      </div>

      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mb-4 sm:mb-6">
        <Info label="Company" value="Greentiq Ltd" link />
        <Info label="Contact" value="7356525817" link />
        <Info label="Sale date" value="10/01/2025" />
        <Info label="Owner" value="Eric Davies" />
        <Info label="Sale type" value="Cross-sale to existing cust..." />
        <Info label="Status" value="Open (60%)" />
      </div>

      <Divider />

      <Section title="Activities">
        <Activity date="04/11/2024" text="Follow-up call" />
        <Activity date="01/11/2024" text="Quote for 45 components..." />
        <Activity date="23/09/2024" text="Prospect meeting" />
        <Activity date="22/09/2024" text="Introduction call" />
      </Section>

      <Divider />

      <Section title="Stakeholders">
        <p className="text-sm text-gray-700">James Vargas</p>
        <p className="text-sm text-gray-700">Lisa Jansson</p>
      </Section>
    </aside>
  );
}


function IconCircle({children,active,}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`h-8 w-8 rounded-full flex items-center justify-center transition ${active
          ? "bg-emerald-100 text-emerald-700"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      {children}
    </div>
  );
}

function Info({label,value,link,}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="flex justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
      <span className="text-gray-500 flex-shrink-0">{label}:</span>
      {link ? (
        <a href="#" className="text-blue-600 hover:underline text-right break-all">
          {value}
        </a>
      ) : (
        <span className="text-gray-900 text-right break-all">{value}</span>
      )}
    </div>
  );
}

function Section({title,children,}: {
  title: string;
  children: React.ReactNode;}) {
  return (
    <div className="mb-15">
      <h4 className="font-semibold mb-2 text-xs sm:text-sm">{title}</h4>
      <div className="space-y-1 sm:space-y-2">{children}</div>
    </div>
  );
}

function Activity({date,text,}: {
  date: string;
  text: string;
}) {
  return (
    <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
      <span className="text-gray-500 flex-shrink-0">{date}</span>
      <a href="#" className="text-blue-600 hover:underline break-all">
        {text}
      </a>
    </div>
  );
}

function Divider() {
  return <div className="my-4 border-t border-gray-200" />;
}
