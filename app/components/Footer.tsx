import Link from "next/link";
import "../globals.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "../globals.css";

const Footer = () => {
  return (
    <footer className="ftco-footer">
      <div className="container-xl">
        <div className="row mb-5 pb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <Link href="/" className="navbar-brand align-items-center">
                  <span>
                    Unwind <small>Hotel Booking</small>
                  </span>
                </Link>
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="ftco-footer-social mt-2">
                <li>
                  <Link href="#" className="pl-[14px] pt-[14px]">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="pl-[14px] pt-[14px]">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="pl-[14px] pt-[14px]">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="ftco-footer-widget mb-4">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>Free
                        Wifi
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>Easy
                        Booking
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>
                        Restaurant
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>
                        Swimming Pool
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ftco-footer-widget mb-4">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>Beauty
                        &amp; Health {/* Use &amp; for & */}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>60&quot;
                        Flatscreen TV {/* Use &quot; for " */}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>Cold
                        Aircondition
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fa fa-chevron-right me-2"></span>Help &amp;
                        Support {/* Use &amp; for & */}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/" className="quick-link">
                    <span className="fa fa-chevron-right me-2"></span>Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="quick-link">
                    <span className="fa fa-chevron-right me-2"></span>About
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="quick-link">
                    <span className="fa fa-chevron-right me-2"></span>Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/resto-bar" className="quick-link">
                    <span className="fa fa-chevron-right me-2"></span>Resto &amp;
                    Bar {/* Use &amp; for & */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker"></span>
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+2 392 3929 210</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">info@yourdomain.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-darken">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                className="mb-0"
                style={{ color: "rgba(255,255,255,.5)", fontSize: "13px" }}
              >
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This template is made with{" "}
                <i className="fa fa-heart color-danger" aria-hidden="true"></i>{" "}
                by{" "}
                <Link href="/" target="_blank" rel="nofollow noopener">
                  Bimal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
