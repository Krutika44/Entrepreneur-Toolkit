import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import loginimg from "../Login/login.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Alert } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showAlert, setShowAlert] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userData;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowAlert({ type: "success", message: "Logged In Successfully!" });
      setTimeout(() => {
        history("/");
      }, 2000); // Delay for 2 seconds before redirecting
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

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }

    if (name === "password" && value.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
    } else {
      setPasswordError("");
    }

    setUserData({ ...userData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
  };

  return (
    <div className="lcontainer my-5 p-0 border rounded-5 shadow">
      <div className="row">
        {/* Left Column - Form */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center pe-3 align-items-center"
          style={{ borderRight: "2px solid #ddd", height: "498px" }}
        >
          <h1 className="mt-1 text-center">Login</h1>
          <form className="mt-4" method="post" onSubmit={handleSubmit}>
            <div className="input-group mb-1">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                className="form-control mb-2"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={postUserData}
              />
            </div>
            {emailError && (
              <small className="text-danger" style={{marginLeft:"22%"}}>{emailError}</small>
            )}

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
                className="form-control mb-2 password-input"
                name="password"
                type={userData.showPassword ? "text" : "password"}
                placeholder="Password"
                value={userData.password}
                onChange={postUserData}
              />
            </div>
            <div>
            {passwordError && (
              <small className="text-danger" style={{marginLeft:"22%"}}>{passwordError}</small>
            )}
</div>
            <button className="custom-login-button">Login</button>
          </form>
          <div className="mt-3 text-center">
            Not registered yet? <Link to="/signup">SignUp here</Link>.
          </div>

          {showAlert && (
            <Alert
              variant={showAlert.type}
              onClose={() => setShowAlert(null)}
              dismissible
              className="position-fixed top-0 start-50 translate-middle-y"
              style={{ zIndex: 9999, minWidth: "300px" }}
            >
              {showAlert.message}
            </Alert>
          )}
        </div>

        {/* Right Column - Image */}
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
    </div>
  );
};

export default Login;
