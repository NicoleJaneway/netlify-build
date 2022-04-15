import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import spnotes from "../../img/products/notes/specialist-sq.jpeg";
import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";

const product = products.find(
  (product) => product.name === "Specialist Exam Guides"
);

export default function SpecialistGuides() {
  const [exam, setExam] = useState("DG");
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  function handleSubmit(event) {
    setShowProductsPopup(true);
    event.preventDefault();

    if (exam === "DG") {
      window.open("https://py.pl/23r3qc", "_blank");
    } else if (exam === "DQ") {
      window.open("https://py.pl/1Hmips", "_blank");
    } else if (exam === "DM&D") {
      window.open("https://py.pl/9IjeYj9mJ54", "_blank");
    } else if (exam === "M") {
      window.open("https://py.pl/1F5xam", "_blank");
    } else if (exam === "M&RDM") {
      window.open("https://buy.stripe.com/8wMdTN0OG5FN2sM3cM", "_blank");
    } else if (exam === "DI&I") {
      window.open("https://py.pl/Wa10D", "_blank");
    } else if (exam === "DW&BI") {
      window.open("https://buy.stripe.com/9AQ02Xapgb071oI9Bc", "_blank");
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
              "Specialist Exam Question Sets",
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
        <meta name="og:image:alt" content="business person" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={spnotes} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
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
          <div
            className="gray-box"
            id="product-description"
            style={{ gridColumn: "2/-1" }}
          >
            <p>
              <strong>Description</strong>
            </p>
            <p>
              Prepare for the{" "}
              <Link to="/resources/specialist">CDMP Specialist Exams</Link> with
              these 15+ page guides.
            </p>
            <br />

            <p>Each guide contains:</p>
            <ul>
              <li>Introduction to the CDMP Specialist Exams</li>
              <li>Topic Summary</li>
              <li>Practice Questions & Answers</li>
              <li>Further Reading</li>
              <li>Real World Examples</li>
              <li>Tips from CDMP Study Group</li>
              <li>Next Steps</li>
            </ul>
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
                Reach out to{" "}
                <a href="mailto:support@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
                  support@datastrategypros.com
                </a>{" "}
                to inquire about how we can help you meet your certification
                goals.
              </em>
            </p>
          </div>
          <div className="teal-box" style={{ gridColumn: "1 / -1" }}>
            <p className="box-title" style={{ marginBottom: "1.25em" }}>
              <strong>What People are Saying</strong>
            </p>
            <div style={{ width: "95%", margin: "auto" }}>
              <p>
                "I really like your Specialist Guides, good quality. I
                recommended your website to a bunch of my friends at Citi Bank.
                They too are delighted."
              </p>
              <p style={{ textAlign: "right", marginBottom: "1.5em" }}>
                {" "}
                - <strong>Md Nasim Akhtar</strong>
                ,<br />
                <em>
                  Data Governance Manager and{" "}
                  <a
                    href="https://www.linkedin.com/groups/13951141/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Data Strategy Professionals LinkedIn group
                  </a>{" "}
                  member
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
