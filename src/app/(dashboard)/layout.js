import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="mx-5 my-5">
      <div className="flex items-start gap-4">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
