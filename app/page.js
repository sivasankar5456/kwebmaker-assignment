import About from "@/components/About";
import Banner from "@/components/Banner";
import Glimpse from "@/components/Glimpse";
import KeyFeatures from "@/components/KeyFeatures";
import Launching from "@/components/Launching";
import Navbar from "@/components/Navbar";
import Professionals from "@/components/Professionals";
import Programs from "@/components/Programs";
import Facilities from '@/components/Facilities';
import CoachEvents from "@/components/CoachEvents";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <section className="container-fluid key-feature-glimps-container px-5 mb-5">
        <KeyFeatures />
        <Glimpse />
      </section>
      <section className="container-fluid px-5 my-5 py-4">
        <Programs />
      </section>
     
      <div className="text-strip py-2 bg-white overflow-hidden my-5 pb-5">
        <div className="d-flex align-items-center justify-content-evenly text-content fs-1">
          <span className="filled-text fs-1 me-5">ADOPT</span>
          <div className="text-center align-content-center pb-3 me-5">.</div>
          <span className="outlined-text fs-1 me-5"> NURTURE</span>
          <div className="text-center align-content-center pb-3 me-5">.</div>
          <span className="filled-text fs-1 me-5"> DELIVER</span>
          <div className="text-center align-content-center pb-3 me-5">.</div>
          <span className="outlined-text fs-1 me-5"> ADOPT</span>
          <div className="text-center align-content-center pb-3 me-5">.</div>
          <span className="filled-text fs-1"> NURTURE</span>
        </div>
      </div>
     <Launching />
     <section className="container-fluid px-5 my-5 py-4">
      <Professionals />
     </section>
     <Facilities/>
    <CoachEvents />
    <Footer />
    </div>
  );
};

export default page;
