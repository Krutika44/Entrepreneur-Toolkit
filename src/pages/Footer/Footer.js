import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="Footer">
      <div className="container foot">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-12 mb-4">
            <h3>
              <span>{t("footer.toolkit")}</span>
            </h3>
            <p>{t("footer.resource")}</p>
            <div className="footer-icons">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12 mb-4">
            <h3>
              <span>{t("footer.quickLinks")}</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="/about">{t("footer.aboutUs")}</a>
              </li>
              <li>
                <a href="/">{t("footer.contactUs")}</a>
              </li>
              <li>
                <a href="/blog">{t("footer.blogs")}</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12 mb-4">
            <h5>{t("footer.contactUs")}</h5>
            <p>
              <i className="fa-solid fa-phone"></i> {t("footer.phoneNumber")}
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> siddhiauti123@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>{" "}
              {t("footer.location")}
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-12 mb-4">
            <h3>{t("footer.businessForums")}</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.reddit.com/r/Entrepreneur/">
                  {t("footer.entrepreneurSubreddit")}
                </a>
              </li>
              <li>
                <a href="https://www.smallbusinessforums.org/">
                  {t("footer.smallBusinessForums")}
                </a>
              </li>
              <li>
                <a href="https://www.warriorforum.com/">
                  {t("footer.warriorForum")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
