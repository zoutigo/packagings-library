import React from 'react';
import { DashboardCard } from './_components/dashboard-card';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import { PostsTable } from './_components/postsTable';

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
          <DashboardCard
            icon={<Newspaper className="text-slate-500" size={72} />}
            title="Post"
            count={100}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
          <DashboardCard
            icon={<Folder className="text-slate-500" size={72} />}
            title="Categories"
            count={12}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
          <DashboardCard
            icon={<User className="text-slate-500" size={72} />}
            title="Users"
            count={750}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
          <DashboardCard
            icon={<MessageCircle className="text-slate-500" size={72} />}
            title="Comments"
            count={1200}
          />
        </div>
      </div>
      <PostsTable title="Latest Posts" limit={3} />
    </>
  );
};

export default DashboardPage;
