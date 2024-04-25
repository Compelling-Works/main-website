import Link from "next/link";
import Image from "next/image";
import NavItems from "./nav-items";
import MobileNav from "./mobile-nav";

function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full flex text-lg z-10 bg-[#B7CEF9] shadow-lg h-[7svh] md:h-[10svh]">
      <div className="flex items-center justify-between container">
        <Link href="/" className="block">
          <Image
            src="/images/horizontal_logo.png"
            alt="Compelling works logo"
            width={100}
            height={20}
            className="size-full"
          />
        </Link>

        <div>
          <nav className="w-full hidden md:flex md:justify-between md:items-center">
            <NavItems />
          </nav>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
