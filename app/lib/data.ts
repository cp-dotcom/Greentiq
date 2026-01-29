export type SaleStatus = "Open" | "Lost" | "Sold" | "Stalled";

export interface Sale {
  id: number;
  name: string;
  status: SaleStatus;
  date: string;
  amount: number;
  stage: number;
  nextActivity: string;
}

export const salesData: Sale[] = [
  {
    id: 1,
    name: "Website Redesign",
    status: "Open",
    date: "2024-01-10",
    amount: 12000,
    stage: 60,
    nextActivity: "2024-02-01",
  },
  {
    id: 2,
    name: "Mobile App",
    status: "Sold",
    date: "2024-01-05",
    amount: 30000,
    stage: 100,
    nextActivity: "—",
  },
  {
    id: 3,
    name: "CRM Integration",
    status: "Lost",
    date: "2024-01-02",
    amount: 8000,
    stage: 20,
    nextActivity: "—",
  },
  {
    id: 4,
    name: "Marketing Campaign",
    status: "Stalled",
    date: "2024-01-15",
    amount: 15000,
    stage: 40,
    nextActivity: "2024-02-10",
  },
];
