import Image from "next/image";
import CupAside from "./CupAside";

const About = () => {
  return (
    <section className="container-fluid about-section px-0">
      {/* First Section */}
      <div className="container-fluid py-5 d-flex justify-content-center align-items-start about-first">
        <div className="container about-second-text-wrapper">
          <p className="mt-5 ">
            To be the first venue in the world to have
            <span> 60 multi surface courts </span>
            at one location and establish first one stop tennis academy in the
            Asia Pacific producing grand slam champions.
          </p>
        </div>

        <CupAside
          width={120}
          height={300}
          style={{ position: "absolute", bottom: 0, right: 0, zIndex: 0 }}
        />
      </div>

      <div className="about-second d-flex align-items-end justify-content-center pb-2">
        <div className="container about-second-text-wrapper">
          <p className="text-underline">
            "We have created an environment ideal for building craft. Our goal
            is to be recognized as the best tennis performance centre in the
            world."
          </p>
          <div className="p-0 text-start second-small-text pb-5 mt-3">
            <h6 className="m-0">John Doe</h6>
            <span className="m-0">Chariman</span>
          </div>
        </div>
      </div>

      <div className="container py-5 px-3 px-md-5 about-third">
        <div className="row gx-4 gy-5 align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <Image
              src="/images/Mask group.png"
              alt="image-1"
              height={430}
              width={320}
              className="img-fluid img-cover"
            />
          </div>

          <div className="col-12 col-md-8 d-flex flex-column justify-content-between gap-5 ">
            <div className="text-start border-box w-75 about-third-text-wrapper">
              <div className="d-flex align-items-start">
                <h2 className="mb-0 text-blue">About Us</h2>
                <sup className="">
                  <div className="dot dot-2"></div>
                </sup>
              </div>
              <p className="mt-3 pr-5">
                To be the first venue in the world to have 60 multi surface
                courts at one location and establish first one stop tennis
                academy in the Asia Pacific producing grand slam champions.
              </p>
              <div className="d-flex justify-content-start align-items-center">
                <span className="text-blue">Readmore</span>
                <span className="text-blue fs-1 mb-1 ms-2"> →</span>
              </div>
            </div>
            <Image
              src="/images/Rectangle 20.png"
              alt="image-2"
              height={260}
              width={230}
              className="img-fluid align-self-md-end align-self-center img-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
