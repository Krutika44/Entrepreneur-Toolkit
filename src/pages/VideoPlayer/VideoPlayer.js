import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Modal,
  Alert,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import { auth, database, ref } from "../firebase";
import { push } from "firebase/database";
import "./VideoPlayer.css";
import Navbar from "../Navbar/navbar";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const VideoPlayer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const sections = [
    {
      id: 1,
      title: t("elearning.sections.section1.title"),
      description: t("elearning.sections.section1.description"),
      videos: [
        {
          id: 1,
          title: t("elearning.sections.section1.videos.video1.title"),
          duration: t("elearning.sections.section1.videos.video1.duration"),
          videoFileName: "s1v1.mp4",
        },
        {
          id: 2,
          title: t("elearning.sections.section1.videos.video2.title"),
          duration: t("elearning.sections.section1.videos.video2.duration"),
          videoFileName: "s1v2.mp4",
        },
        {
          id: 3,
          title: t("elearning.sections.section1.videos.video3.title"),
          duration: t("elearning.sections.section1.videos.video3.duration"),
          videoFileName: "s1v3.mp4",
        },
        {
          id: 4,
          title: t("elearning.sections.section1.videos.video4.title"),
          duration: t("elearning.sections.section1.videos.video4.duration"),
          videoFileName: "s1v4.mp4",
        },
        {
          id: 5,
          title: t("elearning.sections.section1.videos.video5.title"),
          duration: t("elearning.sections.section1.videos.video5.duration"),
          videoFileName: "s1v5.mp4",
        },
        {
          id: 6,
          title: t("elearning.sections.section1.videos.video6.title"),
          duration: t("elearning.sections.section1.videos.video6.duration"),
          videoFileName: "s1v6.mp4",
        },
        {
          id: 7,
          title: t("elearning.sections.section1.videos.video7.title"),
          duration: t("elearning.sections.section1.videos.video7.duration"),
          videoFileName: "s1v7.mp4",
        },
        {
          id: 8,
          title: t("elearning.sections.section1.videos.video8.title"),
          duration: t("elearning.sections.section1.videos.video8.duration"),
          videoFileName: "s1v8.mp4",
        },
        {
          id: 9,
          title: t("elearning.sections.section1.videos.video9.title"),
          duration: t("elearning.sections.section1.videos.video9.duration"),
          videoFileName: "s1v9.mp4",
        },
        {
          id: 10,
          title: t("elearning.sections.section1.videos.video10.title"),
          duration: t("elearning.sections.section1.videos.video10.duration"),
          videoFileName: "s1v10.mp4",
        },
      ],
    },
    {
      id: 2,
      title: t("elearning.sections.section2.title"),
      description: t("elearning.sections.section2.description"),
      videos: [
        {
          id: 11,
          title: t("elearning.sections.section2.videos.video11.title"),
          duration: t("elearning.sections.section2.videos.video11.duration"),
          videoFileName: "s2v1.mp4",
        },
        {
          id: 12,
          title: t("elearning.sections.section2.videos.video12.title"),
          duration: t("elearning.sections.section2.videos.video12.duration"),
          videoFileName: "s2v2.mp4",
        },
        {
          id: 13,
          title: t("elearning.sections.section2.videos.video13.title"),
          duration: t("elearning.sections.section2.videos.video13.duration"),
          videoFileName: "s2v3.mp4",
        },
        {
          id: 14,
          title: t("elearning.sections.section2.videos.video14.title"),
          duration: t("elearning.sections.section2.videos.video14.duration"),
          videoFileName: "s2v4.mp4",
        },
        {
          id: 15,
          title: t("elearning.sections.section2.videos.video15.title"),
          duration: t("elearning.sections.section2.videos.video15.duration"),
          videoFileName: "s2v5.mp4",
        },
      ],
    },
    {
      id: 3,
      title: t("elearning.sections.section3.title"),
      description: t("elearning.sections.section3.description"),
      videos: [
        {
          id: 16,
          title: t("elearning.sections.section3.videos.video16.title"),
          duration: t("elearning.sections.section3.videos.video16.duration"),
          videoFileName: "s3v1.mp4",
        },
        {
          id: 17,
          title: t("elearning.sections.section3.videos.video17.title"),
          duration: t("elearning.sections.section3.videos.video17.duration"),
          videoFileName: "s3v2.mp4",
        },
        {
          id: 18,
          title: t("elearning.sections.section3.videos.video18.title"),
          duration: t("elearning.sections.section3.videos.video18.duration"),
          videoFileName: "s3v3.mp4",
        },
        {
          id: 19,
          title: t("elearning.sections.section3.videos.video19.title"),
          duration: t("elearning.sections.section3.videos.video19.duration"),
          videoFileName: "s3v4.mp4",
        },
        {
          id: 20,
          title: t("elearning.sections.section3.videos.video20.title"),
          duration: t("elearning.sections.section3.videos.video20.duration"),
          videoFileName: "s3v5.mp4",
        },
        {
          id: 21,
          title: t("elearning.sections.section3.videos.video21.title"),
          duration: t("elearning.sections.section3.videos.video21.duration"),
          videoFileName: "s3v6.mp4",
        },
      ],
    },

    {
      id: 4,
      title: t("elearning.sections.section4.title"),
      description: t("elearning.sections.section4.description"),
      videos: [
        {
          id: 22,
          title: t("elearning.sections.section4.videos.video22.title"),
          duration: t("elearning.sections.section4.videos.video22.duration"),
          videoFileName: "s4v1.mp4",
        },
        {
          id: 23,
          title: t("elearning.sections.section4.videos.video23.title"),
          duration: t("elearning.sections.section4.videos.video23.duration"),
          videoFileName: "s4v2.mp4",
        },
        {
          id: 24,
          title: t("elearning.sections.section4.videos.video24.title"),
          duration: t("elearning.sections.section4.videos.video24.duration"),
          videoFileName: "s4v3.mp4",
        },
        {
          id: 25,
          title: t("elearning.sections.section4.videos.video25.title"),
          duration: t("elearning.sections.section4.videos.video25.duration"),
          videoFileName: "s4v4.mp4",
        },
        {
          id: 26,
          title: t("elearning.sections.section4.videos.video26.title"),
          duration: t("elearning.sections.section4.videos.video26.duration"),
          videoFileName: "s4v5.mp4",
        },
        {
          id: 27,
          title: t("elearning.sections.section4.videos.video27.title"),
          duration: t("elearning.sections.section4.videos.video27.duration"),
          videoFileName: "s4v6.mp4",
        },
        {
          id: 28,
          title: t("elearning.sections.section4.videos.video28.title"),
          duration: t("elearning.sections.section4.videos.video28.duration"),
          videoFileName: "s4v7.mp4",
        },
      ],
    },

    {
      id: 5,
      title: t("elearning.sections.section5.title"),
      description: t("elearning.sections.section5.description"),
      videos: [
        {
          id: 29,
          title: t("elearning.sections.section5.videos.video29.title"),
          duration: t("elearning.sections.section5.videos.video29.duration"),
          videoFileName: "s5v1.mp4",
        },
        {
          id: 30,
          title: t("elearning.sections.section5.videos.video30.title"),
          duration: t("elearning.sections.section5.videos.video30.duration"),
          videoFileName: "s5v2.mp4",
        },
        {
          id: 31,
          title: t("elearning.sections.section5.videos.video31.title"),
          duration: t("elearning.sections.section5.videos.video31.duration"),
          videoFileName: "s5v3.mp4",
        },
        {
          id: 32,
          title: t("elearning.sections.section5.videos.video32.title"),
          duration: t("elearning.sections.section5.videos.video32.duration"),
          videoFileName: "s5v4.mp4",
        },
        {
          id: 33,
          title: t("elearning.sections.section5.videos.video33.title"),
          duration: t("elearning.sections.section5.videos.video33.duration"),
          videoFileName: "s5v5.mp4",
        },
        {
          id: 34,
          title: t("elearning.sections.section5.videos.video34.title"),
          duration: t("elearning.sections.section5.videos.video34.duration"),
          videoFileName: "s5v6.mp4",
        },
        {
          id: 35,
          title: t("elearning.sections.section5.videos.video35.title"),
          duration: t("elearning.sections.section5.videos.video35.duration"),
          videoFileName: "s5v7.mp4",
        },
      ],
    },
  ];
  const { videoId, sectionId } = useParams();
  const navigate = useNavigate();
  const sectionIndex = sections.findIndex((s) => s.id === parseInt(sectionId));
  const section = sections[sectionIndex];
  const videoIndex = section?.videos.findIndex(
    (video) => video.id === parseInt(videoId)
  );
  const selectedVideo = section?.videos[videoIndex];
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });
  useEffect(() => {
    applyDarkModeStyles();
  }, [darkMode]);

  useEffect(() => {
    applyDarkModeStyles();
  }, []);

  const applyDarkModeStyles = () => {
    const rootElement = document.body;
    if (rootElement) {
      if (darkMode) {
        rootElement.classList.add("dark-theme");
      } else {
        rootElement.classList.remove("dark-theme");
      }
    }

    const feedbackForm = document.querySelector(".feedback-form");
    if (feedbackForm) {
      if (darkMode) {
        feedbackForm.classList.add("dark-theme");
      } else {
        feedbackForm.classList.remove("dark-theme");
      }
    }

    const cards = document.querySelectorAll("video-player-container");
    cards.forEach((card) => {
      if (darkMode) {
        card.classList.add("bg-dark", "text-white");
      } else {
        card.classList.remove("bg-dark", "text-white");
      }
    });
  };
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // State to manage the visibility of the alert

  // Function to capture user's email (Assuming you have implemented authentication)
  const userEmail = auth.currentUser?.email;

  if (!selectedVideo) {
    return <div>{t("videoPlayer.noVideoFound")}</div>;
  }

  const videoPath = `/videos/section${sectionId}/${selectedVideo.videoFileName}`;

  const nextVideoId =
    videoIndex < section.videos.length - 1
      ? section.videos[videoIndex + 1].id
      : null;
  const prevVideoId = videoIndex > 0 ? section.videos[videoIndex - 1].id : null;

  const handleVideoEnd = () => {
    if (videoIndex === section.videos.length - 1) {
      setShowFeedbackForm(true);
    }
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
    setRating(rating); // Update the rating state
  };

  const renderStars = () => {
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className={`bi bi-star${i <= selectedRating ? "-fill" : ""}`}
          onClick={() => handleStarClick(i)}
          style={{
            cursor: "pointer",
            color: i <= selectedRating ? "#F8F41B" : "black",
            fontSize: "28px",
            marginRight: "5px",
          }}
        ></span>
      );
    }
    return <div className="rating-stars">{stars}</div>;
  };

  const handleClose = () => setShowFeedbackForm(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const getFeedbackTableName = (sectionId) => {
    return `feedbacks_section${sectionId}`;
  };

  const handleSubmitFeedback = () => {
    if (!rating && !feedback) {
      alert("Please provide a rating or feedback before submitting.");
      return;
    }
  
    // Save ratings and feedback to the appropriate database table for this section
    const feedbackData = {
      userEmail,
      sectionId,
      totalVideosWatched: section.videos.length,
      rating,
      feedback,
    };
  
    const feedbackRef = ref(database, getFeedbackTableName(sectionId));
    push(feedbackRef, feedbackData);
  
    setShowFeedbackForm(false);
    setShowAlert(true);
  
    setTimeout(() => {
      navigate("/elearning");
    }, 2000);
  };
  
  
  return (
    <>
      <Navbar />
      <Container
        fluid
        className="video-player-container"
        style={{ marginLeft: "16%", marginTop: "5%", marginBottom: "10%" }}
      >
        <Row className="justify-content-center">
          <Col md={8} className="pl-md-4">
            <Card className="video-holder">
              <Card.Body>
                <h5>{selectedVideo.title}</h5>
                <p>{selectedVideo.description}</p>
                <p>
                  {t("videoPlayer.duration")}: {selectedVideo.duration}
                </p>
                <hr />
                <div
                  className="video-wrapper"
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <ReactPlayer
                    url={videoPath}
                    controls
                    width="100%"
                    height="370px"
                    onEnded={handleVideoEnd}
                  />
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  {prevVideoId && (
                    <Link to={`/video/${sectionId}/${prevVideoId}`}>
                      <button className="prevbutton">
                        {t("videoPlayer.previous")}
                      </button>
                    </Link>
                  )}
                  {nextVideoId && (
                    <Link to={`/video/${sectionId}/${nextVideoId}`}>
                      <button className="nextbutton">
                        {t("videoPlayer.next")}
                      </button>
                    </Link>
                  )}
                  <Col xs="auto">
                    {showFeedbackForm ||
                    videoIndex === section.videos.length - 1 ? (
                      <button
                        className="gfeedback"
                        onClick={() => setShowFeedbackForm(true)}
                      >
                        {t("videoPlayer.giveFeedback")}
                      </button>
                    ) : null}
                  </Col>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal
          show={showFeedbackForm}
          onHide={handleClose}
          className="feedback-form"
        >
          <Modal.Header closeButton>
            <Modal.Title>{t("videoPlayer.title")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="ratings">
                <Form.Label className="me-2">
                  {t("videoPlayer.rateSection")}
                </Form.Label>
                <div className="rating-stars d-inline-flex justify-content-center">
                  {renderStars()}
                </div>
              </Form.Group>
              <Row className="mb-3">
                <Col xs={1}>
                  <Form.Label>{t("videoPlayer.feedback")}</Form.Label>
                </Col>
                <Col xs={111}>
                  <Form.Group controlId="feedback" className="mb-0">
                    <InputGroup>
                      <FormControl
                        as="textarea"
                        rows={3}
                        placeholder={t("videoPlayer.enterFeedback")}
                        value={feedback}
                        onChange={handleFeedbackChange}
                        className="feedback-textarea"
                        style={{ resize: "none", maxWidth: "100%" }} // Limiting textarea width and disabling resize
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="closebtn" onClick={handleClose}>
              {t("videoPlayer.close")}
            </button>
            <button className="sfeedbackbtn" onClick={handleSubmitFeedback}>
              {t("videoPlayer.submitFeedback")}
            </button>
          </Modal.Footer>
        </Modal>

        <Alert
          variant="success"
          show={showAlert} // Show the alert based on the state
          onClose={() => setShowAlert(false)} // Function to hide the alert
          dismissible
          className="position-fixed top-0 start-50 translate-middle-x m-3 mt-5" // Position the alert at the top middle
        >
          {t("videoPlayer.thankYouFeedback")}
        </Alert>
      </Container>
      <Footer />
    </>
  );
};

export default VideoPlayer;
