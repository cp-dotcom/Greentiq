import { SaleStatus } from "../lib/data";

export default function StatusBadge({ status }: { status: SaleStatus }) {
  const styles: Record<SaleStatus, string> = {
    Open: "bg-blue-100 text-blue-600 ",
    Sold: "bg-green-100 text-green-600",
    Lost: "bg-red-100 text-red-600",
    Stalled: "bg-yellow-100 text-yellow-600",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded-2xl font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
