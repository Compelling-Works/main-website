import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AdminNavbar = async () => {
  return (
    // <header className="shadow-md h-[10svh] fixed left-[360px] right-0 z-10">
    <header className="shadow-md h-[10svh] fixed left-0 top-0 z-10 w-full">
      <div className="flex justify-between items-center p-5 ">
        <Link href="/admin/users">
          <Image
            src="/images/horizontal_logo.png"
            width={150}
            height={100}
            alt="compelling works logo"
            className=""
          />
        </Link>

        <div className="flex gap-3 items-center">
          {/* <p>{session?.user?.name}</p> */}
          <p>testuser</p>

          {/* <Button>SignOut</Button> */}
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
