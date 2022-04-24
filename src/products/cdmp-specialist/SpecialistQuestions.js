import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import spnotes from "../../img/products/exam-questions/specialist-questions-sq.jpeg";
import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";

const product = products.find(
  (product) => product.name === "Specialist Exam Question Sets"
);

export default function SpecialistQuestions() {
  const [exam, setExam] = useState("DG");
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  function handleSubmit(event) {
    setShowProductsPopup(true);
    event.preventDefault();

    if (exam === "DG") {
      window.open("https://py.pl/8ZP7W", "_blank");
    } else if (exam === "DQ") {
      window.open("https://py.pl/1mEkbJ", "_blank");
    } else if (exam === "M") {
      window.open("https://py.pl/1QHKk6", "_blank");
    } else if (exam === "DI&I") {
      window.open("https://py.pl/VILyf", "_blank");
    } else if (exam === "DM&D") {
      window.open("https://py.pl/3ZKA2sHM92k", "_blank");
    } else if (exam === "M&RDM") {
      window.open("https://py.pl/25YmMe", "_blank");
    } else if (exam === "DW&BI") {
      window.open("https://py.pl/ni7yN", "_blank");
    }
  }

  const handleClose = () => {
    setShowProductsPopup(false);
  };

  function handleChange(event) {
    setExam(event.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(product);
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
              "Data Strategy Poster",
              "Specialist Exam Guides",
            ]}
          />
        </dialog>
      )}
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
        <meta name="og:image" content={spnotes} />
        <meta name="og:image:alt" content="questions" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={spnotes} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div
        className="product-layout"
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          border: "none",
          background: "none",
          boxShadow: "none",
        }}
      >
        <p className="title product-title">{product.name}</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img id="product-img" src={spnotes} alt="Specialist"></img>

            <div className="order-form" style={{ display: "block" }}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="exam"
                    value={exam}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <option value="DG">Data Governance</option>
                    <option value="DQ">Data Quality</option>
                    <option value="DM&D">Data Modelling & Design</option>
                    <option value="M">Metadata</option>
                    <option value="M&RDM">
                      Master & Reference Data Management
                    </option>
                    <option value="DI&I">
                      Data Integration & Interoperability
                    </option>
                    <option value="DW&BI">
                      Data Warehousing & Business Intelligence
                    </option>
                  </select>
                </label>
                <br />
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
              </form>
            </div>
          </div>

          <div className="gray-box t-shirt" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <p>
              Prepare for the{" "}
              <Link to="/resources/specialist">CDMP Specialist Exams</Link> with
              these practice questions drawn from the{" "}
              <Link to="/products/cdmp-exam-questions">CDMP Question Sets</Link>
              .
            </p>
            <br />

            <p>
              Immediately upon purchase, you'll receive a PDF document via email
              containing 1) questions section containing multiple-choice
              questions and 2) answers section with relevant{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>{" "}
              page number and detailed explanation of correct answer.
            </p>
            <br />
            <p>
              CDMP Specialist Exams offer data practitioners the opportunity to
              advance their credentials and knowledge of specific Data Strategy
              topics. Successful completion of two Specialist Exams is required
              in order to attain recognition at the Practitioner or Master
              level.
            </p>
            <br />
            <p>
              <em>
                Check back soon for more products! Or reach out to{" "}
                <a href="mailto:support@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
                  support@datastrategypros.com
                </a>{" "}
                to inquire about how we can help you meet your certification
                goals.
              </em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
