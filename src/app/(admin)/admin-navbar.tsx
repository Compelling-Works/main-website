"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function AdminNavbar() {
  const session = useSession();
  return (
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
          {session.data ? (
            <Button
              onClick={() => signOut()}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Signout
            </Button>
          ) : (
            <Button
              onClick={() => signIn("google")}
              className="bg-blue-600 text-white hover:bg-blue-800"
            >
              Signin
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
