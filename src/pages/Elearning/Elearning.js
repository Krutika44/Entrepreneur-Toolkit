import React from "react";
import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";
import sec1 from "../Elearning/sec1.png";
import sec2 from "../Elearning/sec2.png";
import sec3 from "../Elearning/sec3.png";
import sec4 from "../Elearning/sec4.png";
import sec5 from "../Elearning/sec5.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./Elearning.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";

const Elearning = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const { t } = useTranslation(); // Initialize useTranslation

  const handleSectionClick = (section) => {
    navigate(`/videolist/${section.id}`, { state: { section } });
  };

  const sections = [
    {
      id: 1,
      title: t("elearning.sections.section1.title"),
      description: t("elearning.sections.section1.description"),
      image: sec1,
      videoCount: 10,
      completedVideos: 5,
      videos: [
        {
          id: 1,
          title: t("elearning.sections.section1.videos.video1.title"),
          duration: t("elearning.sections.section1.videos.video1.duration"),
        },
        {
          id: 2,
          title: t("elearning.sections.section1.videos.video2.title"),
          duration: t("elearning.sections.section1.videos.video2.duration"),
        },
        {
          id: 3,
          title: t("elearning.sections.section1.videos.video3.title"),
          duration: t("elearning.sections.section1.videos.video3.duration"),
        },
        {
          id: 4,
          title: t("elearning.sections.section1.videos.video4.title"),
          duration: t("elearning.sections.section1.videos.video4.duration"),
        },
        {
          id: 5,
          title: t("elearning.sections.section1.videos.video5.title"),
          duration: t("elearning.sections.section1.videos.video5.duration"),
        },
        {
          id: 6,
          title: t("elearning.sections.section1.videos.video6.title"),
          duration: t("elearning.sections.section1.videos.video6.duration"),
        },
        {
          id: 7,
          title: t("elearning.sections.section1.videos.video7.title"),
          duration: t("elearning.sections.section1.videos.video7.duration"),
        },
        {
          id: 8,
          title: t("elearning.sections.section1.videos.video8.title"),
          duration: t("elearning.sections.section1.videos.video8.duration"),
        },
        {
          id: 9,
          title: t("elearning.sections.section1.videos.video9.title"),
          duration: t("elearning.sections.section1.videos.video9.duration"),
        },
        {
          id: 10,
          title: t("elearning.sections.section1.videos.video10.title"),
          duration: t("elearning.sections.section1.videos.video10.duration"),
        },
        // ... add more videos
      ],
    },
    {
      id: 2,
      title: t("elearning.sections.section2.title"),
      description: t("elearning.sections.section2.description"),
      image: sec2,
      videoCount: 5,
      completedVideos: 5,
      videos: [
        {
          id: 11,
          title: t("elearning.sections.section2.videos.video11.title"),
          duration: t("elearning.sections.section2.videos.video11.duration"),
        },
        {
          id: 12,
          title: t("elearning.sections.section2.videos.video12.title"),
          duration: t("elearning.sections.section2.videos.video12.title"),
        },
        {
          id: 13,
          title: t("elearning.sections.section2.videos.video13.title"),
          duration: t("elearning.sections.section2.videos.video13.duration"),
        },
        {
          id: 14,
          title: t("elearning.sections.section2.videos.video14.title"),
          duration: t("elearning.sections.section2.videos.video14.duration"),
        },
        {
          id: 15,
          title: t("elearning.sections.section2.videos.video15.title"),
          duration: t("elearning.sections.section2.videos.video15.duration"),
        },
      ],
    },
    {
      id: 3,
      title: t("elearning.sections.section3.title"),
      description: t("elearning.sections.section3.description"),
      image: sec3,
      videoCount: 6,
      completedVideos: 5,
      videos: [
        {
          id: 16,
          title: t("elearning.sections.section3.videos.video16.title"),
          duration: t("elearning.sections.section3.videos.video16.duration"),
        },
        {
          id: 17,
          title: t("elearning.sections.section3.videos.video17.title"),
          duration: t("elearning.sections.section3.videos.video17.duration"),
        },
        {
          id: 18,
          title: t("elearning.sections.section3.videos.video18.title"),
          duration: t("elearning.sections.section3.videos.video18.duration"),
        },
        {
          id: 19,
          title: t("elearning.sections.section3.videos.video19.title"),
          duration: t("elearning.sections.section3.videos.video19.duration"),
        },
        {
          id: 20,
          title: t("elearning.sections.section3.videos.video20.title"),
          duration: t("elearning.sections.section3.videos.video20.duration"),
        },
        {
          id: 21,
          title: t("elearning.sections.section3.videos.video21.title"),
          duration: t("elearning.sections.section3.videos.video21.duration"),
        },
      ],
    },
    {
      id: 4,
      title: t("elearning.sections.section4.title"),
      description: t("elearning.sections.section4.description"),
      image: sec4,
      videoCount: 7,
      completedVideos: 5,
      videos: [
        {
          id: 22,
          title: t("elearning.sections.section4.videos.video22.title"),
          duration: "(2 minutes 0 seconds)",
        },
        {
          id: 23,
          title: t("elearning.sections.section4.videos.video23.title"),
          duration: "(0 minutes 51 seconds)",
        },
        {
          id: 24,
          title: t("elearning.sections.section4.videos.video24.title"),
          duration: " (2 minutes 57 seconds)",
        },
        {
          id: 25,
          title: t("elearning.sections.section4.videos.video25.title"),
          duration: "(0 minutes 57 seconds)",
        },
        {
          id: 26,
          title: t("elearning.sections.section4.videos.video26.title"),
          duration: "(2 minutes 38 seconds)",
        },
        {
          id: 27,
          title: t("elearning.sections.section4.videos.video27.title"),
          duration: "(0 minutes 40 seconds)",
        },
        {
          id: 28,
          title: t("elearning.sections.section4.videos.video28.title"),
          duration: "(2 minutes 09 seconds)",
        },
      ],
    },
    {
      id: 5,
      title: t("elearning.sections.section5.title"),
      description: t("elearning.sections.section5.description"),
      image: sec5,
      videoCount: 7,
      completedVideos: 5,
      videos: [
        {
          id: 29,
          title: t("elearning.sections.section5.videos.video29.title"),
          duration: t("elearning.sections.section5.videos.video29.duration"),
        },
        {
          id: 30,
          title: t("elearning.sections.section5.videos.video30.title"),
          duration: t("elearning.sections.section5.videos.video30.duration"),
        },
        {
          id: 31,
          title: t("elearning.sections.section5.videos.video31.title"),
          duration: t("elearning.sections.section5.videos.video31.duration"),
        },
        {
          id: 32,
          title: t("elearning.sections.section5.videos.video32.title"),
          duration: t("elearning.sections.section5.videos.video32.duration"),
        },
        {
          id: 33,
          title: t("elearning.sections.section5.videos.video33.title"),
          duration: t("elearning.sections.section5.videos.video33.duration"),
        },
        {
          id: 34,
          title: t("elearning.sections.section5.videos.video34.title"),
          duration: t("elearning.sections.section5.videos.video34.duration"),
        },
        {
          id: 35,
          title: t("elearning.sections.section5.videos.video35.title"),
          duration: t("elearning.sections.section5.videos.video35.duration"),
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="text-left mb-3" style={{ fontSize: "2.5rem" }}>
          {t("elearning.title")}
        </h2>
        <hr className="mb-4" />
        <Row className="mt-4">
          {sections.map((section) => (
            <Col key={section.id} md={4} className="mb-4">
              <div onClick={() => handleSectionClick(section)}>
                <Card className="elearning-card h-200">
                  <Card.Img variant="top" src={section.image} />
                  <Card.Body className="d-flex flex-column">
                    {section.title && (
                      <Card.Title
                        className="mb-2"
                        style={{ fontWeight: "bold" }}
                      >
                        {section.title}
                      </Card.Title>
                    )}
                    {section.description && (
                      <Card.Text className="mb-2">
                        {section.description}
                      </Card.Text>
                    )}
                    <div className="mt-auto">
                      {section.completedVideos !== undefined &&
                        section.videoCount !== undefined && (
                          <ProgressBar
                            now={
                              (section.completedVideos / section.videoCount) *
                              100
                            }
                            label={`${section.completedVideos} / ${
                              section.videoCount
                            } ${t("elearning.videoCountLabel")}`}
                            className="mb-2"
                            // Increase the height of the progress bar
                          />
                        )}
                    </div>
                    <br />
                    {section.videoCount !== undefined &&
                      section.videoCount !== null && (
                        <Card.Text className="mb-2">
                          {section.videoCount} {t("elearning.videosLabel")}
                        </Card.Text>
                      )}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Elearning;
