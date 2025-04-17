"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    // Close navbar when a link is clicked (optional)
    setIsNavbarOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        isNavbarOpen ? "navbar-open" : ""
      }`}
    >
      <div className="container align-items-center">
        <Link className="navbar-brand d-flex align-items-center" href="#">
          <Image
            src="/logos/SSA-Logo03 1.png"
            alt="SSA Logo"
            width={60}
            height={38}
            objectFit="cover"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        

        <div
          className={`collapse navbar-collapse justify-content-between ${
            isNavbarOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-lg-auto me-auto text-lg-center text-start">
            {[
              "About Us",
              "Matches",
              "Programs",
              "Coaches",
              "Amenities",
              "Events",
              "News",
              "Blogs",
            ].map((label, idx) => (
              <li className="nav-item" key={idx}>
                <Link href="/" className="nav-link" onClick={handleNavLinkClick}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ms-lg-0 ms-3 mt-3 mt-lg-0">
            <Button title="Contact Us" className="bold-text1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
