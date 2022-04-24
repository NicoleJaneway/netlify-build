import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import image from "../../img/products/services/resume-review-sq.jpeg";

import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";
import CareerCoach from "../../components/CareerCoach";

const product = products.find((product) => product.name === "Resume Review");

export default function ResumeReview() {
  const [showProductsPopup, setShowProductsPopup] = useState(false);
  // const [service, setService] = useState("resume review");

  const handleSubmit = () => {
    window.open("https://py.pl/3SvnG9mbah4", "_blank");
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
        <meta name="og:image:alt" content="two women discussing resume" />
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
                {/* <label htmlFor="options">
                 <strong>Options</strong> <br />
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{ width: "100%" }}
                  >
                    <option value="resume review">Resume Review</option>
                    <option value="li review">LinkedIn Review</option>
                    <option value="resume & li review">
                      Resume & LinkedIn Review
                    </option>
                    <option value="review+coaching">
                      Job Application Coaching
                    </option> 
                  </select>
                </label>
                <br />*/}
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
            <p>{product.description}</p>
            <br />
            <p>
              The expertise of our Career Coach will enable you to craft your
              resume and LinkedIn presence into a more accurate representation
              of your skills as a data practitioner. Our Coach will help you
              build your job search documents before you take the{" "}
              <Link to="/resources/cdmp">CDMP exam</Link> or after you finish
              this impressive accomplishment.
            </p>
            <br />
            <p>
              Your resume and LinkedIn presence are marketing tools. With the
              guidance of our Career Coach, you will pinpoint the exact keywords
              required to attain the position you're applying for. The review
              will also focus on best practices in formatting and other ways to
              highlight your skills and experience. At the end of the day,
              you'll understand how to reuse these principles to consistently
              attain the job offers you desire.
            </p>
            <br />
            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>
                <strong>Resume Review</strong> offers detailed guidance in an
                email from our Career Coach that is focuses on how to improve
                your resume for data-related job applications
              </li>
              <li>
                <strong>LinkedIn Review</strong> offers detailed guidance in an
                email from our Career Coach so that you can modernize your
                online presence for a significant boost to your chances for job
                application success
              </li>
              <li>
                For more{" "}
                <Link to="/products/career-coaching">
                  <strong>Career Coaching</strong>
                </Link>
                , be sure to check out our{" "}
                <Link to="/products/career-coaching">product offering</Link> for
                a Zoom session with our expert Coach
              </li>
            </ul>

            {/* <p>
              <strong>Options</strong>
            </p>
            <ul>
              <li>
                <strong>Resume Review</strong> focuses on how to improve your CV
                for data-related job applications
              </li>
              <li>
                <strong>LinkedIn Review</strong> focuses on how to enhance your
                LinkedIn presence
              </li>
              <li>
                <strong>Resume & LinkedIn Review</strong> bundles the above
                offerings
              </li>
              <li>
                <strong>Job Application Coaching</strong> offers a Zoom session
                with an expert career coach to help you prepare your job
                application, including the skills to update your resume and
                LinkedIn
              </li>
            </ul> */}
          </div>

          <div className="teal-box cdmp" id="product-testimonials">
            <p style={{ marginBottom: ".5em" }}>
              <strong>Bad News / Good News</strong>
            </p>
            <p style={{ marginBottom: ".5em" }}>
              Have you heard that a Hiring Manager looks at a resume for just
              ten seconds before they either delete or pass along the candidate?
            </p>
            <br />
            <p style={{ marginBottom: ".5em" }}>
              And that's typically after your resume has already gone through an
              automated screening process, sometimes one using
              not-so-sophisticated keyword matching.
            </p>
            <br />
            <p style={{ marginBottom: ".5em" }}>
              With the expert guidance of our Career Coach, you won't have to
              worry about your skills and expertise being overlooked. The Resume
              Review will ensure the Hiring Manager gives your job application
              the consideration it deserves.
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
