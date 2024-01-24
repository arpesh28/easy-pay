import Sidebar from "@/components/Sidebar";
import Table from "@/components/TransferTable";
import { Input } from "@/components/ui/input";

const DashboardPage = () => {
  return (
    <main className="min-h-screen w-screen flex flex-row bg-[#f9f9f9]">
      <Sidebar />
      <div className="w-full p-10">
        <div className="mb-12">
          <h3 className="font-medium text-gray-400 text-md">Total Balance</h3>
          <h1 className="font-bold text-4xl mt-1 text-gray-800">₹ 12,000</h1>
        </div>
        <div className="w-full bg-white rounded-lg shadow-card-shadow">
          <div className="px-3 py-5">
            <h2 className="font-bold text-2xl">Transfer to friends</h2>
          </div>
          <Table />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
