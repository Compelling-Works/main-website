"use client";

import Link from "next/link";
import {
  Book,
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
    name: "Careers and Jobs",
    path: "/admin/careers-and-jobs",
    icon: <FileSpreadsheetIcon />,
  },
];
const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[10svh] h-[90svh] border-r-2  bg-gray-50 w-[350px]">
      <div className="flex justify-center items-center flex-col p-5">
        <User className="h-[150px] w-[200px]" />

        <p>Test Admin</p>
        <p>testadmin@compelling.works</p>
      </div>

      <hr />
      <div className="flex flex-col">
        {routes.map((route) => {
          return (
            <Link
              key={route.name}
              href={route.path}
              className={cn(
                "py-1.5 px-4 hover:text-blue-700 hover:bg-blue-200 hover:font-bold hover:cursor-pointer transition-colors duration-200 flex gap-5",
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
