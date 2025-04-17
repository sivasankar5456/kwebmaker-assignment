"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer className="py-4 mt-5">
      <div className="container">
        <div className="row align-items-start g-4 h-100" >
          <div className="col-12 col-md-3 align-content-end mt-5">
            <Image
              src="/logos/SSA-logo 1.png"
              alt="Company Logo"
              width={150}
              height={107}
              priority
              className=""
            />
          </div>

          {/* Links and Info */}
          <div className="col-12 col-md-9">
            <ul className="list-unstyled d-flex flex-wrap align-items-start justify-content-start justify-content-md-start gap-2 gap-md-5 fs-6 mb-4">
              {[
                "About Us",
                "Coaches",
                "News",
                "Matches",
                "Events",
                "FAQs",
                "Programs",
                "Amenities",
                "Blogs",
              ].map((label, idx) => (
                <li key={idx} className="nav-item">
                  <Link href="/" className="nav-link footer-link p-0">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <h5 className="fs-5 text-blue my-4">Signature Slam Academy</h5>
                <p className="fs-6 text-black my-3">
                  30 Wills Hill Road, Lovedale, NSW
                </p>
                <div className="d-flex align-items-center mb-2">
                  <Image
                    className="me-2"
                    src="/logos/fluent_call-20-regular.png"
                    alt="Phone"
                    height={20}
                    width={20}
                  />
                  <p className="fs-6 text-black mb-0">+91 5642589752</p>
                </div>
                <div className="d-flex align-items-center">
                  <Image
                    className="me-2"
                    src="/logos/iconamoon_email-thin.png"
                    alt="Email"
                    height={20}
                    width={20}
                  />
                  <p className="fs-6 text-black mb-0">info@ssagroup.com</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                <h5 className="fs-5 text-blue my-4">Connect with us</h5>
                <div className="d-flex align-items-center gap-3">
                  <Image
                    src="/logos/basil_facebook-outline.png"
                    alt="Facebook"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/logos/ri_twitter-x-fill.png"
                    alt="Twitter"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/logos/iconoir_instagram.png"
                    alt="Instagram"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/logos/iconoir_youtube.png"
                    alt="YouTube"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
        <div className="footer-bottom-navbar d-flex  justify-content-evenly align-items-center">
            <p className="text-light ">Terms And Conditions</p>
            <p className="text-light ">2023 ALl RIghts Reserved www.signatureslamacademy.com</p>
            <p className="text-light ">Privacy Policy</p>

        </div>
    </>
  );
}
