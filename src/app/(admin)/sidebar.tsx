"use client";

import Link from "next/link";
import {
  Book,
  Building2,
  FileSpreadsheetIcon,
  Group,
  HeartHandshake,
  Home,
  Newspaper,
  User,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";

const routes = [
  {
    name: "Home",
    path: "/admin",
    icon: <Home />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <Users />,
  },
  {
    name: "Team",
    path: "/admin/team",
    icon: <Group />,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: <Book />,
  },
  {
    name: "Publications",
    path: "/admin/publications",
    icon: <Newspaper />,
  },
  {
    name: "Partners and Donors",
    path: "/admin/partners-and-donors",
    icon: <HeartHandshake />,
  },
  {
    name: "DHEXA and Jobs",
    path: "/admin/careers-and-jobs",
    icon: <FileSpreadsheetIcon />,
  },
  {
    name: "Offices",
    path: "/admin/offices",
    icon: <Building2 />,
  },
];
const AdminSidebar = () => {
  const pathname = usePathname();
  // const session = useSession();

  // if (!session) {
  //   return <p>Unauthenticated</p>;
  // }

  // const user = session.data?.user;

  return (
    <nav className="sticky top-[10svh] h-[90svh] border-r-2  bg-gray-50 w-[400px]">
      <div className="flex justify-center items-center flex-col p-5">
        {/* <Image src={user?.image!} height="100" width="100" alt={user?.name!} />

        {session.data?.user && (
          <>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </>
        )} */}

        <p>Sample admin</p>
        <p>admin@compelling.works</p>
      </div>

      <hr />
      <div className="flex flex-col my-2">
        {routes.map((route) => {
          return (
            <Link
              key={route.name}
              href={route.path}
              className={cn(
                "text-lg py-3 px-4 hover:text-blue-700 hover:bg-blue-200 hover:font-bold hover:cursor-pointer transition-colors duration-200 flex gap-5",
                {
                  "text-white font-bold bg-blue-700 hover:text-white hover:bg-blue-700":
                    pathname === route.path,
                }
              )}
            >
              <span>{route.icon}</span>
              <span>{route.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default AdminSidebar;
