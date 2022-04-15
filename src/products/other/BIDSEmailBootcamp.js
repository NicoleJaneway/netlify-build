import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet";

import day0 from "../../img/products/breaking/emails/day0.jpeg";
import day1 from "../../img/products/breaking/emails/day1.jpeg";
import day8 from "../../img/products/breaking/emails/day8.jpeg";
import day15 from "../../img/products/breaking/emails/day15.jpeg";
import day22 from "../../img/products/breaking/emails/day22.jpeg";

import DSPproducts from "../../components/DSPproducts";

import { responsive } from "../../utils/utils.js";

export default function BIDSEmailBootcamp() {
  const [value, setValue] = useState("12-week plan");
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
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    setShowProductsPopup(true);
    event.preventDefault();
    if (value === "12-week plan") {
      window.open("https://buy.stripe.com/aEU2b56906JRffy5kY", "_blank");
    } else if (value === "immediate access") {
      window.open("https://buy.stripe.com/6oEcPJ2WOc4b5EY14J", "_blank");
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
      {showProductsPopup && (
        <dialog className="products-popup box-shadow">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          <DSPproducts
            products={[
              "Certified Data Management Professional Study Plan",
              "CDMP Fundamentals Notes",
              "Data Strategy Professionals T-Shirt",
            ]}
          />
        </dialog>
      )}
      {showModal && (
        <dialog open onClick={handleShowClick}>
          <figure>
            <img src={image} alt={alt} onClick={handleShowClick} />
          </figure>
        </dialog>
      )}
      <Helmet>
        <title>Breaking into Data Science Email Bootcamp</title>
        <meta
          name="description"
          content="Email Bootcamp delivers the opportunity to learn Data Science through three to four emails each week on a different foundational topic. You'll gain access to an exclusive Facebook group to interact with other data professionals and get any of your questions related to the course content answered by an expert."
        />
        <meta
          property="og:title"
          content="Breaking into Data Science Email Bootcamp"
        />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content="https://www.datastrategypros.com/products/data-science-email-bootcamp"
        />
        <meta
          name="og:description"
          content="Email Bootcamp delivers the opportunity to learn Data Science through three to four emails each week on a different foundational topic. You'll gain access to an exclusive Facebook group to interact with other data professionals and get any of your questions related to the course content answered by an expert."
        />
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/breaking_into_ds_square.jpg"
        />
        <meta name="og:image:alt" content="hands in celebration over table" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta
          name="twitter:title"
          content="Breaking into Data Science Email Bootcamp"
        />
        <meta
          name="twitter:description"
          content="Email Bootcamp delivers the opportunity to learn Data Science through three to four emails each week on a different foundational topic. You'll gain access to an exclusive Facebook group to interact with other data professionals and get any of your questions related to the course content answered by an expert."
        />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/breaking_into_ds_square.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="product-layout">
        <p className="title product-title">
          Breaking into Data Science Email Bootcamp
        </p>
        <div className="product-info sevenths">
          <div id="product-left-side">
            <img
              id="product-img"
              src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/breaking_into_ds_square.jpg"
              alt="hands stacked in celebration over table"
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
                    <option value="12-week plan">12-Week Email Bootcamp</option>
                    <option value="immediate access">Immediate Access</option>
                  </select>
                </label>{" "}
                <br />
                <button
                  className="btn btn-accent"
                  style={{
                    width: "100%",
                    padding: "10px 20px",
                    margin: "4px 0",
                  }}
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>

          <div className="gray-box" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <p>
              Email Bootcamp delivers the opportunity to learn Data Science
              through <strong>three to four emails each week</strong> on a
              different foundational topic. You'll gain access to an{" "}
              <strong>exclusive Facebook group</strong> to interact with other
              data professionals and get any of your questions related to the
              course content answered by an expert.
            </p>
            <br />

            <p>
              On a different timeline to achieve Data Science mastery? No
              problem! Select <strong>Immediate Access</strong> to receive all
              60+ emails of the Data Science Email Bootcamp at one time.
            </p>
            <br />

            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>
                Key skills in <strong>statistics</strong>, <strong>SQL</strong>,
                and <strong>data mangement</strong>
              </li>
              <li>
                Fundamentals for <strong>Python</strong>, including a deep dive
                on <strong>pandas</strong> and <strong>sklearn</strong>
              </li>
              <li>
                Overview of <strong>Machine Learning</strong> and{" "}
                <strong>Deep Learning</strong>
              </li>
              <li>
                Practical advice on how to stand out as a leader in{" "}
                <strong>Data Ethics</strong> and <strong>Data Strategy</strong>
              </li>
              <li>
                <strong>Sample projects</strong> and{" "}
                <strong>job hunt tips</strong> to advance your Data Science
                career
              </li>
            </ul>
            <br />
            <p>
              <em>
                If you would like to pay with the cryptocurrency of your
                choosing,{" "}
                <a
                  href="https://commerce.coinbase.com/checkout/d0daad98-066b-42eb-839d-5b3e2b3eae20"
                  target="_blank"
                  rel="noreferrer"
                >
                  click here
                </a>
                .
              </em>
            </p>
          </div>

          <div className="teal-box" id="product-testimonials">
            <p>
              <strong>What People are Saying</strong>
            </p>
            <p>
              "We're working and learning from home on a daily basis right now,
              which can be overwhelming for some, but having a daily reminder,
              which is an interesting read and helpful cheat sheet, can be truly
              rewarding.
            </p>
            <br />

            <p>
              With the Bootcamp, you don't need to go onto any course or go
              hunting for information because it is all there, embedded in the
              emails that are sent out at a similar time. So when you get a
              ping, you'll know it's the email of the day. You can check it and
              read up on something new.
            </p>
            <br />

            <p className="float-left">
              I look forward to the emails and the content. Even if your
              schedule is hectic, the Bootcamp is an easy way to build Data
              Science knowledge over time."
            </p>
            <br />

            <p style={{ textAlign: "right" }}>
              -{" "}
              <a
                href="https://www.facebook.com/groups/breakingintodatascience/permalink/825152751411287/"
                target="_blank"
                rel="noreferrer"
              >
                Dominic Lovell
              </a>
              ,<br />
              <em>
                member of{" "}
                <a
                  href="https://www.facebook.com/groups/breakingintodatascience"
                  target="_blank"
                  rel="noreferrer"
                >
                  Breaking into Data Science
                </a>{" "}
                Facebook group
              </em>
            </p>
          </div>
        </div>

        <div className="white-box">
          <p className="box-title" style={{ textAlign: "center" }}>
            <strong>Screenshots</strong>
          </p>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item"
          >
            <img src={day0} alt="welcome email" onClick={handleShowClick} />
            <img src={day1} alt="day one email" onClick={handleShowClick} />
            <img src={day8} alt="day eight email" onClick={handleShowClick} />
            <img src={day15} alt="day 15 email" onClick={handleShowClick} />
            <img src={day22} alt="day 22 email" onClick={handleShowClick} />
          </Carousel>
        </div>

        <div className="teal-box">
          <div className="center-text-box" id="more-quotes">
            <p className="box-title">
              <strong>Testimonials</strong>
            </p>
            <p className="float-left">
              "Thanks for your email bootcamp! Really useful links 👍 "
            </p>{" "}
            <p className="float-right">
              -{" "}
              <a
                href="https://www.facebook.com/1489801702/videos/10225684123478421/"
                target="_blank"
                rel="noreferrer"
              >
                Irina Pavlovna
              </a>
              ,
            </p>
            <br />
            <p style={{ textAlign: "right", marginBottom: "30px" }}>
              <em>
                member of{" "}
                <a
                  href="https://www.facebook.com/groups/breakingintodatascience"
                  target="_blank"
                  rel="noreferrer"
                >
                  Breaking into Data Science
                </a>{" "}
                Facebook group
              </em>
            </p>
            <br />
            <p>
              "I love the brevity of the emails. I think some people may be
              overloaded by the number of links or what to do when they get
              redirected to Khan Academy. So the more specific the takeaways are
              from each of the resources the better. The facebook group seems
              like a great spot to engage with comments and questions on the
              material. Also good for accountability, etc. Overall, this is a
              great curation of DS related resources."
            </p>
            <p style={{ textAlign: "right", marginBottom: "30px" }}>
              -{" "}
              <a
                href="https://www.akinhwan.com/"
                target="_blank"
                rel="noreferrer"
              >
                Andrew Kim
              </a>
              ,<br />
              <em>full stack engineer</em>
            </p>
            <br />
            <p style={{ marginBottom: "4px" }}>
              "I think the bootcamp material is solid, and you definitely looked
              at many references to distill. It's a lot to cover in 12 weeks
              too! The Email Bootcamp is not only informative - it's insightful
              and organized. More Data Science content should be this
              entertaining.
            </p>
            <p style={{ marginBottom: "4px" }}>
              "This kind of thing could help prevent someone from giving up or
              becoming disinterested because they think machine learning is
              super complex or python is a pain to learn. It's not!
            </p>
            <p style={{ marginBottom: "4px" }}>
              "Even the experienced data scientist can benefit from resources
              that cover the bases in an entertaining way since not all of us
              have done deep learning, image models, or NLP work."
            </p>
            <p style={{ textAlign: "right" }}>
              - <strong style={{ color: "#051f36" }}>Ken Foo</strong>,<br />
              <em>data scientist & STEM evangelist</em>
            </p>
            <br />
          </div>
        </div>
        <div className="gray-box">
          <p className="box-title">
            <strong>Features</strong>
          </p>
          <div className="two-col three-col center-text-box">
            <p>
              🔬&nbsp;&nbsp;Week 1 - an&nbsp;<strong>overview</strong>&nbsp;of
              the Data Science field
              <br />
              ⚛️&nbsp;&nbsp;Week 2 - the key skill of&nbsp;
              <strong>statistics</strong>
              <br />
              🐍&nbsp;&nbsp;Week 3 -&nbsp;intro to&nbsp;<strong>Python</strong>
              &nbsp;for Data Science
              <br />
              🐼&nbsp;&nbsp;Week 4 -&nbsp;learn&nbsp;<strong>pandas</strong>
              &nbsp;for manipulating tabular data
              <br />
              🧪&nbsp;&nbsp;Week 5 -&nbsp;<strong>sklearn</strong>&nbsp;for
              machine learning
              <br />
              ⚙️&nbsp;&nbsp;Week 6 - fundamental applications of{" "}
              <strong>SQL</strong>
              <br />
              🧭&nbsp;&nbsp;Week 7 - data in the enterprise with&nbsp;
              <strong>Data Strategy</strong>
              <br />
              ⚖️&nbsp;&nbsp;Week 8 - fundamental importance of&nbsp;
              <strong>Data Ethics</strong>
              <br />
              🚗&nbsp;&nbsp;Week 9 - <strong>neural networks</strong>&nbsp;for
              Machine Learning
              <br />
              🏎&nbsp;&nbsp;Week 10 -&nbsp;GPUs and cloud for&nbsp;
              <strong>Deep Learning</strong>
              <br />
              🚀&nbsp;&nbsp;Week 11 -&nbsp;<strong>sample projects</strong>
              &nbsp;to grow your portfolio
              <br />
              💻&nbsp;&nbsp;Week 12 - building your career&nbsp;
              <strong>Data Science jobs</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
