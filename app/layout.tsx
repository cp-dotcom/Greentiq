import "./globals.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import { SidebarProvider } from "./context/SidebarContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 overflow-hidden scrollbar-hide">
        <SidebarProvider>
          <div className="flex h-screen flex-col md:flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
              <TopBar />
              <main className="p-2 sm:p-3 md:p-4 lg:p-6 overflow-auto flex-1 min-h-0 scrollbar-hide w-full">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
