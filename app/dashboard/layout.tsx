import React from 'react';
import { DashboardSidebar } from './_components/sidebar';

type DashboardSidebarProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardSidebarProps) => {
  return (
    <div className="flex flex-row justify-start items-center h-full ">
      <DashboardSidebar />
      <div>{children}</div>
    </div>
    // <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500">
    //   {children}{' '}
    // </div>
  );
};

export default DashboardLayout;
