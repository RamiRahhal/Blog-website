import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2024 Rami Rahhal
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              {/* <use href="#twitter"></use> */}
              <FaTwitter />
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              {/* <use href="#instagram"></use> */}
              <FaInstagram />
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              {/* <use href="#facebook"></use> */}
              <FaFacebook />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
