import GoogleFontLoader from 'react-google-font-loader';
import React, { useState } from "react";
import LogoGenerator from "./logoGenerator";
import "./logoGenerator.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

const Generator = () => {
  const [state, setState] = useState({
    previewSize: 256,
    downloadSize: 512,
    fontSize: 35,
    logoText: "",
    letterColor: "#000000",
    font: "Arial",
    logoGenerated: false,
    backgroundColor: "#FFFFFF",
    rotation: 0,
    gradientDirection: "to bottom", // Default gradient direction
    colorOne: "#ffffff", // Example color
    colorTwo: "#0ffff0",
    shape: 'text', // Example color
  });

  const handleDownload = () => {
    // Implement the logic to handle the download here
    // For example, you can use the canvas element toDataURL method to generate a downloadable image
    const canvas = document.getElementById('logo-canvas');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  


  const updatePreviewSize = (value) => {
    setState({ ...state, previewSize: value });
  };

  const updateDownloadSize = (value) => {
    setState({ ...state, downloadSize: value });
  };

  const updateFontSize = (value) => {
    setState({ ...state, fontSize: value });
  };

  const updateLetterColor = (value) => {
    setState({ ...state, letterColor: value });
  };

  const updateFont = (value) => {
    setState({ ...state, font: value });
  };

  const updateRotation = (value) => {
    setState({ ...state, rotation: value });
  };

  const updateColorOne = (value) => {
    setState({ ...state, colorOne: value });
  };

  const updateColorTwo = (value) => {
    setState({ ...state, colorTwo: value });
  };

  const updateGradientDirection = (value) => {
    setState({ ...state, gradientDirection: value });
  };

  const updateShape = (value) => { // Add function to update shape
    setState({ ...state, shape: value });
  };

  const [fontStyle, setFontStyle] = useState("");
  const [logo, setLogo] = useState("");

  const handleInputChange = (event) => {
    setFontStyle(event.target.value);
  };

  const updateLogoText = (value) => {
    setState({ ...state, logoText: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, logoGenerated: true });
  };

 
  return (
    <div>
      <Navbar />
      <div id="controls">
        <div className="form-group">
          <form onSubmit={handleSubmit}>
          <label htmlFor="downloadSize">Download Size (px)</label>
            <div className="inputDiv">
              <input
                type="number"
                id="downloadSize"
                defaultValue={state.downloadSize}
                onChange={(e) => updateDownloadSize(e.target.value)}
                title="Changes downloaded image size"
              />
            </div>
            

            <label htmlFor="fontSize">Font Size (% of canvas)</label>
            <div className="inputDiv">
              <input
                type="number"
                id="fontSize"
                defaultValue={state.fontSize}
                min="1"
                max="30"
                onChange={(e) => updateFontSize(e.target.value)}
                title="Changes font size"
              />
            </div>

            <label htmlFor="letterColor">Letter Color</label>
            <div className="inputDiv">
              <input
                type="color"
                id="letterColor"
                defaultValue={state.letterColor}
                onChange={(e) => updateLetterColor(e.target.value)}
                title="Update logo letter color"
              />
            </div>

            <label htmlFor="rotation">Rotation Angle (degrees)</label>
            <div className="inputDiv">
              <input
                type="number"
                id="rotation"
                defaultValue={state.rotation}
                onChange={(e) => updateRotation(e.target.value)}
                title="Specifies the rotation angle for the logo"
              />
            </div>

            <label htmlFor="font">Font</label>
            <div className="inputDiv">
              {fontStyle && <GoogleFontLoader fonts={[{ font: fontStyle }]} />}
              <select
                id="fontStyle"
                value={fontStyle}
                onChange={handleInputChange}
                placeholder="Example: Roboto, Open Sans"
              >
                <option value="">Select a font</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Pacifico">Pacifico</option>
                <option value="Lato">Lato</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Playfair Display">Playfair Display</option>
                <option value="Source Sans Pro">Source Sans Pro</option>
                <option value="Nunito">Nunito</option>
                <option value="Ubuntu">Ubuntu</option>
                <option value="Merriweather">Merriweather</option>
                <option value="Oswald">Oswald</option>
                <option value="Raleway">Raleway</option>
                <option value="Cabin">Cabin</option>
                <option value="PT Sans">PT Sans</option>
                <option value="Droid Sans">Droid Sans</option>
                <option value="Alegreya">Alegreya</option>
                <option value="Quicksand">Quicksand</option>
                <option value="Roboto Condensed">Roboto Condensed</option>

                {/* Add more options for other Google Fonts */}
              </select>
            </div>

            <label htmlFor="logoText">Logo Text</label>
            <div className="inputDiv">
              <input
                type="text"
                id="logoText"
                value={state.logoText}
                onChange={(e) => updateLogoText(e.target.value)}
                title="Changes the generated logo text"
              />
            </div>

            <label htmlFor="colorOne">Color One</label>
            <div className="inputDiv">
              <input
                type="color"
                id="colorOne"
                defaultValue={state.colorOne}
                onChange={(e) => updateColorOne(e.target.value)}
                title="Specifies the first color for the gradient background"
              />
            </div>

            <label htmlFor="colorTwo">Color Two</label>
            <div className="inputDiv">
              <input
                type="color"
                id="colorTwo"
                defaultValue={state.colorTwo}
                onChange={(e) => updateColorTwo(e.target.value)}
                title="Specifies the second color for the gradient background"
              />
            </div>

            <label htmlFor="gradientDirection">Gradient Direction</label>
            <div className="inputDiv">
              <select
                id="gradientDirection"
                defaultValue={state.gradientDirection}
                onChange={(e) => updateGradientDirection(e.target.value)}
                title="Choose the direction of the gradient background"
              >
                <option value="to right">To Right</option>
                <option value="to bottom">To Bottom</option>
                <option value="to left">To Left</option>
                <option value="to top">To Top</option>
              </select>
            </div>

    

            <button type="submit" className="btn btn-primary">
              Generate Logo
            </button>
          </form>
        </div>
      </div>
      {state.logoGenerated && (
        <LogoGenerator
          state={state}
          logotext={logo}
          colorOne={state.colorOne}
          colorTwo={state.colorTwo}
          style={fontStyle}
        />
      )}
     
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          {state.logoGenerated && (
            <button onClick={handleDownload} className="btn btn-primary w-100">
              Download Logo
            </button>
          )}
        </div>
      </div>
        
    
      <Footer />
    </div>
  );
};

export default Generator;

