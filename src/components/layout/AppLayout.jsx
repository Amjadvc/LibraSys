import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="mx-auto my-0 flex w-full flex-col gap-[2.4px] overflow-auto bg-[#e2d7c83b] px-[3rem] pb-[32px] pt-[40px]">
        <div className="container mx-auto my-0 flex flex-col gap-[24px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
