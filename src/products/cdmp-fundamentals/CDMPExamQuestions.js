import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import examTaker from "../../img/products/exam-questions/exam-taker_sq.jpg";
import q1 from "../../img/products/exam-questions/Q1.png";
import cover from "../../img/products/exam-questions/cover-exam-questions_scaled.png";
import a1 from "../../img/products/exam-questions/A1.png";

import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";

const product = products.find(
  (product) => product.name === "CDMP Exam Question Sets"
);

export default function CDMPExamQuestions() {
  const [questionSet, setQuestionSet] = useState("1");
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

  function handleChange(event) {
    setQuestionSet(event.target.value);
  }

  function handleSubmit(event) {
    setShowProductsPopup(true);
    event.preventDefault();
    if (questionSet === "1") {
      window.open("https://py.pl/4vwj3", "_blank");
    } else if (questionSet === "2") {
      window.open("https://py.pl/b6V2W", "_blank");
    } else if (questionSet === "3") {
      window.open("https://py.pl/145EMe", "_blank");
    }
  }

  const handleClose = () => {
    setShowProductsPopup(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {showModal && (
        <dialog open onClick={handleShowClick}>
          <figure>
            <img src={image} alt={alt} onClick={handleShowClick} />
            <figcaption style={{ margin: "0" }}></figcaption>
          </figure>
        </dialog>
      )}
      {showProductsPopup && (
        <dialog className="products-popup box-shadow">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          <DSPproducts
            products={[
              "Certified Data Management Professional Study Plan",
              "CDMP Fundamentals Notes",
              "Data Strategist Mug",
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
        <meta name="og:image" content={examTaker} />
        <meta name="og:image:alt" content="person writing exam questions" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={examTaker} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
        <p className="title product-title">CDMP Exam Question Sets</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img
              id="product-img"
              src={examTaker}
              alt="data strategy professionals mug"
            ></img>

            <div className="order-form" style={{ display: "block" }}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="options"
                    value={questionSet}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <option value="1">Question Set #1</option>
                    <option value="2">Question Set #2</option>
                    <option value="3">Question Set #3</option>
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
            <div className="oath">
              <p>
                One of the best ways to prepare for the{" "}
                <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link> is to
                work through these Question Sets based on the{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>
                . The Question Sets are also great prep for the{" "}
                <Link to="/resources/specialist">Specialist Exams</Link>, as
                we've identified the chapter associated with each question.
              </p>

              <p>
                Each Question Set contains 50 multiple choice questions in the
                style of the CDMP Exams. In the answers section, you'll find a
                detailed explanation for each question.
              </p>
              <p>
                Immediately upon purchase, you'll receive a PDF document via
                email containing 1) questions section containing 50
                multiple-choice questions and 2) answers section with{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>{" "}
                chapter, relevant{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>{" "}
                page number, and detailed explanation of correct answer.
              </p>
            </div>
            <p>
              {" "}
              <strong>Features</strong>
            </p>
            <ul>
              <li>50 new CDMP Exam questions per Question Set</li>
              <li>
                Identified topic area facilitates study for the{" "}
                <Link to="/resources/specialist">Specialist Exams</Link>
              </li>
              <li>
                Detailed explanations for each answer to guide your continued
                review
              </li>
            </ul>
          </div>

          <div className="teal-box cdmp" id="product-testimonials">
            <p>
              <strong>How to Learn Anything</strong>
            </p>
            <div className="oath">
              <p>
                Research has showed{" "}
                <a
                  href="http://pdf.poojaagarwal.com/McDaniel_Agarwal_etal_2011_JEP.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  time
                </a>{" "}
                and{" "}
                <a
                  href="http://pdf.poojaagarwal.com/Roediger_Agarwal_etal_2011_JEPA.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  time again
                </a>{" "}
                that <strong>testing ourselves</strong> is one of the most
                effective ways to <strong>achieve mastery</strong>.
              </p>
              <p>
                So if you're really interested in becoming a{" "}
                <strong>Data Strategy expert</strong>, doing practice questions
                like these are among the best way to get there!
              </p>
              <p>
                These Question Sets use{" "}
                <a
                  href="http://uweb.cas.usf.edu/~drohrer/pdfs/Taylor&Rohrer2010ACP.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  interleaving
                </a>{" "}
                (i.e., mixed practice) to make the long-lasting effects of
                studying with these practice questions even stronger.
              </p>
              <p>
                You'll return to them throughout your test prep until you're{" "}
                <strong>totally ready</strong> to take the exam!
              </p>
            </div>
          </div>
        </div>

        <div className="white-box">
          <p
            className="box-title"
            style={{ textAlign: "center", fontSize: "1.2em" }}
          >
            <strong>Photos</strong>
          </p>
          <div
            className="image-display-tri"
            style={{ gap: "40px", justifyContent: "space-between" }}
          >
            <figure>
              <img
                src={q1}
                alt="exam questions"
                onClick={handleShowClick}
                style={{ maxHeight: "380px" }}
              />
            </figure>

            <figure>
              <img
                src={cover}
                alt="person reviewing question set"
                onClick={handleShowClick}
                style={{
                  maxHeight: "380px",
                  objectFit: "cover",
                }}
              />
            </figure>

            <figure>
              <img
                src={a1}
                alt="answers"
                onClick={handleShowClick}
                style={{ maxHeight: "380px" }}
              />
            </figure>
          </div>
        </div>

        <div className="teal-box" style={{ gridColumn: "1/-1" }}>
          <div className="center-text-box" id="more-quotes">
            <p className="box-title">
              <strong>What People are Saying</strong>
            </p>
            <p className="float-left">
              "The exam book from Amazon is REALLY bad and the sample exams from
              Udemy are moderately bad. Lots of mistakes and more than a few
              wrong answers."
            </p>{" "}
            <p style={{ textAlign: "right" }}>- Katrina Waring Castillo,</p>
            <p style={{ textAlign: "right", marginBottom: "30px" }}>
              <em>
                member of{" "}
                <a
                  href="https://www.facebook.com/groups/346145433213551/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CDMP Study Group
                </a>
              </em>{" "}
              and <strong>CDMP Practitioner</strong>
            </p>
          </div>
        </div>
        <div className="white-outline-box">
          <div className="center-text-box" id="more-quotes">
            <p className="box-title">
              <strong>Frequently Asked Questions</strong>
            </p>
            <p>
              <strong>
                PayPal is not available in my country - is there another way I
                can pay?
              </strong>
            </p>
            <p>
              <a
                href="https://buy.stripe.com/eVa2b56904BJ9Ve5kP"
                target="_blank"
                rel="noreferrer"
              >
                Question Set #1
              </a>{" "}
              on Stripe
              <br />
              <a
                href="https://buy.stripe.com/fZecPJ1SKc4bgjCfZu"
                target="_blank"
                rel="noreferrer"
              >
                Question Set #2
              </a>{" "}
              on Stripe
              <br />
              <a
                href="https://buy.stripe.com/9AQ6rl8h83xF8Ra4gN"
                target="_blank"
                rel="noreferrer"
              >
                Question Set #3
              </a>{" "}
              on Stripe
            </p>
            <br />
            <p>
              <strong>Which chapters are covered in the Question Sets?</strong>
            </p>
            <p>
              Each Question Set contains a random mix of questions from chapters
              1-14 of the{" "}
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
              <strong>
                How can I get access to all the practice questions?
              </strong>
            </p>
            <p>Each Question Set must be purchased separately.</p>
            <br />
            <p>
              <strong>
                What else can I do to prep for the{" "}
                <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link>?
              </strong>
            </p>
            <p>
              Check out the{" "}
              <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link> and{" "}
              <Link to="/products/cdmp-study-plan">
                CDMP Fundamentals Notes
              </Link>
              .
            </p>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
