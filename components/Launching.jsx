import Image from "next/image";
import React from "react";

const Launching = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div className="col-md-5 text-white d-flex align-items-stretch launch-right">
          <div className="d-flex flex-column flex-grow-1 w-100 p-5 p-md-5 ms-3 mt-4">
            <div style={{ minHeight: "180px" }}>
              <p className="launching-text mb-2 fs-5">LAUNCHING</p>
              <h2 className="heading mb-4">
                Signature Slam Academy
                <br />
                Hunter Valley
              </h2>
              <h5 className="my-4 mb-4">SSA Connectivity</h5>
            </div>

            <ul className="connectivity-list d-flex flex-column gap-3 px-0 flex-grow-1 overflow-auto">
              <li className="d-flex align-items-center">
                <Image
                  className="me-2 img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span>Hunter Valley Golf And Country Club</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>220m</span>
              </li>
              <li className="d-flex align-items-center">
                <Image
                  className="me-2 img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span>Rydges Resort Hunter Valley</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>500m</span>
              </li>
              <li className="d-flex align-items-center">
                <Image
                  className="me-2 img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span> Cessnock Airport</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>1.2km</span>
              </li>

              <li className="d-flex align-items-center">
                <Image
                  className="me-2 img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span>Cessnock CBD</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>7km</span>
              </li>
              <li className="d-flex align-items-center">
                <Image
                  className="me-2 img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span>Nulkaba Public School</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>4.8km</span>
              </li>
              <li className="d-flex align-items-center">
                <Image
                  className="me-2img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span>Cessnock Hospital</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>7.5km</span>
              </li>

              <li className="d-flex align-items-center">
                <Image
                  className="me-2 img-cover"
                  src="/logos/ion_golf-outline.png"
                  alt="Hunter valley"
                  height={20}
                  width={20}
                />
                <span>McDonald's, KFC, Oporto</span>
                <div className="flex-grow-1 mx-2 my-3 my-dashed-line  "></div>
                <span>7km</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-7">
          <Image
            className="img-fluid w-100 h-100 img-cover"
            src="/images/image 5.png"
            alt="Hunter valley"
            height={350}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Launching;
