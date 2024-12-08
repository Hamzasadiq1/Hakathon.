import Image from "next/image";
import TopBar from "./components/TopBar/TopBarr";

import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/HeroSection/HeroSection";
import Featured from "./components/Featured Products/Featured";
import LeatestBlog from "./components/leatestBlog/LeatestBlog";








export default function Home() {
  return (
   <div>
    <TopBar/>
    <Navbar/>
    <Herosection/>
<Featured/>
    <LeatestBlog/>
    <Footer/>
  
   </div>
  );
}
