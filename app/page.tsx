
import CompanyDetails from "./components/Companydetails";
import SalesTable from "./components/SalesTable";
import SalesPreview from "./components/SalesPreview";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full">
        <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6 min-w-0">
          <CompanyDetails />
          <SalesTable />
        </div>

        <div className="col-span-1 min-w-0">
          <SalesPreview />
        </div>
      </div>
    </>
  );
}
