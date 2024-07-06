import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reveal from "../reveal";

const reviews_en = [
  {
    quote:
      "Any request or issue I had was resolved quickly and professionally. He moves fast and is very reliable. Cool guy to work with, highly recommended.",
    author: "Marian D.",
    title: "Marketing Specialist",
  },
  {
    quote:
      "Marius is a very talented developer and a pleasure to work with. He is extremely flexible, having worked on a variety of projects for us. He is very professional and always delivers on time.",
    author: "Dr. Laur N.",
    title: "CEO of Unicorn IT Services",
  },
  {
    quote:
      "Pleasure to work with. Extremely broad skill set and very reliable.",
    author: "Luca C.",
    title: "CEO of High Focus Agency",
  },
  {
    quote:
      "Professionalism, integrity and pasion. Marius is a great developer and a great person to work with. His work is always top-notch and he is always willing to go the extra mile to make sure the project is a success.",
    author: "Vincent G.",
    title: "CEO of Selfit",
  },
];
const SectionFive = () => {
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
              Testim<span className="purple">onials</span>
            </div>
            <div className="title"> What partners say</div>
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
