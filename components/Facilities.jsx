import Image from "next/image";
import React from "react";
import Button from "./Button";

const Facilities = () => {
  return (
    <section className="position-relative facilities">
      <div className="container-fluid h-50 px-5 facilities-1">
        <div className="container">
          <div className="mb-4 mt-5">
            <div className="d-flex align-items-start">
              <h2 className="mb-2 text-blue">Facilities</h2>
              <sup className="">
                <div className="dot dot-2"></div>
              </sup>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 pe-lg-5">
              <p className="text-black">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="facilities-2"></div>
      <div className="h-50 facilities-3"></div>

      <section className="position-absolute start-0 end-0 facilities-absolute">
        <div className="container py-5">
          <div className="d-flex flex-column gap-5 facilities-absolute-card-container">
            {/* TOP LEFT GROUP - 2 cards in a row */}
            <div className="d-flex justify-content-start flex-wrap gap-5 ">
              <div className="card facilities-card bg-transparent border-0">
                <div className="position-relative facilities-card-image-container mb-2">
                  <Image
                    src="/images/Rectangle 21.png"
                    alt="Card 1"
                    layout="fill"
                    className="rounded img-cover"
                  />
                  <Image
                    src="/logos/gridicons_play.png"
                    alt="Card 1"
                    height={40}
                    width={40}
                    className="position-absolute z-3 plybutton"
                  />
                </div>
                <div className="card-body text-start px-0">
                  <h5 className="card-title text-light fs-3">Tennis</h5>
                  <div
                    className="row gap-1 my-3 facility-card-button-container"
                    style={{ marginLeft: "1px" }}
                  >
                    <Button
                      className="bg-light border-0 me-1 py-0"
                      style={{ color: "#173931", height: "30px" }}
                      title="9 Clay Courts"
                    />
                    <Button
                      title="4 Hard Courts"
                      className="bg-light border-0 py-0"
                      style={{ color: "#173931", height: "30px" }}
                    />
                  </div>
                  <p className="facility-card-text">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s..
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-start flex-wrap gap-4">
                {/* Card 1 */}
                <div className="card facilities-card bg-transparent border-0">
                  <div className="position-relative facilities-card-image-container mb-2">
                    <Image
                      src="/images/Rectangle 22.png"
                      alt="Card 1"
                      layout="fill"
                      className="rounded img-cover"
                    />
                    <Image
                      src="/logos/gridicons_play.png"
                      alt="Card 1"
                      height={40}
                      width={40}
                      className="position-absolute z-3 plybutton"
                    />
                  </div>
                  <div className="card-body text-start px-0">
                    <h5 className="card-title text-light fs-3">Accommodation</h5>
                    <div
                      className="row gap-1 my-3 facility-card-button-container"
                      style={{ marginLeft: "1px" }}
                    >
                      <Button
                        className="bg-light border-0 me-1 py-0"
                        style={{ color: "#173931", height: "30px" }}
                        title="9 Clay Courts"
                      />
                      <Button
                        title="4 Hard Courts"
                        className="bg-light border-0 py-0"
                        style={{ color: "#173931", height: "30px" }}
                      />
                    </div>
                    <p className="facility-card-text">
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s..
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM RIGHT GROUP - 2 cards in a row */}
            <div className="d-flex justify-content-end flex-wrap gap-5 facility-card-button-container2 ">
              {/* Card 3 */}
              <div className="card facilities-card bg-transparent border-0">
                <div className="position-relative facilities-card-image-container mb-2">
                  <Image
                    src="/images/Rectangle 28.png"
                    alt="Card 1"
                    layout="fill"
                    className="rounded img-cover"
                  />
                  <Image
                    src="/logos/gridicons_play.png"
                    alt="Card 1"
                    height={40}
                    width={40}
                    className="position-absolute z-3 plybutton"
                  />
                </div>
                <div className="card-body text-start px-0 ">
                  <h5 className="card-title text-blue fs-3">Fitness</h5>
                  <div
                    className="row gap-1 my-3 facility-card-button-container"
                    style={{ marginLeft: "1px" }}
                  >
                    <Button
                      className="text-light border-0 me-1 py-0 facility-bottom-card-btn"
                      title="Gym"
                    />
                    <Button
                      title="Fitnes Room"
                      className=" text-light border-0 py-0 facility-bottom-card-btn"
                    />
                  </div>
                  <p className="facility-card-text text-black">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s..
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="card facilities-card bg-transparent border-0">
                <div className="position-relative facilities-card-image-container mb-2">
                  <Image
                    src="/images/Rectangle 29.png"
                    alt="Card 1"
                    layout="fill"
                    className="rounded img-cover"
                  />
                  <Image
                    src="/logos/gridicons_play.png"
                    alt="Card 1"
                    height={40}
                    width={40}
                    className="position-absolute z-3 plybutton"
                  />
                </div>
                <div className="card-body text-start px-0">
                  <h5 className="card-title text-blue fs-3">Recovery</h5>
                  <div
                    className="row gap-1 my-3 facility-card-button-container"
                    style={{ marginLeft: "1px" }}
                  >
                    <Button
                      title="Ppa"
                      className="text-light border-0 me-1 py-0 facility-bottom-card-btn"
                    />
                    <Button
                      title="Pool"
                      className="text-light border-0 me-1 py-0 facility-bottom-card-btn"
                    />
                    <Button
                      title="Message"
                      className="text-light border-0 py-0 facility-bottom-card-btn"
                    />
                  </div>
                  <p className="facility-card-text text-black">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Facilities;
