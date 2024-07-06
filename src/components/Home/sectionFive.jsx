import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reveal from "../reveal";

import { useTranslation } from "react-i18next";

const SectionFive = () => {
  const { i18n } = useTranslation();
  const reviews_en = [
    {
      quote: i18n.t("quote1"),
      author: "Marian D.",
      title: "Marketing Specialist",
    },
    {
      quote: i18n.t("quote2"),
      author: "Dr. Laur N.",
      title: "CEO of Unicorn IT Services",
    },
    {
      quote: i18n.t("quote3"),
      author: "Luca C.",
      title: "CEO of High Focus Agency",
    },
    {
      quote: i18n.t("quote4"),
      author: "Vincent G.",
      title: "CEO of Selfit",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="section-five">
      <div className="container">
        <div className="content">
          <Reveal direction="left">
            <div className="subtitle">
              {i18n.t("testim")}
              <span className="purple">{i18n.t("onials")}</span>
            </div>
            <div className="title"> {i18n.t("whatpartnerssay")}</div>
            <div className="underline" />
          </Reveal>
          <Reveal direction="bottom">
            <div className="carousel">
              <Slider {...settings}>
                {/* <div className="review">
                  <div className="quote">
                    <span className="purple">"</span> Marius is a very talented
                    developer and a pleasure to work with. He is very
                    professional and always delivers on time. I would highly
                    recommend him to anyone looking for a web developer.{" "}
                    <span className="purple">"</span>
                  </div>
                  <div className="stars">
                    <img src="/images/stars.png" alt="" />
                  </div>
                  <div className="quote-author">
                    <img
                      className="author-image"
                      src="/images/man.png"
                      alt=""
                    />
                    <div className="author">- John Doe</div>
                  </div>
                </div> */}
                {reviews_en.map((review, index) => (
                  <div className="review" key={index}>
                    <div className="quote">
                      <span className="purple">"</span>
                      {review.quote}
                      <span className="purple">"</span>
                    </div>
                    <div className="stars">
                      <img src="/images/stars.png" alt="" />
                    </div>
                    <div className="quote-author">
                      <img
                        className="author-image"
                        src="/images/man.png"
                        alt=""
                      />
                      <div className="author">
                        - {review.author}, {review.title}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
