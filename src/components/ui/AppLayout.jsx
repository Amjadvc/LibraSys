import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  return (
    <div className="grid h-screen grid-cols-[1fr] grid-rows-[auto_1fr] bg-background-50 md:grid-cols-[19rem_1fr] md:grid-rows-[auto_1fr]">
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main
        onClick={handleCloseSidebar}
        className="mx-auto my-0 flex w-full flex-col gap-[2.4px] overflow-auto scroll-smooth bg-background-50 px-2 pb-[32px] pt-[40px] scrollbar-thin scrollbar-track-background-100 scrollbar-thumb-background-600 dark:scrollbar-thumb-primary-700 sm:px-[3rem]"
      >
        <div className="container mx-auto my-0 flex flex-col gap-[24px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
