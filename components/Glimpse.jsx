import Image from "next/image";
import React from "react";

const Glimpse = () => {
  return (
    <div className="container">
      <div className="mb-4 mt-5">
        <div className="d-flex align-items-start">
          <h2 className="mb-2 text-blue">A Glimpse of Excellense</h2>
          <sup className="">
            <div className="dot dot-2"></div>
          </sup>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div className="flex-grow-1 subtitle-text-container">
            <p className="text-muted text-dark mb-0">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <div className="d-flex align-items-center">
            <p className="mb-0" style={{ color: "#003A5D" }}>
              View All
            </p>
            <div className="arrow-container ms-2">
              <Image
                src="/logos/Arrow 6.png"
                alt="arrow"
                width={20}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-5">
        <Image
          className="col-md-3 rounded"
          src="/images/Rectangle 12.png"
          alt="image-1"
          height={350}
          width={50}
        />
        <Image
          className="col-md-9 rounded"
          src="/images/Rectangle 13.png"
          alt="image-2"
          height={350}
          width={450}
        />
      </div>
    </div>
  );
};

export default Glimpse;
