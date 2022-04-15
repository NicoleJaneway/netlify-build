import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import tshirt from "../../img/products/tshirt/light-gray.jpeg";
import darktshirt from "../../img/products/tshirt/dark-gray2.jpeg";

import detail2 from "../../img/products/tshirt/light-gray-detail.jpeg";
import darkdetail from "../../img/products/tshirt/dark-gray2-detail.jpeg";

import model1 from "../../img/products/tshirt/model_sq.png";
import model2 from "../../img/products/tshirt/model2_sq.png";

import DSPproducts from "../../components/DSPproducts";

export default function TShirt() {
  const [size, setSize] = useState("small");
  const [color, setColor] = useState("light-gray");
  const [tshirtImage, setTshirtImage] = useState(tshirt);
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  function handleColorChange(event) {
    setColor(event.target.value);
    if (event.target.value === "dark-gray") {
      setTshirtImage(darktshirt);
    } else if (event.target.value === "light-gray") {
      setTshirtImage(tshirt);
    }
  }

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  function handleSubmit(event) {
    setShowProductsPopup(true);
    event.preventDefault();
    if (color === "light-gray") {
      if (size === "small") {
        window.open("https://buy.stripe.com/fZe5nh40S8RZ1oIaEL", "_blank");
      } else if (size === "medium") {
        window.open("https://buy.stripe.com/6oE7vpgNE4BJ9Ve5kw", "_blank");
      } else if (size === "large") {
        window.open("https://buy.stripe.com/5kAdTNeFwb076J2bIV", "_blank");
      } else if (size === "x-large") {
        window.open("https://buy.stripe.com/fZe3f940S2tB1oIcN0", "_blank");
      } else if (size === "xx-large") {
        window.open("https://buy.stripe.com/fZe171gNEgkr1oI6oF", "_blank");
      }
    } else if (color === "dark-gray") {
      if (size === "small") {
        window.open("https://buy.stripe.com/14k9Dx1SK8RZ6J29AS", "_blank");
      } else if (size === "medium") {
        window.open("https://buy.stripe.com/4gw02XcxogkrffydR9", "_blank");
      } else if (size === "large") {
        window.open("https://buy.stripe.com/4gw9Dx7d4c4bffy6oI", "_blank");
      } else if (size === "x-large") {
        window.open("https://buy.stripe.com/dR6eXRfJAgkrffy9AV", "_blank");
      } else if (size === "xx-large") {
        window.open("https://buy.stripe.com/7sI02X54Wd8febu9AW", "_blank");
      }
    }
  }

  function handleTshirtClick() {
    if (color === "light-gray") {
      if (tshirtImage === tshirt) {
        setTshirtImage(detail2);
      } else if (tshirtImage === detail2) {
        setTshirtImage(tshirt);
      }
    } else if (color === "dark-gray") {
      if (tshirtImage === darktshirt) {
        setTshirtImage(darkdetail);
      } else if (tshirtImage === darkdetail) {
        setTshirtImage(darktshirt);
      }
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
      <Helmet>
        <title>Data Strategist T-shirt</title>
        <meta
          name="description"
          content="Represent your Data Strategist pride in comfort with this cotton
              t-shirt from Data Strategy Professionals. We recognize that your work moves
              mountains. That's why we've chosen to represent your contributions
              with a mountain landscape."
        />
        <meta property="og:title" content="Data Strategist T-shirt" />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content="https://www.datastrategypros.com/products/t-shirt"
        />
        <meta
          name="og:description"
          content="Represent your Data Strategist pride in comfort with this cotton
              t-shirt from Data Strategy Professionals. We recognize that your work moves
              mountains. That's why we've chosen to represent your contributions
              with a mountain landscape."
        />
        <meta name="og:image" content={tshirt} />
        <meta name="og:image:alt" content="Data Strategist T-shirt" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="Data Strategist T-shirt" />
        <meta
          name="twitter:description"
          content="Represent your Data Strategist pride in comfort with this cotton
              t-shirt from Data Strategy Professionals. We recognize that your work moves
              mountains. That's why we've chosen to represent your contributions
              with a mountain landscape."
        />
        <meta name="twitter:image" content={tshirt} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      {showProductsPopup && (
        <dialog className="products-popup box-shadow">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          <DSPproducts
            products={[
              "Certified Data Management Professional Study Plan",
              "Data Strategy Poster",
              "Data Strategist Mug",
            ]}
          />
        </dialog>
      )}
      <div className="product-layout">
        <p className="title product-title">Data Strategist T-Shirt</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img
              id="product-img"
              src={tshirtImage}
              alt="data strategy professionals t-shirt"
              onClick={handleTshirtClick}
            ></img>

            <div className="order-form" style={{ display: "block" }}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="options">
                  <strong>Options</strong> <br />
                  <select
                    name="colors"
                    value={color}
                    onChange={handleColorChange}
                    style={{ width: "100%" }}
                  >
                    <option value="light-gray">Light Gray</option>
                    <option value="dark-gray">Dark Gray</option>
                  </select>
                  <select
                    name="size"
                    size={size}
                    onChange={handleSizeChange}
                    style={{ width: "100%" }}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">X-Large</option>
                    <option value="xx-large">XX-Large</option>
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
            style={{
              gridColumn: "2 / -1",
            }}
          >
            <p>
              <strong>Description</strong>
            </p>
            <p>
              Represent your Data Strategist pride in comfort with this cotton
              t-shirt from Data Strategy Professionals.
            </p>
            <br />

            <p>
              At Data Strategy Professionals, we recognize that your work moves
              mountains. That's why we've chosen to represent your contributions
              with a mountain landscape on our classic t-shirt design.
            </p>
            <br />

            <p>
              This t-shirt is made by BELLA+CANVAS with{" "}
              <a
                href="https://www.bellacanvas.com/eco_friendly"
                target="_blank"
                rel="noreferrer"
              >
                eco-friendly practices
              </a>{" "}
              and without{" "}
              <a
                href="https://www.bellacanvas.com/usa-strong"
                target="_blank"
                rel="noreferrer"
              >
                sweatshop labor
              </a>
              . BELLA+CANVAS has made a commitment to using 7x less water than
              average clothing manufacturers and recycles pretty much every
              piece of material that can't be turned into a t-shirt.
            </p>
            <br />

            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>
                Ultra comfy t-shirt made of 100% combed and ringspun cotton
              </li>
              <li>Classic fit made with sturdy construction</li>
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
              <br />
              <p>
                <em>
                  If you would like to pay with the cryptocurrency of your
                  choosing,{" "}
                  <a
                    href="https://commerce.coinbase.com/checkout/740330fb-7ae2-432e-ab5a-af2263fd2f72"
                    target="_blank"
                    rel="noreferrer"
                  >
                    click here
                  </a>
                  .
                </em>
              </p>
            </ul>
          </div>

          {/* <div className="product-testimonials">
                <p><strong>Testimonials</strong></p>
                <p>"The study plan is a 90-day journey that details how, when, what, and where to prepare yourself for the exam. I personally reviewed every email, link, and reference throughout the guide and can verify it is a labor of love. The painstaking detail in the guide is apparent as is its size."  - <a href="https://jonshaulis.com/index.php/2019/11/26/hurray-i-earned-my-cdmp/#Study_plan">Jon Shaulis</a></p><br />

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
              <figure>
                <img src={model1} alt="shirt" />
                <figcaption style={{ textAlign: "center" }}></figcaption>
              </figure>

              <figure>
                <img src={detail2} alt="shirt" />
                <figcaption style={{ textAlign: "center" }}></figcaption>
              </figure>

              <figure>
                <img src={model2} alt="shirt" />
                <figcaption style={{ textAlign: "center" }}></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
