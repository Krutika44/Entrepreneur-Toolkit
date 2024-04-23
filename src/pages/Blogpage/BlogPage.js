import React from "react";
import "./BlogPage.css";
import bimg from "../Blogpage/Business2.jpeg";
import bimg2 from "../Blogpage/person1.jpg";
import bimg3 from "../Blogpage/person2.jpg";
import bimg4 from "../Blogpage/person3.jpg";
import bimg5 from "../Blogpage/picture4.jpg";
import bimg6 from "../Blogpage/picture5.jfif";
import Navbar from "../Navbar/navbar";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="blog-scontainer">
        <div>
          <header className="main_header">
            <div className="d-flex justify-content-center align-items-center flex-column py-5">
              <h1 className="main_heading">{t("blogPage.title")}</h1>
              <p className="main_heading__para">
                {t("blogPage.welcome")}
                <span className="text-capitalize bg-dark text-white py-2 px-3">
                  {t("blogPage.blogPage")}
                </span>
              </p>
            </div>
            <div className="main_header__div d-flex align-self-start justify-content-center pl-5 flex-column shadow">
              <div className="business2-overlay">
                <p className="overlay-text">{t("blogPage.toolkit")}</p>
                <h2 className="animateWord overlay-subheading">
                  <span className="ti">{t("blogPage.ultimate")} </span>
                  <div className="business2-overlay-subheading">
                    <ul className="flip">
                      <li>{t("blogPage.guide")}</li>
                      <li>{t("blogPage.resource")}</li>
                      <li>{t("blogPage.companion")}</li>
                    </ul>
                  </div>
                </h2>
              </div>
            </div>
          </header>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <div className="card p-4 shadow blog_left__div">
                  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
                    <h1>
                      <b> {t("blogPage.blogs.b")}</b>
                    </h1>
                    <p className="blog-title">
                      <span className="font-weight-bold">
                        {t("blogPage.blogs.span")}
                      </span>
                    </p>
                  </div>
                  <figure className="text-center">
                    <img
                      src={bimg}
                      className="img-fluid shadow"
                      alt="Business"
                    />
                  </figure>
                  <p>
                    <span className="font-weight-bold"></span>
                    <b> {t("blogPage.blogs.blog1.bold")} </b>
                    {t("blogPage.blogs.blog1.p")}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <button className="left_div__like" id="like_btn">
                        <i className="fa fa-thumbs-up"></i>Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <div className="card p-4 shadow blog_left__div">
                  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
                    <h1>
                      <b> {t("blogPage.blogs.b")}</b>
                    </h1>
                    <p className="blog-title">
                      <span className="font-weight-bold">
                        {t("blogPage.blogs.span")}
                      </span>
                    </p>
                  </div>
                  <figure className="text-center">
                    <img
                      src={bimg2}
                      className="img-fluid shadow"
                      alt="Business"
                    />
                  </figure>
                  <p>
                    <span className="font-weight-bold"></span>
                    <b> {t("blogPage.blogs.blog2.bold")} </b>
                    {t("blogPage.blogs.blog2.p")}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <button className="left_div__like" id="like_btn">
                        <i className="fa fa-thumbs-up"></i>Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <div className="card p-4 shadow blog_left__div">
                  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
                    <h1>
                      <b> {t("blogPage.blogs.b")}</b>
                    </h1>
                    <p className="blog-title">
                      <span className="font-weight-bold">
                        {t("blogPage.blogs.span")}
                      </span>
                    </p>
                  </div>
                  <figure className="text-center">
                    <img
                      src={bimg3}
                      className="img-fluid shadow"
                      alt="Business"
                    />
                  </figure>
                  <p>
                    <span className="font-weight-bold"></span>
                    <b> {t("blogPage.blogs.blog3.bold")} </b>
                    {t("blogPage.blogs.blog3.p")}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <button className="left_div__like" id="like_btn">
                        <i className="fa fa-thumbs-up"></i>Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <div className="card p-4 shadow blog_left__div">
                  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
                    <h1>
                      <b>{t("blogPage.blogs.b")}</b>
                    </h1>
                    <p className="blog-title">
                      <span className="font-weight-bold">
                        {t("blogPage.blogs.span")}
                      </span>
                    </p>
                  </div>
                  <figure className="text-center">
                    <img
                      src={bimg4}
                      className="img-fluid shadow"
                      alt="Business"
                    />
                  </figure>
                  <p>
                    <span className="font-weight-bold"></span>
                    <b> {t("blogPage.blogs.blog4.bold")} </b>
                    {t("blogPage.blogs.blog4.p")}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <button className="left_div__like" id="like_btn">
                        <i className="fa fa-thumbs-up"></i>Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <div className="card p-4 shadow blog_left__div">
                  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
                    <h1>
                      <b>{t("blogPage.blogs.b")}</b>
                    </h1>
                    <p className="blog-title">
                      <span className="font-weight-bold">
                        {t("blogPage.blogs.span")}
                      </span>
                    </p>
                  </div>
                  <figure className="text-center">
                    <img
                      src={bimg5}
                      className="img-fluid shadow"
                      alt="Business"
                    />
                  </figure>
                  <p>
                    <span className="font-weight-bold"></span>
                    <b> {t("blogPage.blogs.blog5.bold")} </b>
                    {t("blogPage.blogs.blog5.p")}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <button className="left_div__like" id="like_btn">
                        <i className="fa fa-thumbs-up"></i>Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <div className="card p-4 shadow blog_left__div">
                  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
                    <h1>
                      <b>{t("blogPage.blogs.b")}</b>
                    </h1>
                    <p className="blog-title">
                      <span className="font-weight-bold">
                        {t("blogPage.blogs.span")}
                      </span>
                    </p>
                  </div>
                  <figure className="text-center">
                    <img
                      src={bimg6}
                      className="img-fluid shadow"
                      alt="Business"
                    />
                  </figure>
                  <p>
                    <span className="font-weight-bold"></span>
                    <b> {t("blogPage.blogs.blog6.bold")} </b>
                    {t("blogPage.blogs.blog6.p")}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <button className="left_div__like" id="like_btn">
                        <i className="fa fa-thumbs-up"></i>Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
