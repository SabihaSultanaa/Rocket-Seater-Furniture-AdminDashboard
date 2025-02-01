
import Topheader from "@/components/topheader";
import Hero from "@/components/hero";
import Side from "@/components/side";
import Pick from "@/components/pick";
import Arrival from "@/components/arrival";
import Blog from "@/components/blog";
import Follow from "@/components/follow";


// import { fetchData } from "@/services/api";


export default function Home() {
  


  return (
    <>
      <Topheader />
    
      <Hero />
      <Side />
      <Pick />
      <Arrival />
      <Blog />
      <Follow />
     
    </>
  );
}