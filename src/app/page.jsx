"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();

  console.log(session?.user);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    session && (
      <div>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
        <br />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    )
  );
};

export default Page;
