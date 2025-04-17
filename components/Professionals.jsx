import Image from "next/image";
import React from "react";

const Professionals = () => {
  return (
    <div className="container">
      <div className="mb-4 mt-5">
        <div className="d-flex align-items-start">
          <h2 className="mb-2 text-blue">Meet our Professionals</h2>
          <sup className="">
            <div className="dot dot-2"></div>
          </sup>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div className="flex-grow-1 subtitle-text-container">
            <p className="text-muted text-dark mb-2">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <div className="d-flex align-items-center">
            <p className="mb-0" style={{ color: "#003A5D" }}>
              View all
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

      <div className="container-fluid px-0 ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div className="col card border-0 position-relative ">
            <Image
              src="/images/Mask group (1).png"
              alt="image-1"
              height={330}
              width={60}
              className="card-img-top rounded img-cover"
            />
            <div className="text-start w-75 pe-2 my-3">
              <h5 className="card-title text-blue fs-4 mb-3">Craig Tiley</h5>
              <p className="card-text text-black fs-6 pe-5">
                CEO Tennis Australia & Australia Open
              </p>
            </div>
          </div>

          <div className="col card border-0 position-relative">
            <Image
              src="/images/Mask group (2).png"
              alt="image-2"
              height={330}
              width={60}
              className="card-img-top rounded img-cover"
            />
            <div className="text-start w-75 pe-2 my-3">
              <h5 className="card-title text-blue fs-4 mb-3">Stephen Farrow</h5>
              <p className="card-text text-black fs-6 pe-3">
                Director - TOurnament, Players & International Relations
              </p>
            </div>
          </div>

          <div className="col card border-0 position-relative">
            <Image
              src="/images/Mask group (3).png"
              alt="image-3"
              height={330}
              width={60}
              className="card-img-top rounded img-cover"
            />
            <div className="text-start w-75 pe-2 my-3">
              <h5 className="card-title text-blue fs-4 mb-3">Cameron Person</h5>
              <p className="card-text text-black fs-6 pe-5">
                Head Major Events - Tennis Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
