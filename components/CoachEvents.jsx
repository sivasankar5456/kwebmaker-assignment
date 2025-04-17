import Image from "next/image";
import React from "react";

const CoachEvents = () => {
  return (
    <div className="container-fluid px-0 mt-5">
      <div className="row g-0">
        {/* Left Coach Section */}
        <div className="col-md-6 position-relative start-0 d-flex flex-column min-vh-50 min-vh-md-100 ">
          <Image
            className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 img-cover"
            src="/images/Rectangle 34.png"
            alt="Hunter valley"
            height={250}
            width={450}
          />

          <div className="mb-4 mt-5 ms-5 pe-5 position-relative z-3 d-flex align-items-center h-100 w-75">
            <div>
              <div className="d-flex align-items-start">
                <h2 className="mb-2 text-light">Events</h2>
                <sup className="">
                  <div className="dot dot-2 bg-light"></div>
                </sup>
              </div>
              <div>
                <div className="flex-grow-1 w-75">
                  <p className="my-4 text-light opacity-75">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s.
                  </p>
                </div>
                <div className="d-flex text-light opacity-75 align-items-center">
                  <p className="mb-0">Read More</p>
                  <div className="arrow-container ms-2">
                    <Image
                      src="/logos/Arrow 2.png"
                      alt="SSA Logo"
                      width={20}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Event Section */}
        <div className="col-md-6 ps-5 position-relative d-flex flex-column min-vh-50 min-vh-md-100 events">
          <Image
            className="img-fluid position-absolute end-0 bottom-0 z-0 img-cover"
            src="/images/tennis.png"
            alt="Hunter valley"
            height={100}
            width={200}
          />
          <div className="mb-4 mt-5 ms-5 pe-5 position-relative z-3 d-flex align-items-center h-100 w-75">
            <div>
              <div className="d-flex align-items-start">
                <h2 className="mb-2 text-blue">Events</h2>
                <sup className="">
                  <div className="dot dot-2"></div>
                </sup>
              </div>
              <div>
                <div className="flex-grow-1 w-75">
                  <p className="text-black my-4">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s.
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0" style={{ color: "#003A5D" }}>
                    Read More
                  </p>
                  <div className="arrow-container ms-2">
                    <Image
                      src="/logos/Arrow 6.png"
                      alt="SSA Logo"
                      width={20}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachEvents;
