"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { links } from "./nav-items";

function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  function navigate(to: string) {
    router.push(to);
    setSheetOpen(false);
  }

  return (
    <nav className="md:hidden">
      <Sheet
        open={sheetOpen}
        onOpenChange={(sheetOpen) => {
          setSheetOpen(sheetOpen);
        }}
      >
        <SheetTrigger asChild>
          <button type="button" className="block md:hidden cursor-pointer">
            <Menu className="w-8 text-black" />
          </button>
        </SheetTrigger>
        <SheetContent className=" bg-white md:hidden">
          <div className="mt-10 flex flex-col items-center gap-6">
            {/* <ul className="md:flex-between flex w-full flex-col items-center gap-5 md:flex-row"> */}
            {links.map((link) => {
              return (
                <div className="relative link_item" key={link.name}>
                  <p
                    // href={link.href}
                    onClick={() => navigate(link.href)}
                    className={cn(
                      "text-[#0830B2] flex-center p-medium-16 whitespace-nowrap block link",
                      {
                        "text-[#EB1C24] font-bold": pathname === link.href,
                      }
                    )}
                  >
                    {link.name}
                  </p>
                </div>
              );
            })}

            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger
                className={cn("text-[#0830B2]", {
                  "text-[#EB1C24] font-bold": pathname.includes("/contact-us"),
                })}
              >
                <p className="flex">
                  <span className="mr-1"> Contact Us</span>{" "}
                  <ChevronDown className="size-5" />
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => navigate("/contact-us/clients")}
                  className={cn("text-[#0830B2] cursor-pointer", {
                    "text-[#EB1C24] font-bold":
                      pathname === "/contact-us/clients",
                  })}
                >
                  Clients
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/contact-us/consultants")}
                  className={cn("text-[#0830B2] cursor-pointer", {
                    "text-[#EB1C24] font-bold":
                      pathname === "/contact-us/consultants",
                  })}
                >
                  Consultants
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/contact-us/interns")}
                  className={cn("text-[#0830B2] cursor-pointer", {
                    "text-[#EB1C24] font-bold":
                      pathname === "/contact-us/interns",
                  })}
                >
                  Interns
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* </ul> */}
          {/* <NavItems /> */}
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
