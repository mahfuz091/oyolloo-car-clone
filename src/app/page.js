import Banner from "@/components/Banner/Banner";
import CarBrands from "@/components/CarBrands/CarBrands";
import Cars from "@/components/Cars/Cars";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sales from "@/components/Sales/Sales";
import Testimonial from "@/components/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Sales />
      <Cars />
      <CarBrands />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default HomePage;
