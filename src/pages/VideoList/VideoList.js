// VideoList.js

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./VideoList.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

const VideoList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize useTranslation

  const section = location.state && location.state.section;

  if (!section) {
    return <div>{t("videoList.noSectionData")}</div>;
  }

  const handleVideoClick = (videoId) => {
    const selectedVideo = section?.videos.find(
      (video) => video.id === parseInt(videoId)
    );
    if (selectedVideo) {
      navigate(`/video/${section.id}/${videoId}`, {
        state: { section, selectedVideo },
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container className="vcontainer border">
        {/* Top Section */}
        <Row>
          <Col md={3} sm={6} className="pr-md-4">
            {/* Top Left - Image */}
            <Image
              src={section.image}
              alt={section.title}
              className="mb-md-0 mb-4 p-4"
              style={{ width: "290px", height: "270px" }}
            />
          </Col>
          <Col md={4} sm={6}>
            {/* Top Right - Video Information */}
            <div className="p-4">
              <h2 className="mb-2">{section.title}</h2>
              <p className="mb-2">{section.description}</p>
              <p>
                {t("videoList.totalVideos")}: {section.videos.length}
              </p>
            </div>
          </Col>
        </Row>
        <hr className="my-2" />
        {/* Bottom Section - List of Videos */}
        <Col>
          {section &&
            section.videos &&
            section.videos.map((video, index) => (
              <Card key={video.id} className="video-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <span
                    className="bi bi-play-fill video-icon"
                    style={{
                      fontSize: "40px",
                      marginRight: "18px",
                      color: "#33869C",
                    }}
                  ></span>
                  <div>
                    <button
                      onClick={() => handleVideoClick(video.id)}
                      style={{
                        border: "none",
                        background: "none",
                        padding: "0",
                        cursor: "pointer",
                      }}
                    >
                      <strong
                        className="vtitle"
                        style={{ fontSize: "1.1rem", color: "#727374" }}
                      >
                        {video.title}
                      </strong>
                    </button>
                    <br />
                    <span style={{ fontSize: "0.9em" }}>{video.duration}</span>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default VideoList;
