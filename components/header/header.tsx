import Link from 'next/link';
import { UserButton } from '../auth/user-button';

export const Header = () => {
  const routes = [
    {
      name: 'Handling Means',
      slug: 'handling-means',
      path: '/handling-means',
    },
    {
      name: 'Work instructions',
      slug: 'work-instructions',
      path: '/work-instructions',
    },
    {
      name: 'Standard forms',
      slug: 'standard-forms',
      path: '/standard-forms',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];
  return (
    <header className="h-[7%]  flex items-center justify-between">
      <div>
        {' '}
        <p>Logo</p>{' '}
      </div>
      <div className="flex flex-row gap-2 font-semibold">
        {routes.map((route) => {
          return (
            <Link
              className="mx-8 text capitalize"
              key={route.name}
              href={route.path}
            >
              <h3>{route.name}</h3>
            </Link>
          );
        })}
      </div>

      <div>
        <UserButton />
      </div>
    </header>
  );
};
