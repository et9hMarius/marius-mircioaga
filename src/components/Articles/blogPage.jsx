import React from "react";
import { Helmet } from "react-helmet";
import Reveal from "../reveal";

/*
full-stack-web-development-services
custom-web-development-solutions
affordable-web-development-packages
innovative-digital-solutions
mobile-app-development-specialists
seo-friendly-website-development
high-quality-web-development-services
*/

const articleList = [
  {
    title: "Full Stack Web Development Services",
    description:
      "Choosing the right web development company is crucial for your business. How do you know which one is the best fit for you?",
    date: "2024-01-01",
    link: "/articles/full-stack-web-development-services",
  },
  {
    title: "Custom Web Development Solutions",
    description:
      "Custom web development solutions are the best way to ensure your website is unique and tailored to your business needs.",
    date: "2024-01-13",
    link: "/articles/custom-web-development-solutions",
  },
  {
    title: "Affordable Web Development Packages",
    description:
      "Affordable web development packages are a great way to get a high-quality website without breaking the bank.",
    date: "2024-01-19",
    link: "/articles/affordable-web-development-packages",
  },
  {
    title: "Innovative Digital Solutions",
    description:
      "Innovative digital solutions can help your business stand out from the competition and attract more customers.",
    date: "2024-01-23",
    link: "/articles/innovative-digital-solutions",
  },
  {
    title: "Mobile App Development Specialists",
    description:
      "Mobile app development specialists can help you create a custom app that meets your business needs and goals.",
    date: "2024-01-29",
    link: "/articles/mobile-app-development-specialists",
  },
  {
    title: "SEO-Friendly Website Development",
    description:
      "SEO-friendly website development is essential for getting your website to rank well in search engines and attract more visitors.",
    date: "2024-02-03",
    link: "/articles/seo-friendly-website-development",
  },
  {
    title: "High-Quality Web Development Services",
    description:
      "High-quality web development services are essential for creating a professional and functional website that meets your business needs.",
    date: "2024-02-11",
    link: "/articles/high-quality-web-development-services",
  },
];

const BlogPage = () => {
  return (
    <main className="blog-page">
      <Helmet>
        <title>MARIUS MIRCIOAGA: Blog</title>
        <meta
          name="description"
          content="Read the latest articles on web development, digital marketing, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="web development, digital marketing, articles"
        />
      </Helmet>

      <h1>
        Latests <span>Articles</span>
      </h1>

      {articleList.map((article, index) => {
        return (
          <Reveal key={index} direction={index % 2 === 0 ? "left" : "right"}>
            <article className="item-article" key={index}>
              <a href={article.link}>
                <h2>{article.title}</h2>
              </a>
              <a href={article.link}>
                <p>{article.description}</p>
              </a>
              <p className="date">
                Published on:{" "}
                <time dateTime={article.date}>{article.date}</time>
              </p>
            </article>
          </Reveal>
        );
      })}
    </main>
  );
};

export default BlogPage;
