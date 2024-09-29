import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer
          className="text-center text-lg-start"
          style={{ backgroundColor: "#54456b" }}
        >
          <div className="container d-flex justify-content-center py-5">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
              style={{ backgroundColor: "#54456b" }}
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
              style={{ backgroundColor: "#54456b" }}
            >
              <i className="fab fa-youtube"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
              style={{ backgroundColor: "#54456b" }}
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
              style={{ backgroundColor: "#54456b" }}
            >
              <i className="fab fa-twitter"></i>
            </button>
          </div>

          <div
            className="text-center text-white p-3"
            style={{ backgroundColor: "#54456b" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
