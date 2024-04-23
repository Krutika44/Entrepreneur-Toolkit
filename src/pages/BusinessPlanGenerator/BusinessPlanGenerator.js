import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./BusinessPlanGenerator.css";
import Navbar from "../Navbar/navbar";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import LoadingSpinner from "./LoadingSpinner"; // Import the loading spinner component

const BusinessPlanGenerator = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    executiveSummary: "",
    companyName: "",
    productsAndServices: "",
    managementTeam: "",
    marketingAnalysis: "",
    financialPlan: "",
    operationalPlan: "",
  });
  const [fontStyle, setFontStyle] = useState("Arial");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a delay of 3 seconds to show the loading spinner
    setTimeout(() => {
      setLoading(false);
      navigate("/generated-plan");
    }, 3000);
  };

  const handleColorSelect = (selectedColors) => {
    localStorage.setItem("businessPlanColors", JSON.stringify(selectedColors));
  };

  const handleFontChange = (e) => {
    setFontStyle(e.target.value);
  };

  return (
    <>
      <Navbar />
      {loading && <LoadingSpinner />} {/* Conditionally render the loading spinner */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mb-4">
              {t("businessPlanGenerator.title")}
            </h1>
            <div className="card" id="bformcard">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="row g-3">
                  {Object.keys(formData).map((fieldName, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <label className="form-label-with-icon">
                        <i className={`bi ${getIcon(fieldName)}`}></i>{" "}
                        {t(`businessPlanGenerator.${fieldName}`)}:
                      </label>
                      <textarea
                        rows={3}
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        className="custom-textarea form-control"
                        style={{ outline: "none" }}
                        placeholder={t(`businessPlanGenerator.placeholder`, {
                          fieldName: t(`businessPlanGenerator.${fieldName}`),
                        })}
                      />
                    </div>
                  ))}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fontStyle" className="form-label-with-icon">
                      <i className="bi bi-file-earmark-font"></i>{" "}
                      {t("businessPlanGenerator.selectFont")}:
                    </label>
                    <select
                      id="fontStyle"
                      className="fontStyle form-select"
                      value={fontStyle}
                      onChange={handleFontChange}
                    >
                      <option value="Arial">Arial</option>
                      <option value="Verdana">Verdana</option>
                      <option value="Helvetica">Helvetica</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Courier New">Courier New</option>
                      <option value="Cursive">Cursive</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <ColorPicker onSelectColor={handleColorSelect} />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="business-generate-btn">
                      {t("businessPlanGenerator.generatePlan")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const getIcon = (fieldName) => {
  switch (fieldName) {
    case "executiveSummary":
      return "bi-file-earmark-text";
    case "companyName":
      return "bi-building";
    case "productsAndServices":
      return "bi-basket";
    case "managementTeam":
      return "bi-people";
    case "marketingAnalysis":
      return "bi-bar-chart";
    case "financialPlan":
      return "bi-cash";
    case "operationalPlan":
      return "bi-gear";
    default:
      return "";
  }
};

export default BusinessPlanGenerator;
