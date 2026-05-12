import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "@/components/ui-system/PageTransition";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
