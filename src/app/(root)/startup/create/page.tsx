import { auth } from "@/auth";
import StartupForm from "@/components/startup-form";
import { redirect } from "next/navigation";
import React from "react";

const CreateStartup = async () => {
  const session = await auth();

  if (!session) redirect("/");
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your startup</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default CreateStartup;
