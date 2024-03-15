"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Projects",
    href: "/projects",
  },

  {
    name: "Our Team",
    href: "/our-team",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];

function NavItems() {
  const pathname = usePathname();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleMenu(path: string) {
    if (
      path === "/contact-us/clients" ||
      "/contact-us/consultants" ||
      "/contact-us/interns"
    ) {
      router.push(path);
      setDropdownOpen(false);
    }
  }

  useEffect(() => {}, [pathname]);

  return (
    <ul className="md:flex-between flex w-full flex-col items-center gap-5 md:flex-row">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li className="relative link_item" key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "text-[#0830B2] flex-center p-medium-16 whitespace-nowrap block link",
                {
                  "text-[#EB1C24] font-bold": isActive,
                }
              )}
            >
              {link.name}
            </Link>
          </li>
        );
      })}

      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger
          className={cn("text-[#0830B2]", {
            "text-[#EB1C24] font-bold": pathname.includes("/contact-us"),
          })}
        >
          Contact Us
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => handleMenu("/contact-us/clients")}
            className={cn("text-[#0830B2] cursor-pointer", {
              "text-[#EB1C24] font-bold": pathname === "/contact-us/clients",
            })}
          >
            Clients
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleMenu("/contact-us/consultants")}
            className={cn("text-[#0830B2] cursor-pointer", {
              "text-[#EB1C24] font-bold":
                pathname === "/contact-us/consultants",
            })}
          >
            Consultants
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleMenu("/contact-us/interns")}
            className={cn("text-[#0830B2] cursor-pointer", {
              "text-[#EB1C24] font-bold": pathname === "/contact-us/interns",
            })}
          >
            Interns
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ul>
  );
}

export default NavItems;
