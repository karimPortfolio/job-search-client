import React from "react";
import Navbar from "@/components/Navbar/navbar";
import MobileNavbar from "@/components/Navbar/mobile-navbar/mobile-navbar";

const AboutPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
    </>
  );
};

export default AboutPageLayout;
