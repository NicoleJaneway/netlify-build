import { useEffect } from "react";
import { Checkmark } from "react-checkmark";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import cdmp from "../img/logo_cdmp.jpeg";
import smiling from "../img/products/membership/smiling_sq.jpeg";
import membership from "../img/products/membership/cheers_sq.jpeg";
import bids from "../img/logo_bids.jpeg";

import payments from "../data/payments";
import messages from "../data/messages/postcheckoutMessages";

const products = [
  {
    name: "Fundamentals Membership",
    description:
      "At this level, you'll receive access to the tools you need to ace the CDMP Fundamentals Exam and grow your Data Strategy career.",
    img: membership,
    alt: "office workers making a cheer",
    link: "/products/membership",
    category: "cdmp-fundamentals",
  },
  {
    name: "Specialist Membership",
    description:
      "At this level, you'll receive access to the tools you need to ace the two Specialist Exams of your choosing and attain the Practitioner or Master level certification.",
    img: smiling,
    alt: "office workers making a cheer",
    link: "/products/membership",
    category: "cdmp-specialist",
  },
  {
    name: "TestProduct1",
    description:
      "At this level, you'll receive access to the tools you need to ace the CDMP Fundamentals Exam and grow your Data Strategy career.",
    img: membership,
    alt: "office workers making a cheer",
    link: "/products/membership",
    category: "cdmp-fundamentals",
  },
  {
    name: "TestProduct2",
    description:
      "At this level, you'll receive access to the tools you need to ace the two Specialist Exams of your choosing and attain the Practitioner or Master level certification.",
    img: smiling,
    alt: "office workers making a cheer",
    link: "/products/membership",
    category: "cdmp-specialist",
  },
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
    name: "Breaking into Data Science Email Bootcamp",
    description:
      "Level up with 3-4 emails over 12 weeks providing the resources, articles, videos, and tutorials that will help you advance your Data Science career.",
    img: bids,
    alt: "hands stacked in huddle over center of table",
    link: "/products/data-science-email-bootcamp",
    category: "data-science",
  },
];

export default function PostCheckout({ firstName, lastName, email }) {
  let { id } = useParams();

  const payment = payments.find((payment) => payment.name === id);
  const product = products.find((product) => product.name === payment.product);
  const message = messages.find((message) => message.type === payment.type);

  /* MEMBERSHIP */
  useEffect(() => {
    /* MAILCHIMP */
    if (payment.type === "membership" || payment.type === "download") {
      console.log("fetching");
      fetch("/.netlify/functions/mailchimp", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          product: payment.mailchimpTag,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      /* SENDINBLUE */
    } else if (payment.type === "sendinblue") {
      fetch("/.netlify/functions/sendinblue", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          product: payment.name,
        }),
      })
        .then((data) => {
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com" + product.link}
        />
        <meta name="og:description" content={product.description} />
        <meta name="og:image" content={product.image} />
        <meta name="og:image:alt" content="person writing exam questions" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>{" "}
      <br />
      <br />
      <br />
      <div>
        <a href={payment.link} target="_blank" rel="noreferrer">
          <Checkmark size="xxLarge" color="#fe7f78" />
        </a>
        <br />
        <br />
        <p style={{ textAlign: "center", fontSize: "1.4em" }}>
          Thank you for your purchase of the <strong>{product.name}</strong>!
        </p>
        <br />
        {
          <p
            style={{ textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: message.message,
            }}
          ></p>
        }
        <br />
        <br />
      </div>
      <br />
      <br />
    </>
  );
}
