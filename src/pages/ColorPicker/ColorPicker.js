// ColorPicker.js
import React, { useState } from "react";
import "./ColorPicker.css";
import { useTranslation } from "react-i18next";


const ColorPicker = ({ onSelectColor }) => {
  const { t } = useTranslation();
  const [mainCardColor, setMainCardColor] = useState("#ffffff"); // Default color for main card
  const [otherCardsColor, setOtherCardsColor] = useState("#f0f0f0"); // Default color for other cards

  const handleMainCardColorChange = (e) => {
    setMainCardColor(e.target.value);
    onSelectColor({ mainCardColor: e.target.value, otherCardsColor });
  };

  const handleOtherCardsColorChange = (e) => {
    setOtherCardsColor(e.target.value);
    onSelectColor({ mainCardColor, otherCardsColor: e.target.value });
  };

  return (
    <div>
      <br />
      <div className="color-picker-row">
        <label className="color-picker-label">
          <i className="bi bi-palette"></i>  {t("colors.mainCardColor")}
        </label>
        <input
          className="color-picker-input"
          type="color"
          value={mainCardColor}
          onChange={handleMainCardColorChange}
        />
      </div>
      <br />
      <div className="color-picker-row">
        <label className="color-picker-label">
          <i className="bi bi-palette"></i> {t("colors.otherCardColor")}
        </label>
        <input
          className="color-picker-input"
          type="color"
          value={otherCardsColor}
          onChange={handleOtherCardsColorChange}
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default ColorPicker;
