import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageProvider from "./pages/LanguageProvider"; // Import the LanguageProvider component
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/Blogpage/BlogPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Elearning from "./pages/Elearning/Elearning";
import VideoList from "./pages/VideoList/VideoList";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
import SignIn from "./pages/Login/SignIn";
import BusinessPlanGenerator from "./pages/BusinessPlanGenerator/BusinessPlanGenerator";
import GeneratedPlan from "./pages/GeneratedPlan/GeneratedPlan";
import PageNotFound from "./pages/PageNotFound/PageNotFound"; // Import the NotFound component
import LogoGenerator from "./pages/LogoGenerator/logoGenerator";
import Generator from "./pages/LogoGenerator/MainLogo";

function App() {
  return (
    <LanguageProvider>
      {({ language, changeLanguage }) => (
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignIn />} />
              <Route path="/elearning" element={<Elearning />} />
              <Route path="/videolist/:id" element={<VideoList />} />
              <Route
                path="/video/:sectionId/:videoId"
                element={<VideoPlayer />}
              />
              <Route
                path="/business-plan-generator"
                element={<BusinessPlanGenerator />}
              />
              <Route path="/generated-plan" element={<GeneratedPlan />} />
              {/* Catch-all route for Page Not Found */}
              <Route path="*" element={<PageNotFound />} />
              <Route path="/logo-generator" element={<Generator />} />
            </Routes>
          </div> 
        </BrowserRouter>
      )}
    </LanguageProvider>
  );
}

export default App;
