import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

import Image from "next/image";

import Home from "../components/home/Home";

export default function Index() {
  return (
    <main className="font-kanit">
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </main>
  );
}
