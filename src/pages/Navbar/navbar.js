import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap"; // Import Bootstrap Dropdown
import "./Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    applyDarkModeStyles();
  }, [darkMode]); // Call whenever darkMode changes

  useEffect(() => {
    applyDarkModeStyles();
  }, []); // Call once when component mounts

  const applyDarkModeStyles = () => {
    const rootElement = document.documentElement;
    const bodyElement = document.body;
    const cards = document.querySelectorAll(".card");

    if (darkMode) {
      rootElement.classList.add("dark-theme");
      bodyElement.classList.add("dark-theme");
      cards.forEach((card) => {
        card.classList.add("bg-dark", "text-white");
      });
    } else {
      rootElement.classList.remove("dark-theme");
      bodyElement.classList.remove("dark-theme");
      cards.forEach((card) => {
        card.classList.remove("bg-dark", "text-white");
      });
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save selected theme mode in local storage
      return newMode;
    });
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="logo-container">
            <img src="finallogo.png" alt="Logo" className="logo" />
            <span className="brand-text">{t("navbar.brandText")}</span>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t("navbar.home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {t("navbar.about")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                {t("navbar.blogs")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/elearning">
                {t("navbar.elearning")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business-plan-generator">
                {t("navbar.businessPlanGenerator")}
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/logo-generator">
            {t("navbar.Generator")}
            </a>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Dropdown className="translatorDropdown">
            <Dropdown.Toggle>
              {selectedLanguage === "en"
                ? "English"
                : selectedLanguage === "mr"
                ? "Marathi"
                : selectedLanguage === "fr"
                ? "Français"
                : selectedLanguage === "hi"
                ? "Hindi"
                : selectedLanguage === "es"
                ? "Spanish"
                : selectedLanguage === "de"
                ? "German"
                : "Language"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("mr")}>
                Marathi
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("hi")}>
                Hindi
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("fr")}>
                Français
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("es")}>
                Spanish
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("de")}>
                German
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center">
          <div className="form-check form-switch me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label
              className="form-check-label ms-2 mb-0"
              htmlFor="flexSwitchCheckDefault"
            >
              {t("navbar.darkMode")}
            </label>
          </div>

          <div className="profile-section me-3">
            {user ? (
              <i
                className="bi bi-person-circle me-2 fs-3"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title={`${t("navbar.welcome")}, ${user.displayName}!`}
              ></i>
            ) : null}
          </div>

          <div className="sign-out-section">
            {user && (
              <div
                className="sign-out-icon"
                onClick={handleSignOut}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title={t("navbar.signOut")}
              >
                <i className="bi bi-box-arrow-right fs-3 cursor-pointer"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
