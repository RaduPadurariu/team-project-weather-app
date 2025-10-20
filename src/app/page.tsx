import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import HomePage from "@/components/home/HomePage";

export default function Home() {
  return (
    <div className="">
      Weather app build by Radu Padurariu and Maftei Marius Vasile
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
