import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Lightbox } from "react-modal-image";
import { Helmet } from "react-helmet";

import poster from "../../img/products/poster/poster.png";
import mock from "../../img/products/poster/poster-mock3.jpeg";

import DSPproducts from "../../components/DSPproducts";

export default function Poster() {
  const [showModal, setShowModal] = useState(false);
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  const handleShowClick = (event) => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowProductsPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowProductsPopup(true);
    window.open("https://buy.stripe.com/5kA6rl0OGfgnffy7sQ", "_blank");
  };

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
              "Data Strategist T-Shirt",
              "Data Strategist Mug",
            ]}
          />
        </dialog>
      )}
      <Helmet>
        ‍<title>Foundations of Data Strategy Poster</title>‍
        <meta
          name="description"
          content="Stylish accent for your home or office and a great way to keep your Data Strategy knowledge fresh for the CDMP."
        />
        <meta
          name="twitter:card"
          content="https://www.datastrategypros.com/static/media/poster.4da4ada4.png"
        />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
        <meta
          name="twitter:title"
          content="Foundations of Data Strategy Poster"
        />
        <meta
          name="twitter:description"
          content="Stylish accent for your home or office and a great way to keep your Data Strategy knowledge fresh for the CDMP."
        />
        <meta
          name="twitter:image"
          content="https://www.datastrategypros.com/static/media/poster.4da4ada4.png"
        />
        <meta
          property="og:title"
          content="Foundations of Data Strategy Poster"
        />
        <meta
          property="og:description"
          content="Stylish accent for your home or office and a great way to keep your Data Strategy knowledge fresh for the CDMP."
        />
        <meta
          property="og:image"
          content="https://www.datastrategypros.com/static/media/poster.4da4ada4.png"
        />
        <meta name="og:image:alt" content="poster" />
        <meta property="og:site_name" content="Data Strategy Professionals" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="summary" />
      </Helmet>
      {showModal && (
        <Lightbox
          small={poster}
          large={poster}
          hideDownload
          alt="poster"
          onClose={handleShowClick}
        />
      )}
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
        <p className="title product-title">Data Strategy Poster</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <figure>
              <img
                id="product-img"
                src={mock}
                alt="data strategy professionals poster"
                onClick={handleShowClick}
                style={{ margin: "0" }}
              ></img>
              <figcaption
                style={{
                  fontSize: ".8em",
                  marginBottom: "1em",
                  textAlign: "center",
                }}
              >
                <em>click to enlarge</em>
              </figcaption>
            </figure>

            <div className="order-form" style={{ display: "block" }}>
              <button
                className="btn btn-accent"
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  margin: "4px 0",
                }}
                onClick={handleSubmit}
              >
                Purchase
              </button>
            </div>
          </div>

          <div className="gray-box t-shirt" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <p>
              This charming poster covers the focus areas of Data Governance,
              Data Quality, Data Architecture and Modeling, Master and Reference
              Data, and Data Warehousing and Business Intelligence from the{" "}
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
              The poster is a stylish accent for your home or office and a great
              way to keep your Data Strategy knowledge fresh for the{" "}
              <Link to="/resources/cdmp">CDMP</Link>!
            </p>
            <br />

            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>24 x 36 inch poster with a matte finish </li>
              <li>Printed on 175 gsm fine art paper</li>
              <li>
                12 intructional topics based on the{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="product-testimonials">
                <p><strong>Testimonials</strong></p>
                <p>"The study plan is a 90-day journey that details how, when, what, and where to prepare yourself for the exam. I personally reviewed every email, link, and reference throughout the guide and can verify it is a labor of love. The painstaking detail in the guide is apparent as is its value."  - <a href="https://jonshaulis.com/index.php/2019/11/26/hurray-i-earned-my-cdmp/#Study_plan">Jon Shaulis</a></p><br />

                <p>"This incredible email course splits the exam materials up over 90 days, making the otherwise overbearing study materials much more manageable for hard-working professionals.  The CDMP exam provides the best practices and fundamentals for data strategy and execution."  - <a href="https://nicacton.com/">Nic Acton</a></p><br />
            </div> */}

          {/* <div className="product-layout" style={{border: "#f9f9f9", background: "#FFF", marginTop: "40px", marginBottom: "20px"}}>
        <p style={{textAlign: "center", marginBottom: "8px"}}><strong>Screenshots</strong></p>
        <div className="image-display" style={{display: "block"}}>
            <a href="https://www.facebook.com/media/set/?set=oa.867388017157445&type=3" target="_blank"><img src="https://www.nicolejaneway.com/wp-content/uploads/2021/02/cdmp_screenshot-1024x576.jpg" alt="email inbox showing emails from 90-day email plan"/></a>
            <a href="https://www.facebook.com/media/set/?set=oa.867388017157445&type=3" target="_blank"><img src="https://www.nicolejaneway.com/wp-content/uploads/2021/01/Day-1.1.png" alt="day one email" /></a>
            <a href="https://www.facebook.com/media/set/?set=oa.867388017157445&type=3" target="_blank"><img src="https://www.nicolejaneway.com/wp-content/uploads/2021/01/Day-1.2.png" alt="data management email" /></a>
        </div>
    </div>

    <div className="product-layout" style={{border: "#dee8e9", background: "#dee8e9", marginTop: "40px"}}>
            <p style={{textAlign: "center", marginBottom: "8px"}}><strong>What people are saying</strong></p>
            <div style={{width: "95%", margin: "auto"}} >
                <p>"I would recommend Nicole's study guide. The price is very reasonable, and for 12 weeks she will send you emails on what to read/study for the exam." - <a href="https://www.facebook.com/groups/cdmpstudygroup/permalink/593542808473811" target="_blank">Jennifer Bruder</a></p><br />

                <p>"I signed up for the free trial week of emails, and I have to say I found them so helpful in enforcing a structured study focus. There's also a good bit of supplementary info and relevant reading and videos. I'll definitely be signing up for the study emails when I am prepping for the exam."  - <a href="https://www.facebook.com/groups/cdmpstudygroup/posts/494125058415587" target="_blank">Maeve Carey</a></p><br />
            </div>
    </div>
    <div className="product-layout" style={{border: "#f9f9f9", background: "#f9f9f9", marginTop: "40px"}}>
            <p style={{textAlign: "center", marginBottom: "8px"}}><strong>Features</strong></p>
            <div style={{width: "95%", margin: "auto"}} >
            <ul>
                <li><strong>Study schedule</strong> to finish the <em><a href="http://amzn.to/32oK8hH" target="_blank">DMBOK</a></em> in 12 weeks (plus, leverage the 80/20 principle to focus on the important information)</li>
                <li><strong>Review schedule</strong> to make sure you revisit your notes and lock content into your long term memory</li>
                <li><strong>Study guides</strong> you can print out and use during the exam</li>
                <li><strong>Vocabulary and key concepts</strong> for each of the 14 chapters tested on the exam</li>
                <li><strong>Study tips</strong> to ensure you’re maximizing your time and energy</li>
                <li><strong>Practice questions </strong>to test your memory and fix any gaps in your knowledge of Data Strategy</li>
                <li><strong>Exam preparedness checklist</strong> to make sure you’re ready for the test</li>
                <li><strong>External resources</strong> such as thought-provoking articles, case studies, and interview questions</li>
                <li><strong>Support for any questions</strong> in the <a href="https://www.facebook.com/groups/346145433213551" target="_blank">CDMP Study Group</a></li>
            </ul>    
            </div>
    </div> */}

          {/* <br />
          <br />
          <div
            className="white-box"
            style={{
              gridColumn: "1 / -2",
              padding: "0",
              width: "90%",
              margin: "auto",
              background: "none",
            }}
          >
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
          </div> */}
        </div>
      </div>
    </>
  );
}
