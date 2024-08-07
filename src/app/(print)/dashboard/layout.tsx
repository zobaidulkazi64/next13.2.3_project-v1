import "@/styles/globals.css";
import Sidebar from "@/components/ui/dashboard/Sidebar";
import ToastContainers from "@/components/common/Toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainers />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}