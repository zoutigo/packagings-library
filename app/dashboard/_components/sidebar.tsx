import Link from 'next/link';

export const DashboardSidebar = () => {
  return (
    <div className="bg-yellow-100 h-full w-[20%]">
      <ul>
        <li className="ml-2 my-4">
          <Link href={'/dashboard/admin/country'}> Countries</Link>
        </li>
        <li>Plants</li>
        <li>Handling Unit Type</li>
        <li>Handling Unit</li>
        <li>Project</li>
        <li>Plant</li>
      </ul>
    </div>
  );
};
