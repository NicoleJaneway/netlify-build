import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import image from "../../img/products/services/zoom-convo-sq.jpeg";

import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";
import CareerCoach from "../../components/CareerCoach";

const product = products.find((product) => product.name === "Career Coaching");

export default function CareerCoaching() {
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  const handleSubmit = () => {
    window.open(
      "https://calendly.com/datastrategypros/career-coaching",
      "_blank"
    );
  };

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
              "CDMP Exam Question Sets",
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
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta
          name="og:image:alt"
          content="young woman explaining her career goals"
        />
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
        <p className="title product-title">{product.name}</p>
        <div className="product-info thirds">
          <div id="product-left-side">
            <img id="product-img" src={image} alt={product.name}></img>

            <div className="order-form" style={{ display: "block" }}>
              <form onSubmit={handleSubmit}>
                <button
                  className="btn btn-accent"
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "10px 20px",
                    margin: "4px 0",
                  }}
                >
                  Book now
                </button>
              </form>
            </div>
          </div>

          <div className="gray-box" id="product-description">
            <p>
              <strong>Description</strong>
            </p>
            <p>
              To gain the confidence to fully own your data-related career, seek
              guidance from an expert Career Coach. Our coaching service
              promotes clarity on the strategies that will propel your career.
              Whether you're looking to advance in your current organization,
              transform your position to grow your skills, or find a new
              opportunity, Career Coaching will help you move toward that dream
              job!
            </p>
            <br />
            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>
                Zoom session lasting approximately 50 minutes, tailored to
                developing your career strategy
              </li>
              <li>
                Identify tactical next steps to advance in your current position
                or attain your ideal job
              </li>
              <li>
                Develop the confidence, motivation, and mindset to navigate your
                career
              </li>
            </ul>
            <br />
            <p>
              <em>
                You can{" "}
                <a
                  href="https://calendly.com/datastrategypros/free-intro-session"
                  target="_blank"
                  rel="noreferrer"
                >
                  book a free 15 minute intro session
                </a>{" "}
                if you feel it would help you get to know the approach of our
                Career Coach. Our objective is to help every Data Strategist
                find their ideal role. Whether you're seeking a position in Data
                Stewardship, Data Architecture, Business Analytics, or the
                C-Suite, we can help you achieve success on your unique career
                path.
              </em>
            </p>
          </div>

          <div className="teal-box cdmp" id="product-testimonials">
            <p style={{ marginBottom: ".5em" }}>
              <strong>With our Coach, you will discover:</strong>
            </p>
            <ul>
              <li style={{ marginBottom: ".5em" }}>
                Exactly what your perfect career looks like
              </li>
              <li style={{ marginBottom: ".5em" }}>
                How to develop the strategies and tools you need to kickstart
                your career journey
              </li>
              <li style={{ marginBottom: ".5em" }}>
                Secrets of career advancement, including the networking
                techniques, resumes tips, and Linkedin adjustments that will
                make your leadership ability more visible to your current
                organization and/or potential new employers
              </li>
            </ul>
            <br />
            <p style={{ textAlign: "center" }}>
              If you'd like to see our Career Coach in action, check out this{" "}
              <a
                href="https://www.youtube.com/watch?v=Bs-EF6dOjzE"
                target="_blank"
                rel="noreferrer"
              >
                recorded session
              </a>
            </p>
          </div>

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
          <div style={{ gridColumn: "1 / -1" }}>
            <CareerCoach />
          </div>
        </div>
      </div>
    </>
  );
}
