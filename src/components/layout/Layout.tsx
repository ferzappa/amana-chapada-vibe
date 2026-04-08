import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import FloatingCTA from "./FloatingCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
    <FloatingCTA />
  </div>
);

export default Layout;
