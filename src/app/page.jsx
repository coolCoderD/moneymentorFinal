"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import FaqAccordion from "@/components/FaqAccordion";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import FinacialPlanning from "@/components/FinancialPlanning";

const Page = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    session && (
      <div>
        <Navbar />
        <p>Welcome {session?.user?.email}</p>
        <br />

        <div className="mx-4 my-8 md:mx-20 xl:mx-28">
          <FinacialPlanning />
        </div>

        <div className="mx-4 my-8 md:mx-20 xl:mx-28">
          <Slider />
        </div>

        <div className="mx-4 my-8 md:mx-20 xl:mx-28">
          <FaqAccordion />
        </div>
      </div>
    )
  );
};

export default Page;
