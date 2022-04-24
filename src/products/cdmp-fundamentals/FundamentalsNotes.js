import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import cover from "../../img/products/notes/cover.png";
import ch3 from "../../img/products/notes/ch3_sq.png";
import intro from "../../img/products/notes/intro_flipped.png";
import ch3dark from "../../img/products/notes/ch3dark_zoom.png";

import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";

const product = products.find(
  (product) => product.name === "CDMP Fundamentals Notes"
);

export default function FundamentalsNotes() {
  const [productType, setProductType] = useState("digital");
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  const handleShowClick = (event) => {
    setShowModal(!showModal);
    console.log(event.currentTarget);
    setImage(event.currentTarget.src);
    setAlt(event.currentTarget.alt);
  };

  const handleClose = () => {
    setShowProductsPopup(false);
  };

  function handleChange(event) {
    setProductType(event.target.value);
  }

  function handleSubmit(event) {
    setShowProductsPopup(true);
    event.preventDefault();
    if (productType === "digital") {
      window.open("https://py.pl/RUWVD", "_blank");
    } else if (productType === "hardcopy") {
      window.open("https://buy.stripe.com/28o171690d8fd7qfZs", "_blank");
    }
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
              "CDMP Exam Question Sets",
              "Data Strategist T-Shirt",
            ]}
          />
        </dialog>
      )}
      {showModal && (
        <dialog className="click-to-enlarge" onClick={handleShowClick}>
          <figure>
            <img src={image} alt={alt} onClick={handleShowClick} />
            <figcaption style={{ margin: "0" }}></figcaption>
          </figure>
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
        <meta name="og:image" content={intro} />
        <meta name="og:image:alt" content="woman reading document on laptop" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={intro} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
        <p className="title product-title">CDMP Fundamentals Notes</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img
              id="product-img"
              src={ch3}
              alt="data strategy professionals mug"
            ></img>

            <div className="order-form" style={{ display: "block" }}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="options"
                    value={productType}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <option value="digital">Digital download</option>
                    <option value="hardcopy">Hard copy</option>
                  </select>
                </label>{" "}
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
          <div className="gray-box" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <div style={{ maxWidth: "1100px" }}>
              <p>
                Fast-track your preparation for CDMP exams with the CDMP
                Fundamentals Notes. This <strong>30+ page</strong> document
                covers the 14 chapters of the{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>{" "}
                that are tested on the CDMP exams - that includes the{" "}
                <Link to="/resources/cdmp">Fundamentals</Link> and Specialist
                exams. Because all CDMP exams are{" "}
                <strong>open book, open notes</strong>, you can use these notes
                as you take the test!
              </p>
              <br />

              <p>
                If you purchase the <strong>digital download</strong> option,
                you'll receive the PDF immediately by email.{" "}
                <em>
                  If you require a Stripe link in order to puchase,{" "}
                  <a
                    href="https://buy.stripe.com/9AQeXR0OGb07ffy3cD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    click here
                  </a>
                </em>
                .
              </p>
              <br />
              <p>
                If you purchase the <strong>hard copy</strong>, you will receive
                a printed version with a handwritten thank you note.{" "}
                <em>
                  Unfortunately, this option is only available for customers in
                  the U.S.
                </em>
              </p>
              <br />

              <p>
                <strong>Features</strong>
              </p>
              <ul>
                <li>
                  30+ page pdf containing notes on the{" "}
                  <a
                    href="https://amzn.to/32oK8hH"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>DMBOK</em>
                  </a>
                </li>
                <li>
                  Can be used during the open book, open notes CDMP Fundamentals
                  Exam an Specialist Exams
                </li>
                <li>
                  Contains instructions for testing and obtaining your badge and
                  DAMA membership after completing the exam
                </li>
              </ul>
              <br />
            </div>
          </div>
          <div className="teal-box cdmp" id="product-testimonials">
            <p>
              <a
                href="https://www.facebook.com/groups/346145433213551/"
                target="_blank"
                rel="noreferrer"
              >
                CDMP Study Group
              </a>{" "}
              members have been asking:{" "}
              <em>
                is this product is the same as the{" "}
                <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link>?
              </em>{" "}
            </p>
            <br />
            <p>
              These products are <strong>distinct</strong> in terms of their
              content, format, and purpose:
            </p>
            <br />
            <p>
              The <strong>Study Plan</strong> offers 90 days worth of emails
              providing structured guide to reading the{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>
              .
            </p>
            <br />
            <p>
              These <strong>Notes</strong>, by contrast, are a{" "}
              <strong>cheat sheet</strong> that can be used during the{" "}
              <strong>open book, open notes exam</strong>. You can print them
              out to use as a reference as you take the test.
            </p>
            <br />
            {/* <p>
              <a href="mailto:support@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
                More questions?
              </a>
            </p> */}
          </div>{" "}
          {/* <div className="product-layout" style={{border: "#f9f9f9", background: "#FFF", marginTop: "40px", marginBottom: "20px"}}>
        <p style={{textAlign: "center", marginBottom: "8px"}}><strong>Screenshots</strong></p>
        <div className="image-display" style={{display: "block"}}>
            <a href="https://www.facebook.com/media/set/?set=oa.867388017157445&type=3" target="_blank"><img src="https://www.nicolejaneway.com/wp-content/uploads/2021/02/cdmp_screenshot-1024x576.jpg" alt="email inbox showing emails from 90-day email plan"/></a>
            <a href="https://www.facebook.com/media/set/?set=oa.867388017157445&type=3" target="_blank"><img src="https://www.nicolejaneway.com/wp-content/uploads/2021/01/Day-1.1.png" alt="day one email" /></a>
            <a href="https://www.facebook.com/media/set/?set=oa.867388017157445&type=3" target="_blank"><img src="https://www.nicolejaneway.com/wp-content/uploads/2021/01/Day-1.2.png" alt="data management email" /></a>
        </div>
    </div>

          {/* <div
            className="product-layout"
            style={{
              border: "#f9f9f9",
              background: "#f9f9f9",
              marginTop: "40px",
            }}
          >
            <p style={{ textAlign: "center", marginBottom: "8px" }}>
              <strong>Features</strong>
            </p>
            <div style={{ width: "95%", margin: "auto" }}>
              <ul>
                <li>
                  <strong>Study schedule</strong> to finish the{" "}
                  <em>
                    <a href="http://amzn.to/32oK8hH" target="_blank">
                      DMBOK
                    </a>
                  </em>{" "}
                  in 12 weeks (plus, leverage the 80/20 principle to focus on
                  the important information)
                </li>
                <li>
                  <strong>Review schedule</strong> to make sure you revisit your
                  notes and lock content into your long term memory
                </li>
                <li>
                  <strong>Study guides</strong> you can print out and use during
                  the exam
                </li>
                <li>
                  <strong>Vocabulary and key concepts</strong> for each of the
                  14 chapters tested on the exam
                </li>
                <li>
                  <strong>Study tips</strong> to ensure you’re maximizing your
                  time and energy
                </li>
                <li>
                  <strong>Practice questions </strong>to test your memory and
                  fix any gaps in your knowledge of Data Strategy
                </li>
                <li>
                  <strong>Exam preparedness checklist</strong> to make sure
                  you’re ready for the test
                </li>
                <li>
                  <strong>External resources</strong> such as thought-provoking
                  articles, case studies, and interview questions
                </li>
                <li>
                  <strong>Support for any questions</strong> in the{" "}
                  <a
                    href="https://www.facebook.com/groups/346145433213551"
                    target="_blank"
                  >
                    CDMP Study Group
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="white-box" style={{ gridColumn: "1 / -1" }}>
            <p className="box-title" style={{ textAlign: "center" }}>
              <strong>Photos</strong>
            </p>
            <div
              className="image-display-tri"
              style={{ gap: "40px", justifyContent: "space-between" }}
            >
              <figure>
                <img
                  src={cover}
                  alt="man reviewing notes"
                  onClick={handleShowClick}
                />
              </figure>

              <figure>
                <img
                  src={ch3dark}
                  alt="Data Governance notes"
                  onClick={handleShowClick}
                />
              </figure>

              <figure>
                <img
                  src={intro}
                  alt="woman reviewing notes"
                  onClick={handleShowClick}
                />
              </figure>
            </div>
          </div>
          <div className="teal-box" style={{ gridColumn: "1 / -1" }}>
            <p className="box-title" style={{ marginBottom: "1.25em" }}>
              <strong>What People are Saying</strong>
            </p>
            <div style={{ width: "95%", margin: "auto" }}>
              <p>
                "The study guide covers each chapter of the{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>
                . It starts each section with a brief summary of that chapter
                followed by notes of key points that are on the exam. You can
                also refer to the <em>DMBOK</em> for greater detail. The overall
                content is very easy to read, well structured, and approachable.
                The exam is open book, thus making this concise guide essential.
                I would highly recommend this guide as a compliment to your
                study material."
              </p>
              <p style={{ textAlign: "right", marginBottom: "1.5em" }}>
                {" "}
                - <strong>Tony Virella, Jr.</strong>
                ,<br />
                <em>
                  Senior Data Analyst and{" "}
                  <a
                    href="https://www.facebook.com/groups/346145433213551/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDMP Study Group
                  </a>{" "}
                  member
                </em>
              </p>

              <p>
                "Data Strategy Pro's CDMP Fundamentals Notes are well organized
                and clearly call-out the key concepts in each chapter. They will
                be my first go-to for quick reference for the CDMP open-book
                exam!"
              </p>
              <p style={{ textAlign: "right", marginBottom: "1.5em" }}>
                {" "}
                - <strong>Andrea Wehrung</strong>
                ,<br />
                <em>
                  Data Governance Leader and{" "}
                  <a
                    href="https://www.facebook.com/groups/346145433213551/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDMP Study Group
                  </a>{" "}
                  member
                </em>
              </p>

              <p>
                "I intend to use the notes as an integral part of my plan to
                pass the CDMP Fundamentals Exam. On my first practice exam, I
                was already able to pass. I am quite confident that I'll achieve
                even higher scores before I finally take the official exam using
                these notes."
              </p>
              <p style={{ textAlign: "right", marginBottom: "1.5em" }}>
                {" "}
                - <strong>Jericho Guzman</strong>
                ,<br />
                <em>
                  Graduate student and{" "}
                  <a
                    href="https://www.facebook.com/groups/346145433213551/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDMP Study Group
                  </a>{" "}
                  member
                </em>
              </p>
              <br />
              <p>
                "This morning I took the{" "}
                <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link> and I’m
                happy to say that I passed with a score of 83. Throughout my
                study process, I utilized the{" "}
                <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link> and
                it worked great. I also purchased the{" "}
                <strong>CDMP Fundamentals Notes</strong> and those were very
                helpful too. So a big thank you to Data Strategy professionals
                for providing a great study system that really worked for me."
              </p>
              <p style={{ textAlign: "right" }}>
                {" "}
                -{" "}
                <a
                  href="https://www.facebook.com/groups/cdmpstudygroup/permalink/728539021640855"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mike Smith
                </a>
                ,<br />
                <em>
                  Database Analyst and{" "}
                  <a
                    href="https://www.facebook.com/groups/346145433213551/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDMP Study Group
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
