import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "./home1.jpg";
import home2 from "./home2.jpg";
import home3 from "./home3.jpg";
import home4 from "./home4.jpg";
import Navbar from "../Navbar/navbar";
import "./HomePage.css";
import about from "./about.jpg";
import Contact from "../Contact/Contact";
import LanguageProvider from "../LanguageProvider";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    nextArrow: (
      <div className="slick-arrow slick-next">
        <i className="bi bi-arrow-right-circle-fill text-black" />
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <i className="bi bi-arrow-left-circle-fill text-black" />
      </div>
    ),
  };

  const scrollToContent = () => {
    const mainContent = document.getElementById("features-section");
    mainContent.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="main-content">
      <Navbar />
      <div className="container-fluid hd-image-container">
        <div className="row">
          <div className="col-lg-6 text-light welcome-text">
            <h1>
              {t("homepage.welcome")}{" "}
              <span style={{ color: "#016c74" }}>{t("navbar.brandText")}</span>
            </h1>
            <p className="hslogan">{t("homepage.slogan")}</p>
            <button className="get-startedbtn" onClick={scrollToContent}>
              {t("homepage.getStarted")}
            </button>
          </div>
          <div className="col-lg-6 px-0">
            <Slider {...settings}>
              <div>
                <img src={home1} alt="Slide 1" className="hd-image" />
              </div>
              <div>
                <img src={home2} alt="Slide 2" className="hd-image" />
              </div>
              <div>
                <img src={home3} alt="Slide 3" className="hd-image" />
              </div>
              <div>
                <img src={home4} alt="Slide 4" className="hd-image" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div
        id="features-section"
        className="container mb-0"
        style={{ marginTop: "7%" }}
      >
        <h2 className="text-center mb-5">
          {t("homepage.featuresHeading")}{" "}
          <span style={{ color: "#0499a3" }}>{t("homepage.features")}</span>
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <Link to="/blog">
              <div className="card h-100 home-card">
                <div className="card-body">
                  <h1 className="hicons">
                    <i className="bi bi-newspaper"></i>
                  </h1>
                  <h4 className="card-title">{t("homepage.blogs.title")}</h4>
                  <p className="card-text" style={{ color: "#7C7C7C" }}>
                    {t("homepage.blogs.description")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/business-plan-generator">
              <div className="card h-100 home-card">
                <div className="card-body">
                  <h1 className="hicons">
                    <i className="bi bi-file-earmark-check"></i>
                  </h1>
                  <h4 className="card-title">
                    {t("homepage.businessPlanGenerator.title")}
                  </h4>
                  <p className="card-text" style={{ color: "#7C7C7C" }}>
                    {t("homepage.businessPlanGenerator.description")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/elearning">
              <div className="card h-100 home-card">
                <div className="card-body">
                  <h1 className="hicons">
                    <i className="bi bi-book"></i>
                  </h1>
                  <h4 className="card-title">
                    {t("homepage.elearning.title")}
                  </h4>
                  <p className="card-text" style={{ color: "#7C7C7C" }}>
                    {t("homepage.elearning.description")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Logo Generator Card */}
          <div className="col-lg-6">
            <Link to="/logo-generator">
              <div className="card h-100 home-card">
                <div className="card-body">
                  <h1 className="hicons">
                    <i className="bi bi-pen"></i>
                  </h1>
                  <h4 className="card-title">LogoGenerator</h4>
                  <p className="card-text" style={{ color: "#7C7C7C" }}>
                    Create professional and unique logos effortlessly with our Logo Generator feature. 
                    Customize templates, fonts, colors, and icons to craft a logo that perfectly represents 
                    your brand identity.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-0 " style={{ marginTop: "7%" }}>
        <h2 className="text-center mb-5 mt-0">
          {t("homepage.aboutUsHeading")}{" "}
          <span style={{ color: "#0499a3" }}>{t("homepage.aboutUs")}</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-6 about-animation">
          <img src={about} className="aimg" alt="About Us" />
        </div>
        <div className="col-lg-6 about-info">
          <p className="mt-4 mt-lg-0">
            {/* Translation for the about us content */}
            <p>
              <i className="bi bi-gear-fill aicons"></i>
              {t("homepage.aboutUsContent")}
            </p>
            <p>
              <i className="bi bi-lightbulb-fill aicons"></i>
              {t("homepage.aboutUsContent2")}
            </p>
            <p>
              <i className="bi bi-people-fill aicons"></i>{" "}
              {t("homepage.aboutUsContent3")}
            </p>
          </p>
        </div>
      </div>
      <div className="container-fluid mt-0">
        <h2 className="text-center mb-5 mt-0">
          {t("homepage.contact")}{" "}
          <span style={{ color: "#0499a3" }}>{t("homepage.contactUs")}</span>
        </h2>
      </div>
      <Contact />
      <div
        className="scroll-to-top"
        style={{ display: showScroll ? "flex" : "none" }}
        onClick={scrollTop}
      >
        <i className="bi bi-arrow-up-circle-fill"></i>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
