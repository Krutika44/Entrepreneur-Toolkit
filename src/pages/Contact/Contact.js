import React, { useState } from "react";
import "./contact.css";
import contact from "./Contact.jpg";
import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    query: "",
  });

  const [showAlert, setShowAlert] = useState(null);

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, query } = userData;

    if (firstName && lastName && phone && email && query) {
      try {
        const res = await fetch(
          "https://entrepreneur-toolkit-71341-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              query,
            }),
          }
        );

        if (res.ok) {
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            query: "",
          });
          setShowAlert({ type: "success", message: t("contact.dataStored") });
        } else {
          throw new Error("Failed to store data");
        }
      } catch (error) {
        console.error("Error:", error);
        setShowAlert({ type: "danger", message: t("contact.storeDataFailed") });
      }
    } else {
      setShowAlert({ type: "danger", message: t("contact.fillAllFields") });
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-11">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <figure>
                    <img
                      src={contact}
                      alt="contatUsImg"
                      className="contatUsImg"
                    />
                  </figure>
                </div>

                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7 h-100">
                  <form method="POST">
                    <h2
                      className="mb-3 mt-5"
                      style={{ marginLeft: "32%", color: "#0499a3" }}
                    >
                      {t("contact.contact")}
                    </h2>

                    <div className="contact-input-field row">
                      <div className="col">
                        <label htmlFor="firstName">
                          <i className="bi bi-person-fill"></i>{" "}
                          {t("contact.firstName")}
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          placeholder={t("contact.enterFirstName")}
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="lastName">
                          <i className="bi bi-person-fill"></i>{" "}
                          {t("contact.lastName")}
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          placeholder={t("contact.enterLastName")}
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="contact-input-field row">
                      <div className="col">
                        <label htmlFor="phone">
                          <i className="bi bi-phone-fill"></i>{" "}
                          {t("contact.phoneNumber")}
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder={t("contact.enterPhoneNumber")}
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="email">
                          <i className="bi bi-envelope-fill"></i>{" "}
                          {t("contact.email")}
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder={t("contact.enterEmail")}
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="qcontact-input-field">
                      <label htmlFor="query">
                        <i className="bi bi-chat-left-fill"></i>{" "}
                        {t("contact.enterQuery")}
                      </label>
                      <textarea
                        name="query"
                        id="query"
                        className="form-control"
                        rows="4" // Specify the number of rows here
                        placeholder={t("contact.enterYourQuery")}
                        value={userData.query}
                        onChange={postUserData}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style"
                      onClick={submitData}
                    >
                      {t("contact.submit")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showAlert && (
        <Alert
          variant={showAlert.type}
          onClose={() => setShowAlert(null)}
          dismissible
          className="position-fixed top-0 start-50 translate-middle-x"
          style={{ zIndex: 9999, minWidth: "300px" }}
        >
          {showAlert.message}
        </Alert>
      )}
    </>
  );
};

export default Contact;
