import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import day1 from "../../img/products/cdmp-study-plan/emails/day1.jpeg";
import day2 from "../../img/products/cdmp-study-plan/emails/day2.jpeg";
import day7 from "../../img/products/cdmp-study-plan/emails/day7.jpeg";

import products from "../../data/products";

const product = products.find(
  (product) =>
    product.name === "Certified Data Management Professional Study Plan"
);

export default function CDMPStudyPlanTest() {
  const [value, setValue] = useState("cdmp-study-plan-90-days");
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  const handleShowClick = (event) => {
    setShowModal(!showModal);
    console.log(event.currentTarget);
    setImage(event.currentTarget.src);
    setAlt(event.currentTarget.alt);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="og:image:alt" content="hand holding lightbulb" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
        <p className="title product-title">
          Certified Data Management Professional Study Plan
        </p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img
              id="product-img"
              src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
              alt="hand holding lightbulb"
            ></img>

            <div className="order-form">
              <form>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="options"
                    value={value}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <option value="cdmp-study-plan-90-days">
                      90-Day Study Plan
                    </option>
                    <option value="cdmp-study-plan-immediate-access">
                      Immediate Access
                    </option>
                  </select>
                </label>{" "}
                <br />
                <Link to={`/products/${value}/checkout`}>
                  <button
                    className="btn btn-accent"
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "10px 20px",
                      margin: "4px 0",
                    }}
                  >
                    Sign up
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="gray-box" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <p style={{ marginBottom: "8px" }}>
              Maximize your <strong>time, energy, and motivation</strong> to
              become a Data Strategist. Each week, you can expect{" "}
              <strong>3-4 emails</strong> covering each of the 14 chapters from
              the{" "}
              <a href="http://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
                <em>Data Management Body of Knowledge</em>
              </a>{" "}
              tested on the exam. This scientifically-backed approach leverages
              the <strong>80/20 principle</strong> to help you retain key
              information.
            </p>

            <p style={{ marginBottom: "8px" }}>
              On a different timeline to achieve Data Strategy mastery? No
              problem! Select <strong>Immediate Access</strong> to receive all
              60+ emails of the CDMP Study Plan at one time.
            </p>

            <p style={{ marginBottom: "8px" }}>
              Because becoming a Data Strategist is about more than a test
              score, the CDMP Study Plan provides{" "}
              <strong>real world examples</strong>,{" "}
              <strong>case studies</strong>, and{" "}
              <strong>job prep resources</strong> that will help you advance
              your career.
            </p>
            <br />

            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>Vocabulary and key concepts for each chapter</li>
              <li>Practice questions and exam preparedness checklist</li>
              <li>
                External resources such as thought-provoking articles and videos
                to advance your knowledge beyond the{" "}
                <a
                  href="http://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>
              </li>
              <li>
                Career advancement materials including case studies and
                interview questions
              </li>
            </ul>
            <br />
            <p>
              <em>
                If you require a Stripe link in order to purchase this product,{" "}
                <a
                  href="https://buy.stripe.com/cN2eXR690c4b3wQaEF"
                  target="_blank"
                  rel="noreferrer"
                >
                  click here
                </a>
                . If you would like to pay with the cryptocurrency of your
                choosing,{" "}
                <a
                  href="https://commerce.coinbase.com/checkout/3344a467-2fcd-4239-8d81-5c7a7d0c29b6"
                  target="_blank"
                  rel="noreferrer"
                >
                  click here
                </a>
                .
              </em>
            </p>
          </div>

          <div className="teal-box cdmp" id="product-testimonials">
            <p>
              <strong>Testimonials</strong>
            </p>
            <p className="float-left">
              "The study plan is a 90-day journey that details how, when, what,
              and where to prepare yourself for the exam. I personally reviewed
              every email, link, and reference throughout the guide and can
              verify it is a labor of love. The painstaking detail in the guide
              is apparent as is its value."
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              -{" "}
              <a href="https://jonshaulis.com/index.php/2019/11/26/hurray-i-earned-my-cdmp/#Study_plan">
                Jon Shaulis
              </a>
              ,<br />
              <em>Enterprise Data Architect</em>
            </p>
            <br />

            <p>
              "This incredible email course splits the exam materials up over 90
              days, making the otherwise overbearing study materials much more
              manageable for hard-working professionals. The CDMP exam provides
              the best practices and fundamentals for data strategy and
              execution."
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              - <a href="https://nicacton.com/">Nic Acton</a>,<br />
              <em>Data Labeling Solutions Architect</em>
            </p>
          </div>
        </div>

        <div className="white-box">
          <p className="box-title" style={{ textAlign: "center" }}>
            <strong>Screenshots</strong>
          </p>
          <div className="image-display-tri">
            <img
              src={day1}
              alt="email inbox showing emails from 90-day email plan"
              onClick={handleShowClick}
            />

            <img
              src={day2}
              alt="day one email"
              onClick={handleShowClick}
              style={{ objectFit: "scale-down", objectPosition: "0 0" }}
            />

            <img
              src={day7}
              alt="data management email"
              onClick={handleShowClick}
            />
          </div>
        </div>

        <div className="teal-box">
          <div className="center-text-box" id="more-quotes">
            <p className="box-title">
              <strong>What People are Saying</strong>
            </p>
            <p>
              "This morning I took the{" "}
              <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link> and I’m
              happy to say that I passed with a score of 83. Throughout my study
              process, I utilized the <strong>CDMP Study Plan</strong> and it
              worked great. I also purchased the{" "}
              <Link to="/products/cdmp-fundamentals-notes">
                CDMP Fundamentals Notes
              </Link>{" "}
              and those were very helpful too. So a big thank you to Data
              Strategy Professionals for providing a great study system that
              really worked for me."
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
              <em>Database Analyst</em>
            </p>
            <br />
            <p>
              "I signed up for 90 Day Study Plan in September - it was great and
              kept me on track with the schedule. I didn’t realize I read around
              600 pages! Then I passed with flying colors in December."
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/"
                target="_blank"
                rel="noreferrer"
              >
                Shalini Kanagala
              </a>
              ,<br />
              <em>Data Quality Professional</em>
            </p>
            <br />
            <p>
              "I signed up for the free trial week of emails, and I have to say
              I found them so helpful in enforcing a structured study focus.
              There's also a good bit of supplementary info and relevant reading
              and videos. I'll definitely be signing up for the study emails
              when I am prepping for the exam."
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/posts/494125058415587"
                target="_blank"
                rel="noreferrer"
              >
                Maeve Carey
              </a>
              ,<br />
              <em>Senior Product Manager & Certified Privacy Professional</em>
            </p>
            <br />
            <p>
              "I recommend the Data Strategy Profesionals{" "}
              <strong>CDMP Study Plan</strong>. The price is very reasonable,
              and for 12 weeks she will send you emails on what to read/study
              for the exam."
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/permalink/593542808473811"
                target="_blank"
                rel="noreferrer"
              >
                Jennifer Bruder
              </a>
              ,<br />
              <em>Data & Analytics Application Manager</em>
            </p>
            <br />
            <p>
              "I find the emails valuable and not too long. Plus, I appreciate
              the neuroscience-based study tips."
            </p>
            <p style={{ textAlign: "right" }}>
              {" "}
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/"
                target="_blank"
                rel="noreferrer"
              >
                Francois Biller
              </a>
              ,<br />
              <em>Business Data Scientist in Artificial Intelligence</em>
            </p>{" "}
            <br />
          </div>
        </div>
        <div className="white-outline-box">
          <p className="box-title">
            <strong>Features</strong>
          </p>
          <div className="center-text-box two-col" id="features">
            <ul>
              <li>
                <strong>Study schedule</strong> to finish the{" "}
                <em>
                  <a
                    href="http://amzn.to/32oK8hH"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DMBOK
                  </a>
                </em>{" "}
                in 12 weeks
              </li>
              <li>
                Leverage the <strong>80/20 principle</strong> to focus on the
                important content
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
                <strong>Vocabulary and key concepts</strong> for each of the 14
                chapters tested on the exam
              </li>
              <li>
                <strong>Study tips</strong> to ensure you’re maximizing your
                time and energy
              </li>
              <li>
                <strong>Practice questions </strong>to test your memory and fix
                any gaps in your knowledge of Data Strategy
              </li>
              <li>
                <strong>Exam preparedness checklist</strong> to make sure you’re
                ready for the test
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
                  rel="noreferrer"
                >
                  CDMP Study Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gray-box">
          <div className="center-text-box" id="more-quotes">
            <p className="box-title">
              <strong>Frequently Asked Questions</strong>
            </p>
            <p>
              <strong>
                I purchased the Study Plan but I don't see the emails - what
                should I do?
              </strong>
            </p>
            <p>
              The CDMP Study Plan will be sent to the email address you use to
              pay via PayPal. If you would like your emails sent to a different
              email, that's no problem - please contact our{" "}
              <a href="mailto:support@datastrategypros.com?subject=CDMP%20Study%20Plan%20email%20change%20request">
                Customer Support team
              </a>
              .
            </p>
            <br />
            <p>
              <strong>
                Is this product the same as the{" "}
                <Link to="/products/cdmp-fundamentals-notes">
                  CDMP Fundamentals Notes?
                </Link>
              </strong>
            </p>
            <p>
              No, these products are distinct in terms of their content, format,
              and purpose. The Study Plan offers 90 days worth of emails
              providing structured guide to reading the{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>
              . The <Link to="/products/cdmp-fundamentals-notes">Notes</Link>,
              by contrast, are a cheat sheet that can be used during the open
              book, open notes exam. You can print them out to use as a
              reference as you take the test.
            </p>
            <br />
            <p>
              <strong>Which chapters are covered in the Study Plan?</strong>
            </p>
            <p>
              The CDMP Study Plan covers chapters 1-14 of the{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>
              . While all the chapters make for good reading material to deepen
              your understanding of Data Strategy, only chapters 1-14 are tested
              on the <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link>.
            </p>
            <br />
            <p>
              <strong>
                Can I access the e-book version of the{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>{" "}
                and my notes during the exam?
              </strong>
            </p>
            <p>
              Yes, but it must be on a separate device, which should be
              disconnected from the internet. For more test taking tips, check
              out the{" "}
              <Link to="/products/cdmp-fundamentals-notes">
                CDMP Fundamentals Notes
              </Link>
              .
            </p>
            <br />
            <p>
              <strong>
                What score should I be aiming to get on the CDMP Fundamentals
                Exam?
              </strong>
            </p>
            <p>
              If you're content with the{" "}
              <Link to="/resources/cdmp">Associate certification</Link>, you'll
              need to score at least a 60%. If you would like to continue to the{" "}
              <Link to="/resources/specialist">Practitioner</Link> or{" "}
              <Link to="/resources/specialist">Master</Link> certifications, you
              must pass with at least a 70% or 80% respectively, and then pass
              two <Link to="/resources/specialist">Specialist Exams</Link> at
              those same levels.
            </p>
            <br />
            <p>
              <strong>What else can I do to prepare for the CDMP Exam?</strong>
            </p>
            <p>
              We also offer{" "}
              <Link to="/products/cdmp-exam-questions">
                CDMP Exam Questions
              </Link>{" "}
              to test your knowledge of the{" "}
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
                I have another question about the exam that is not listed here.
              </strong>
            </p>
            <p>
              We suggest you check out the official{" "}
              <a
                href="https://cdmp.info/faqs/"
                target="_blank"
                rel="noreferrer"
              >
                CDMP FAQs
              </a>{" "}
              or{" "}
              <a
                href=" https://cdmp.info/general-help/"
                target="_blank"
                rel="noreferrer"
              >
                reach out to DAMA
              </a>{" "}
              for any questions not listed here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
