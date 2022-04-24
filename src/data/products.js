import cdmp from "../img/logo_cdmp.jpeg";
import bids from "../img/logo_bids.jpeg";
import tshirt from "../img/products/tshirt/light-gray.jpeg";
import mug from "../img/products/mug/mug.jpeg";
import qs from "../img/products/exam-questions/exam-taker_sq.jpg";
import notes from "../img/products/notes/ch3_sq.png";
import poster from "../img/products/poster/poster-mock3.jpeg";
import spqs from "../img/products/exam-questions/specialist-questions-sq.jpeg";
import spnotes from "../img/products/notes/specialist-sq.jpeg";
import zoom from "../img/products/services/zoom-convo-sq.jpeg";
import resume from "../img/products/services/resume-review-sq.jpeg";
import interview from "../img/products/services/interview-prep-sq.jpeg";
// import membership from "../img/products/membership/cheers_sq.jpeg";
// import smiling from "../img/products/membership/smiling_sq.jpeg";

const products = [
  // {
  //   name: "Fundamentals Membership",
  //   description:
  //     "At this level, you'll receive access to the tools you need to ace the CDMP Fundamentals Exam and grow your Data Strategy career.",
  //   img: membership,
  //   alt: "office workers making a cheer",
  //   link: "/products/membership",
  //   category: "cdmp-fundamentals",
  // },
  {
    name: "Certified Data Management Professional Study Plan",
    description:
      "Maximize your time, energy, and motivation to become a Data Strategist. Each week, you can expect 3-4 emails covering each of the 14 chapters tested on the exam.",
    img: cdmp,
    alt: "hand holding lightbulb",
    link: "/products/cdmp-study-plan",
    category: "cdmp-fundamentals",
  },
  {
    name: "CDMP Fundamentals Notes",
    description:
      "Fast-track your preparation for CDMP exams with this 30+ page notes document.",
    img: notes,
    alt: "fundamentals notes",
    link: "/products/cdmp-fundamentals-notes",
    category: "cdmp-fundamentals",
  },
  {
    name: "CDMP Exam Question Sets",
    description:
      "Test bank of questions for the Certified Data Management Professional Exams.",
    img: qs,
    alt: "exam questions",
    link: "/products/cdmp-exam-questions",
    category: "cdmp-fundamentals",
  },
  {
    name: "Breaking into Data Science Email Bootcamp",
    description:
      "Level up with 3-4 emails over 12 weeks providing the resources, articles, videos, and tutorials that will help you advance your Data Science career.",
    img: bids,
    alt: "hands stacked in huddle over center of table",
    link: "/products/data-science-email-bootcamp",
    category: "data-science",
  },
  // {
  //   name: "Specialist Membership",
  //   description:
  //     "At this level, you'll receive access to the tools you need to ace the two Specialist Exams of your choosing and attain the Practitioner or Master level certification.",
  //   img: smiling,
  //   alt: "office workers making a cheer",
  //   link: "/products/membership",
  //   category: "cdmp-specialist",
  // },
  {
    name: "Specialist Exam Guides",
    description:
      "Prepare for the CDMP Specialist Exams with these 20+ page guides.",
    img: spnotes,
    alt: "Specialist",
    link: "/products/specialist-exam-guides",
    category: "cdmp-specialist",
  },
  {
    name: "Specialist Exam Question Sets",
    description:
      "Ace the CDMP Specialist Exams by practicing with Data Strategy Professionals Question Sets.",
    img: spqs,
    alt: "Question Sets",
    link: "/products/specialist-exam-questions",
    category: "cdmp-specialist",
  },
  {
    name: "Career Coaching",
    description:
      "Reach your professional potential with insights from our Career Coach.",
    img: zoom,
    alt: "mug",
    link: "/products/career-coaching",
    category: "service",
  },
  {
    name: "Resume Review",
    description:
      "Our Career Coach will review your resume and LinkedIn to provide you with the best advice for the next step in your career journey.",
    img: resume,
    alt: "mug",
    link: "/products/resume-review",
    category: "service",
  },
  {
    name: "Interview Prep",
    description:
      "Pass your next interview with ease with the help of our Career Coach.",
    img: interview,
    alt: "mug",
    link: "/products/interview-prep",
    category: "service",
  },
  {
    name: "Data Strategy Poster",
    description:
      "This charming poster covers the focus areas of Data Governance, Data Quality, Data Architecture and Modeling, Master and Reference Data, and Data Warehousing and Business Intelligence.",
    img: poster,
    alt: "poster",
    link: "/products/poster",
    category: "physical",
  },
  {
    name: "Data Strategist T-Shirt",
    description:
      "Represent your Data Strategist pride in comfort with this cotton t-shirt from Data Strategy Professionals.",
    img: tshirt,
    alt: "t-shirt",
    link: "/products/t-shirt",
    category: "physical",
  },
  {
    name: "Data Strategist Mug",
    description:
      "Enjoy your favorite hot beverage while representing your Data Strategist pride with this ceramic mug from Data Strategy Professionals. Select 11 or 15 oz.",
    img: mug,
    alt: "mug",
    link: "/products/mug",
    category: "physical",
  },
];

export default products;
