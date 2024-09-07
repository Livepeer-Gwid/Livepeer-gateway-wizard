import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import MidSection from "@/components/home/midSection";
import Guide from "@/components/home/guide";
import FAQ from "@/components/home/faq";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full relative">
         <Header />
         <div className=" py-36">
          
           <Hero />
           <MidSection />
           <Guide />
           <FAQ />
           <Footer/>
         </div>
        

    </div>
  );
}
