import React, { useState, useEffect } from 'react';
import './logoGenerator.css';



const LogoGenerator = ({ state, colorOne, colorTwo, style }) => {
  // Destructure logoText from props
  const { previewSize, fontSize, letterColor, logoText, font, rotation } = state;


  // State for tracking if logo rendering is complete
  const [logoRendered, setLogoRendered] = useState(false);

  // Function to render the logo
  // Function to render the logo
const renderLogo = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const size = previewSize;

  canvas.width = size;
  canvas.height = size;

  // Set gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, 0);
  gradient.addColorStop(0, colorOne);
  gradient.addColorStop(1, colorTwo);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Apply rotation if needed
  ctx.translate(size / 2, size / 2);
  ctx.rotate(rotation * Math.PI / 180);
  ctx.translate(-size / 2, -size / 2);

  // Set font style
  ctx.font = `${fontSize * (size / 100)}px ${style}`;
  ctx.fillStyle = letterColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(logoText, size / 2, size / 2);



  // Clear and redraw canvas
  const logoContainer = document.getElementById('logo-container');
  logoContainer.innerHTML = ''; // Clear previous content
  logoContainer.appendChild(canvas);

  // Set logo rendering state to true
  setLogoRendered(true);
};


  // Render the logo when component mounts
  useEffect(() => {
    renderLogo();
  }, [state]); // Re-render logo when state changes


  const handleDownload = () => {
    const canvas = document.getElementById('logo-container canvas');
    const url = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = url;
    link.click();
  };


  return (
    <div className="logogen">
      <div id="logo-generator-container">
        <div className="lgcontainer">
          <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="col-md-6 border rounded p-4" id="logo-container">
              {logoRendered && (
                <canvas style={{ fontFamily: style }} id="logo-canvas" width={previewSize} height={previewSize}></canvas>
              )}
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 border rounded p-4">
              {logoRendered && (
                <button onClick={handleDownload} className="btn btn-primary mt-3">Download Logo</button>
              )}
            </div>
          </div>
        </div>
      </div>
  </div>
    
  );
              };
  export default LogoGenerator;