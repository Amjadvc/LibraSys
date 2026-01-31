import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[19rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-background-50 mx-auto my-0 flex w-full flex-col gap-[2.4px] overflow-auto px-[3rem] pb-[32px] pt-[40px]">
        <div className="container mx-auto my-0 flex flex-col gap-[24px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
