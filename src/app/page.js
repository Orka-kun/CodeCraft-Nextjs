import Aboutus from "@/components/Aboutus";
import Blog from "@/components/Blog";
import Course from "@/components/Course";
import Course2 from "@/components/Course2";
import Credits from "@/components/Credits";
import Home from "@/components/Home";
import Image from "next/image";

export default function Index() {
  return (
    <main className="">
    <Home />
    <Course2 />
    <Aboutus />    
    <Blog />
    <Credits />
    </main>
  );
}
