import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="mx-auto my-0 flex w-full flex-col gap-[2.4rem] bg-background px-[4.8rem] pb-[6.4rem] pt-[4rem]">
        <div className="container mx-auto my-0 flex max-w-[120rem] flex-col gap-[2.4rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
