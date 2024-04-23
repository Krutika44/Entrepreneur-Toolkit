import React, { useRef, useState, useEffect } from "react";
import { Card, Col, Alert } from "react-bootstrap";
import html2pdf from "html2pdf.js"; // Import html2pdf.js
import "./GeneratedPlan.css"; // Import your CSS file
import Navbar from "../Navbar/navbar";
import { useTranslation } from "react-i18next";

const GeneratedPlan = () => {
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("businessPlanData")) || {}
  );
  const colors = JSON.parse(localStorage.getItem("businessPlanColors")) || {};
  const [fontStyle, setFontStyle] = useState(
    localStorage.getItem("businessPlanFont") || "Arial"
  );
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const mainCard = document.getElementById("mainbusicard");
    if (mainCard) {
      mainCard.style.fontFamily = fontStyle;
    }
  }, [fontStyle]);

  const downloadPDF = () => {
    const mainCard = document.getElementById("mainbusicard");

    // Translate content before generating PDF
    const translatedContent = translateContent(mainCard);

    html2pdf().from(translatedContent).save("business_plan.pdf");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const translateContent = (element) => {
    const clonedElement = element.cloneNode(true);

    // Translate text content using t() function from react-i18next
    const translateTextContent = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = t(node.textContent);
      } else {
        node.childNodes.forEach(translateTextContent);
      }
    };

    clonedElement.childNodes.forEach(translateTextContent);
    return clonedElement;
  };

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div>
      <div className="container mt-5" ref={contentRef}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="d-flex mx-auto">
              <Card
                className="border-0 mx-auto"
                style={{ backgroundColor: colors.mainCardColor }}
                id="mainbusicard"
              >
                <h1 className="text-center mb-4 mt-5">
                  {t("generatedPlan.businessPlan")}
                </h1>
                <Card.Body>
                  <div className="row">
                    <div className="col-md-12">
                      <Card
                        className="mb-3"
                        style={{ backgroundColor: colors.otherCardsColor }}
                        id="businesscard"
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          {t("generatedPlan.executiveSummary")}
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.executiveSummary,
                            }}
                            onBlur={(e) =>
                              updateFormData(
                                "executiveSummary",
                                e.target.innerHTML
                              )
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Card
                        className="mb-3"
                        style={{ backgroundColor: colors.otherCardsColor }}
                        id="businesscard"
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          {t("generatedPlan.companyName")}
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.companyName,
                            }}
                            onBlur={(e) =>
                              updateFormData("companyName", e.target.innerHTML)
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="row">
                    <Col>
                      <Card
                        className="mb-3"
                        id="businesscard"
                        style={{
                          height: "100%",
                          backgroundColor: colors.otherCardsColor,
                        }}
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          {t("generatedPlan.productsServices")}
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.productsAndServices,
                            }}
                            onBlur={(e) =>
                              updateFormData(
                                "productsAndServices",
                                e.target.innerHTML
                              )
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        className="mb-3"
                        id="businesscard"
                        style={{
                          height: "100%",
                          backgroundColor: colors.otherCardsColor,
                        }}
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          {t("generatedPlan.managementTeam")}
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.marketingAnalysis,
                            }}
                            onBlur={(e) =>
                              updateFormData(
                                "marketingAnalysis",
                                e.target.innerHTML
                              )
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                  <br />
                  <div className="row">
                    <Col>
                      <Card
                        className="mb-3"
                        id="businesscard"
                        style={{
                          height: "100%",
                          backgroundColor: colors.otherCardsColor,
                        }}
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          {t("generatedPlan.marketingAnalysis")}
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.managementTeam,
                            }}
                            onBlur={(e) =>
                              updateFormData(
                                "managementTeam",
                                e.target.innerHTML
                              )
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card
                        className="mb-3"
                        id="businesscard"
                        style={{
                          height: "100%",
                          backgroundColor: colors.otherCardsColor,
                        }}
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          {t("generatedPlan.FinancialPlan")}
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.financialPlan,
                            }}
                            onBlur={(e) =>
                              updateFormData(
                                "financialPlan",
                                e.target.innerHTML
                              )
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        className="mb-3"
                        id="businesscard"
                        style={{
                          height: "100%",
                          backgroundColor: colors.otherCardsColor,
                        }}
                      >
                        <Card.Header
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "18px",
                            backgroundColor: colors.otherCardsColor,
                          }}
                        >
                          Operational Plan
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="editable-content"
                            contentEditable
                            dangerouslySetInnerHTML={{
                              __html: formData.operationalPlan,
                            }}
                            onBlur={(e) =>
                              updateFormData(
                                "operationalPlan",
                                e.target.innerHTML
                              )
                            }
                          />{" "}
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                  <br />
                </Card.Body>
              </Card>{" "}
            </div>
          </div>
        </div>
      </div>
      <Alert
        show={showAlert}
        variant="success"
        className="position-fixed top-0 start-50 translate-middle-x"
        style={{ zIndex: 1000 }}
      >
        {t("generatedPlan.alertMessage")}
      </Alert>
      <button
        className="download-pdf-btn"
        onClick={downloadPDF}
        title={t("generatedPlan.downloadButton")}
      >
        <i className="bi bi-download"></i>
      </button>
    </div>
  );
};

export default GeneratedPlan;
