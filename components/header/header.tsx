import Link from "next/link";
import { UserButton } from "../auth/user-button";

export const Header = () => {
  const routes = [
    {
      name: "Means",
      slug: "handling-means",
      path: "/means",
    },
    {
      name: "instructions",
      slug: "work-instructions",
      path: "/instructions",
    },
    {
      name: "forms",
      slug: "forms",
      path: "/forms",
    },
    {
      name: "Projects",
      slug: "projects",
      path: "/projects",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];
  return (
    <header className="h-[10%]  flex items-center justify-between">
      <div className="font-semibold mx-8 text-blue-950 text-2xl">
        {" "}
        <span>Packaging Library</span>{" "}
      </div>
      <div className="flex flex-row gap-1 ">
        {routes.map((route) => {
          return (
            <Link
              className="mx-8 text capitalize "
              key={route.name}
              href={route.path}
            >
              <h4>{route.name}</h4>
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
