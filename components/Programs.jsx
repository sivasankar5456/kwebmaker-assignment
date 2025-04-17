import Image from "next/image";
import React from "react";

const Programs = () => {
  return (
    <div className="container">
      <div className="mb-4 mt-5">
        <div className="d-flex align-items-start">
          <h2 className="mb-2 text-blue">programs</h2>
          <sup className="">
            <div className="dot dot-2"></div>
          </sup>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div className="flex-grow-1 subtitle-text-container">
            <p className="text-muted text-dark mb-2">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a gallery took a gallery
              of type scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="d-flex align-items-center">
            <p className="mb-0" style={{ color: "#003A5D" }}>
              Read More
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

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-90 border-0 position-relative">
              <Image
                className="card-img-top rounded img-cover"
                src="/images/Rectangle 14.png"
                alt="image-1"
                height={400}
                width={46}
              />
              <div className="text-center position-absolute start-0 end-0 bottom-0 pb-4 z-1">
                <h5 className="card-title text-light fs-5">Academy</h5>
                <p className="card-text text-light fs-6">Live and train with us</p>
              </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.38)",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
          <div className="col">
            <div className="card h-90 border-0 position-relative">
              <Image
                className="card-img-top rounded img-cover"
                src="/images/Rectangle 15.png"
                alt="image-2"
                height={400}
                width={46}
              />
              <div className="text-center position-absolute start-0 end-0 bottom-0 pb-4 z-1">
                <h5 className="card-title text-light fs-5">Camps</h5>
                <p className="card-text text-light fs-6">Train like a pro with us</p>
              </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.38)",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
          <div className="col">
            <div className="card h-90 border-0 position-relative">
              <Image
                className="card-img-top rounded img-cover"
                src="/images/Rectangle 16.png"
                alt="image-3"
                height={400}
                width={46}
              />
              <div className="text-center position-absolute start-0 end-0 bottom-0 pb-4 z-1">
                <h5 className="card-title text-light fs-5">Porfarmance</h5>
                <p className="card-text text-light fs-6">
                  Elevate yout gsme with us
                </p>
              </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.38)",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
