import Navbar from "@/components/Navbar";
import { Whatsapp_button } from "@/components/Whatsapp_button";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Whatsapp_button />
    </>
  );
}
