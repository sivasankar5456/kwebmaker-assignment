"use client"; // only if you're using App Router

import Image from "next/image";
import React from "react";

const KeyFeatures = () => {
  const features = [
    "First venue in the world",
    "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis academy in Asia Pacific",
  ];

  return (
    <div className="container py-5">
      <div className="mb-4 mt-5">
        <div className="d-flex align-items-start">
          <h2 className="mb-2 text-blue">Key Fetures</h2>
          <sup className="">
            <div className="dot dot-2"></div>
          </sup>
        </div>
        <p className="">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s.
        </p>
      </div>
      <div className="row">
        <div className="col-md-5 ms-2 me-5">
          <ul className="list-unstyled">
            {features.map((item, idx) => (
              <li className="" key={idx}>
                <div className="mb-3 d-flex align-items-start " key={idx}>
                  <div className="arrow-container me-2">
                    <Image
                      src="/logos/Arrow 6.png"
                      alt="arrow"
                      width={20}
                      height={10}
                    />
                  </div>

                  <span> {item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-1 d-none d-md-block"></div>

        <div className="col-md-5 ms-2">
          <ul className="list-unstyled">
            {features.map((item, idx) => (
              <li className="" key={idx}>
                <div className="mb-3 d-flex align-items-start " key={idx}>
                  <div className="arrow-container me-2">
                    <Image
                      src="/logos/Arrow 6.png"
                      alt="arrow"
                      width={20}
                      height={10}
                    />
                  </div>

                  <span> {item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
