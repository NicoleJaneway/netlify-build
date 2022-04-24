import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import image from "../img/products/membership/cheers_sq.jpeg";
import smiling from "../img/products/membership/smiling_sq.jpeg";
import membership from "../img/products/membership/cheers_sq.jpeg";

import DSPproducts from "../components/DSPproducts";

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
];

const product = products.find((product) => product.name === "TestProduct1");

export default function TestProduct() {
  const [level, setLevel] = useState("test-product1");
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  const handleClose = () => {
    setShowProductsPopup(false);
  };

  function handleChange(event) {
    setLevel(event.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {showProductsPopup && (
        <dialog className="products-popup box-shadow">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          <DSPproducts
            products={[
              "Certified Data Management Professional Study Plan",
              "CDMP Fundamentals Notes",
              "Data Strategy Professionals Mug",
            ]}
          />
        </dialog>
      )}

      <Helmet>
        <title>Test Products</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com" + product.link}
        />
        <meta name="og:description" content={product.description} />
        <meta name="og:image" content={image} />
        <meta name="og:image:alt" content="person writing exam questions" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
        <p className="title product-title">Test Products</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img id="product-img" src={image} alt={product.alt}></img>

            <div className="order-form" style={{ display: "block" }}>
              <form>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="options"
                    value={level}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <option value="test-product1">TestProduct1</option>
                    <option value="test-product2">TestProduct2</option>
                  </select>
                </label>{" "}
                <br />
                <Link to={`/products/${level}/checkout`}>
                  <button
                    className="btn btn-accent"
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "10px 20px",
                      margin: "4px 0",
                    }}
                  >
                    Purchase
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="gray-box" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <div className="oath">
              <p>
                Whether you opt for the <strong>Fundamentals</strong> or{" "}
                <strong>Specialist</strong> membership, you'll receive access to
                the tools you need to ace the{" "}
                <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link> and
                grow your Data Strategy career.
              </p>
              <p style={{ marginBottom: "0em" }}>Fundamentals:</p>
              <ul style={{ marginBottom: "1em" }}>
                <li>
                  <Link to="/products/cdmp-fundamentals-notes">
                    CDMP Fundamentals Notes
                  </Link>
                </li>
                <li>
                  All three{" "}
                  <Link to="/products/cdmp-exam-questions">
                    CDMP Question Sets
                  </Link>
                </li>
              </ul>
              <p style={{ marginBottom: "0em" }}>Specialist:</p>
              <ul style={{ marginBottom: "1em" }}>
                <li>
                  Your choice of two{" "}
                  <Link to="/products/specialist-exam-guides">
                    Specialist Exam Guides
                  </Link>
                </li>
                <li>
                  Corresponding{" "}
                  <Link to="/products/specialist-exam-questions">
                    Specialist Question Sets
                  </Link>
                </li>
              </ul>
              <p style={{ marginBottom: "0em" }}>Both:</p>
              <ul style={{ marginBottom: "1em" }}>
                <li>
                  <Link to="/products/specialist-exam-guides">
                    Data Strategist T-Shirt
                  </Link>
                </li>
                <li>
                  25-minute{" "}
                  <Link to="/products/career-coaching">Career Coaching</Link>{" "}
                  session
                </li>
                <li>
                  <Link to="/products/resume-review">Resume Review</Link>
                </li>
                <li>
                  Exclusive access to <strong>members only events</strong>
                </li>
                <li>
                  Recognition on <strong>membership page</strong>
                </li>
              </ul>
              We look forward to having you join the Data Strategy Professionals
              community!
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
