import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import payments from "../data/payments";

import CheckoutForm from "../components/checkout/CheckoutForm";
import FreebieForm from "../components/checkout/FreebieForm";
import PostCheckout from "../components/PostCheckout";
import messages from "../data/messages/checkoutMessages";

import cdmp from "../img/logo_cdmp.jpeg";
import smiling from "../img/products/membership/smiling_sq.jpeg";
import membership from "../img/products/membership/cheers_sq.jpeg";
import bids from "../img/logo_bids.jpeg";

const products = [
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

const stripePromise = loadStripe(
  "pk_test_51JdOfqILIOmCZ8JfgNHgmwR6FfUPfYp7i5QlyiU6A4zlqIIXfz2ycz6n3sG6VenHV0N1a7Mr2xXP4wzhku2TwXxj00ppjgWb7A"
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [price, setPrice] = useState();
  const [showSuccess, setShowSuccess] = useState(false);

  let { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const payment = payments.find((payment) => payment.name === id);
  const product = products.find((product) => product.name === payment.product);
  const message = messages.find((message) => message.type === payment.type);

  useEffect(() => {
    fetch("/.netlify/functions/price", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payment: payment.name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.price);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (price !== undefined && price !== "0000") {
      fetch("/.netlify/functions/secret", {
        // fetch("/secret", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payment: payment.name }),
      })
        .then((response) => response.json())
        .then((data) => {
          const secret = data.client_secret;
          setClientSecret(secret);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <meta
          name="description"
          content="Data Strategy Professionals checkout page."
        />
      </Helmet>
      <div className="product-layout">
        <p className="title product-title">{product.name}</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img id="product-img" src={product.img} alt={product.alt}></img>
            <div>
              {price && (
                <p
                  className="float-right"
                  style={{
                    fontSize: "2.5em",
                    marginTop: "-.2em",
                    textAlign: "right",
                    width: "min-content",
                    marginLeft: "40px",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(price * 0.01)}
                </p>
              )}
              <p dangerouslySetInnerHTML={{ __html: payment.description }} />
            </div>
          </div>
          {clientSecret !== "" && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecret,
              }}
            >
              <div
                style={{
                  margin: "0 40px",
                }}
              >
                {showSuccess ? (
                  <PostCheckout
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    id={id}
                  />
                ) : (
                  <>
                    <p
                      style={{
                        textAlign: "left",
                        fontWeight: 900,
                        marginBottom: "16px",
                        fontSize: "1.01em",
                      }}
                    >
                      Please enter your payment details
                    </p>
                    <CheckoutForm
                      setFirstName={setFirstName}
                      setLastName={setLastName}
                      setEmail={setEmail}
                      setShowSuccess={setShowSuccess}
                    />
                    <br />
                    <br />
                    <p style={{ fontSize: "0.8em", fontStyle: "italic" }}>
                      Please be sure to enter the email where you would like to
                      receive {message.message}
                    </p>
                  </>
                )}
              </div>
            </Elements>
          )}
          {price === "0000" && (
            <div
              style={{
                margin: "0 40px",
              }}
            >
              {showSuccess ? (
                <PostCheckout
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  id={id}
                />
              ) : (
                <>
                  <p
                    style={{
                      textAlign: "left",
                      fontWeight: 900,
                      marginBottom: "16px",
                      fontSize: "1.01em",
                    }}
                  >
                    Please enter your details
                  </p>
                  <FreebieForm
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setShowSuccess={setShowSuccess}
                  />
                  <br />
                  <br />
                  <p style={{ fontSize: "0.8em", fontStyle: "italic" }}>
                    Please be sure to enter the email where you would like to
                    receive {message.message}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
