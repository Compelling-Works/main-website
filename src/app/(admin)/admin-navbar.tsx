import { signOutAction } from "@/actions/auth-actions";
import { validateRequest } from "../../auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import db from "@/database";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema";

export default async function AdminNavbar() {
  const { user, session } = await validateRequest();

  if (!user) {
    return redirect("/cw-admin");
  }
  const loggedInUser = await db
    .select({
      name: users.name,
      email: users.email,
      role: users.role,
    })
    .from(users)
    .where(eq(users.id, user.id));

  return (
    <header className="shadow-md h-[10svh] fixed left-0 top-0 z-10 w-full">
      <div className="flex justify-between items-center p-5 container">
        <Link href="/admin">
          <Image
            src="/images/horizontal_logo.png"
            width={150}
            height={40}
            alt="compelling works logo"
            className="w-auto h-[40px] cursor-pointer"
          />
        </Link>

        <div className="flex  gap-3 items-center">
          <form
            action={async () => {
              "use server";
              await signOutAction();
              redirect("/cw-admin");
            }}
          >
            <div className="flex items-center gap-2 text-md">
              <p className="capitalize">{loggedInUser[0].name}</p>
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                Signout
              </Button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
