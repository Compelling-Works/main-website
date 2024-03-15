import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavItems from "./nav-items";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button type="button" className="block md:hidden cursor-pointer">
            <Menu className="w-8 text-black" />
          </button>
        </SheetTrigger>
        <SheetContent className=" pt-8 flex flex-col items-center gap-6 bg-white md:hidden">
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
