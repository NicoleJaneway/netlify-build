import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import mug11 from "../../img/products/mug/mug11.jpeg";
import mugs from "../../img/products/mug/mugs.png";
import laptop from "../../img/products/mug/mug15_with_laptop.jpeg";
import cookies from "../../img/products/mug/cookie_mugs.jpeg";

import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";

const product = products.find(
  (product) => product.name === "Data Strategist Mug"
);

export default function Mug() {
  const [value, setValue] = useState("11");
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const handleClose = () => {
    setShowProductsPopup(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setShowProductsPopup(true);

    if (value === "11") {
      window.open("https://buy.stripe.com/fZe8zt1SK7NV4AU7sA", "_blank");
    } else if (value === "15") {
      window.open("https://buy.stripe.com/8wMcPJ9lcd8f9VedR5", "_blank");
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
              "Data Strategist T-Shirt",
              "Data Strategy Poster",
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
        <meta name="og:image" content={mugs} />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={mugs} />
        <meta name="og:image:alt" content="mugs" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
        <p className="title product-title">Data Strategist Mug</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img
              id="product-img"
              src={mug11}
              alt="data strategy professionals mug"
            ></img>

            <div className="order-form" style={{ display: "block" }}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="options"
                    value={value}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <option value="11">11 oz</option>
                    <option value="15">15 oz</option>
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

          <div
            className="gray-box"
            id="product-description"
            style={{ gridColumn: "2 / -1" }}
          >
            <p>
              <strong>Description</strong>
            </p>
            <p>
              Represent your Data Strategist pride with this ceramic mug from
              Data Strategy Professionals.
            </p>
            <br />

            <p>
              At Data Strategy Professionals, we recognize that your work moves
              mountains. That's why we've chosen to represent your contributions
              with a mountain landscape.
            </p>
            <br />

            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>Select either 11 or 15 oz</li>
              <li>
                Both mugs are white ceramic with black Data Strategy
                Professionals logo
              </li>
              <li>
                Great for{" "}
                <a
                  href="https://www.linkedin.com/groups/13951141/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data Strategy Professionals meetups
                </a>
                !
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

          <br />
          <div
            className="white-box"
            style={{
              gridColumn: "1 / -1",
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
              <a
                href="https://buy.stripe.com/fZe8zt1SK7NV4AU7sA"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={mugs} alt="mug" />
                  <figcaption style={{ textAlign: "center" }}>
                    <a
                      href="https://buy.stripe.com/fZe8zt1SK7NV4AU7sA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      11 oz mugs
                    </a>
                  </figcaption>
                </figure>
              </a>
              <a
                href="https://buy.stripe.com/fZe8zt1SK7NV4AU7sA"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={cookies} alt="mug" />
                  <figcaption style={{ textAlign: "center" }}>
                    <a
                      href="https://buy.stripe.com/fZe8zt1SK7NV4AU7sA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      11 oz mugs
                    </a>
                  </figcaption>
                </figure>
              </a>

              <a
                href="https://buy.stripe.com/8wMcPJ9lcd8f9VedR5"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={laptop} alt="mug" />
                  <figcaption style={{ textAlign: "center" }}>
                    <a
                      href="https://buy.stripe.com/8wMcPJ9lcd8f9VedR5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      15 oz mug
                    </a>
                  </figcaption>
                </figure>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
