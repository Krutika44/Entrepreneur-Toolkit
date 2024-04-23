import React, { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Import your i18n configuration

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng);
  };

  return (
    <I18nextProvider i18n={i18n}>
      {children({ language, changeLanguage })}
    </I18nextProvider>
  );
};

export default LanguageProvider;
