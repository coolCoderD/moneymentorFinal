"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import AccordionUsage from "@/components/Accordion";

const Page = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    session && (
      <div>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
        <br />

        <div className="mx-2">
          <AccordionUsage />
        </div>
        <br />
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    )
  );
};

export default Page;
