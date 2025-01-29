import Aboutus from "@/components/Aboutus";
import Blog from "@/components/Blog";
import Course from "@/components/Course";
import Credits from "@/components/Credits";
import Home from "@/components/Home";
import Image from "next/image";

export default function Index() {
  return (
    <main className="">
    <Home />
    <Course />
    <Aboutus />    
    <Blog />
    <Credits />
    </main>
  );
}
