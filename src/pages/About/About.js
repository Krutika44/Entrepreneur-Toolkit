import React from "react";
import "./Aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Navbar from '../Navbar/navbar';
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="main-contents">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-center mt-5">
              <b>
                <span className="text-capitalize bg-dark text-white py-2 px-3">
                  {t("aboutPage.aboutUsHeading")}
                </span>
              </b>
            </h2>
            <p className="text-muted text-center mb-5"></p>
            <section className="toolkit-section">
              <div className="row">
                <div className="col-md-4">
                  <div className="card card1 mb-4 h-100">
                    <div className="card-body">
                      <h3 className="card-title">{t("aboutPage.businessPlanTitle")}</h3>
                      <p className="card-text ">{t("aboutPage.businessPlanDescription")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 h-100">
                    <div className="card-body">
                      <h3 className="card-title">{t("aboutPage.missionTitle")}</h3>
                      <p className="card-text">{t("aboutPage.missionDescription")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card3 mb-4 h-100">
                    <div className="card-body">
                      <h3 className="card-title">{t("aboutPage.visionTitle")}</h3>
                      <p className="card-text">{t("aboutPage.visionDescription")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default About;
