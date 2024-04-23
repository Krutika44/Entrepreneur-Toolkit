import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import loginimg from "../Login/login.png";
import { Alert } from "react-bootstrap";
import "./Login.css";

const SignIn = () => {
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    country: "",
    password: "",
  });
  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showAlert, setShowAlert] = useState({ type: "", message: "" });
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, name, phoneNumber, country } = userData;

    if (!name || !phoneNumber || !email || !country || !password) {
      setShowAlert({
        type: "danger",
        message: "Please fill in all the required fields.",
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      await submitData({ name, email, phoneNumber, country, password }, true);
      setShowAlert({ type: "success", message: "Signed In Successfully!" });
      setTimeout(() => {
        history("/");
      }, 5000);
    } catch (err) {
      console.error("Authentication error:", err.code, err.message);
      setShowAlert({
        type: "danger",
        message: "Authentication failed. Please try again.",
      });
    }
  };

  const postUserData = (event) => {
    const { name, value } = event.target;

    if (name === "password" && value.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
    } else {
      setPasswordError("");
    }

    if (name === "phoneNumber" && value.startsWith("0")) {
      setPhoneNumberError("Phone number cannot start with 0.");
    } else {
      setPhoneNumberError("");
    }

    if (name === "name" && /\d/.test(value)) {
      setNameError("Name cannot contain numbers.");
    } else {
      setNameError("");
    }

    setUserData({ ...userData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
  };

  const submitData = async (userData, isSignIn) => {
    try {
      const { name, phoneNumber, country, email, password } = userData;

      const dbRefSignIn = ref(database, `SignIn/${email.replace(/\./g, "_")}`);
      const dbRefLogin = ref(database, `login/${email.replace(/\./g, "_")}`);

      if (isSignIn) {
        await set(dbRefSignIn, {
          name,
          phoneNumber,
          country,
          email,
          password,
        });
      }

      await set(dbRefLogin, {
        email,
        password,
      });

      setUserData({
        name: "",
        phoneNumber: "",
        email: "",
        country: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error.message);
      setShowAlert({
        type: "danger",
        message: "Failed to store data. Please try again.",
      });
    }
  };

  return (
    <div className="lcontainer my-5 p-0 border rounded-5 shadow min-vh-90 flex-column justify-content-end align-items-end">
      <div className="row">
        <div
          className="col-md-6 justify-content-center mt-auto pe-3 align-items-center"
          style={{ borderRight: "2px solid #ddd", height: "550px" }}
        >
          <h1 className="mt-5 text-center">Sign Up</h1>
          <form className="mt-2" method="post" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="input-group mb-1">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    className="form-control mb-1"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={postUserData}
                  />
                </div>
                {nameError && (
                  <small className="text-danger" style={{marginLeft:"22%"}}>{nameError}</small>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group mb-1">
                  <span className="input-group-text">
                    <i className="bi bi-phone"></i>
                  </span>
                  <input
                    className="form-control mb-1"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={userData.phoneNumber}
                    onChange={postUserData}
                  />
                </div>
                {phoneNumberError && (
                  <small className="text-danger" style={{marginLeft:"22%"}}>{phoneNumberError}</small>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input-group mb-1">
                  <span className="input-group-text">
                    <i className="bi bi-globe"></i>
                  </span>
                  <input
                    className="form-control mb-1"
                    name="country"
                    placeholder="Country"
                    value={userData.country}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group mb-1">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    className="form-control mb-1"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group mb-1">
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                  >
                    {userData.showPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash-fill"></i>
                    )}
                  </span>
                  <input
                    className="form-control mb-1 password-input"
                    name="password"
                    type={userData.showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={userData.password}
                    onChange={postUserData}
                  />
                </div>
                {passwordError && (
                  <small className="text-danger"  style={{marginLeft:"22%"}}>{passwordError}</small>
                )}
              </div>
            </div>
            <button className="custom-signin-button mt-2">Sign Up</button>
            {showAlert.type && (
              <Alert
                variant={showAlert.type}
                onClose={() => setShowAlert({ type: "", message: "" })}
                dismissible
                className="position-fixed top-0 start-50 translate-middle-x"
                style={{ zIndex: 9999, minWidth: "300px" }}
              >
                {showAlert.message}
              </Alert>
            )}
          </form>
          <div className="mt-3 mb-0 text-center">
            Already registered? <Link to="/login">Login here</Link>.
          </div>
        </div>

        <div className="limg col-md-6">
          <img src={loginimg} alt="Description" className="limg-fluid" />

          <p className="slogan">
            Unleash Your Potential,
            <br />
            Ignite Your Passion,
            <br />
            and Build Your Legacy
            <br />
          </p>
        </div>
      </div>
      <div
        id="alerts-container"
        className="position-fixed top-0 align-center p-1"
        style={{ zIndex: 9999 }}
      ></div>
    </div>
  );
};

export default SignIn;
