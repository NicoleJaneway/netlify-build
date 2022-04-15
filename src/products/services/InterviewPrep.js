import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import image from "../../img/products/services/interview-prep-sq.jpeg";

import DSPproducts from "../../components/DSPproducts";
import products from "../../data/products";
import CareerCoach from "../../components/CareerCoach";

const product = products.find((product) => product.name === "Interview Prep");

export default function InterviewPrep() {
  const [showProductsPopup, setShowProductsPopup] = useState(false);

  const handleSubmit = () => {
    window.open(
      "https://calendly.com/datastrategypros/interview-prep",
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
          content="man writing 'done' on a whiteboard"
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
              {product.description} Each session is personalized and geared for
              you to ace your interview. Our Career Coach will show you best
              practices to stand out among all applicants.{" "}
            </p>
            <br />
            <p>
              Working with the Coach, you'll learn how to present yourself
              powerfully through non-verbal communication such as posture,
              gestures, and eye contact, whether your interview is in-person or
              virtual. The techniques differ depending on the setting in which
              your interview takes place, so our Coach will guide you on exactly
              how to put your best self forward.
            </p>
            <br />
            <p>
              The session will also cover tips and tricks on answering difficult
              questions as well as what questions you can ask the interviewer to
              send the message that you're the right fit for the organization.
            </p>
            <br />
            <br />
            <p>
              <strong>Features</strong>
            </p>
            <ul>
              <li>
                Tailored feedback in 50 minute Zoom session with expert Career
                Coach
              </li>
              <li>Mock interview for your specific career position</li>
              <li>
                Guidance on how to develop the confidence, motivation, and
                mindset to perform at your best in the interview setting
              </li>
            </ul>
          </div>

          <div className="teal-box cdmp" id="product-testimonials">
            <p style={{ marginBottom: ".5em" }}>
              <strong>
                With your Coach, you will develop an interview action plan:
              </strong>
            </p>
            <ul>
              <li style={{ marginBottom: ".5em" }}>
                How to maintain body language and eye contact to present a
                positive affect to your interview partner
              </li>
              <li style={{ marginBottom: ".5em" }}>
                How to communicate your ideas and experience using a proven
                communication framework
              </li>
              <li style={{ marginBottom: ".5em" }}>
                How to respond to questions in an impressive way, even when you
                don't know the answer
              </li>
              <p style={{ marginBottom: ".5em" }}>& more!</p>
              <br />
              <p>
                <em>
                  Our objective is to help every Data Strategist find their
                  ideal role. We can help you achieve success on your unique
                  career path. If required, you can{" "}
                  <a
                    href="https://calendly.com/datastrategypros/free-intro-session"
                    target="_blank"
                    rel="noreferrer"
                  >
                    book a free 15 minute intro session.
                  </a>
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
          <div style={{ gridColumn: "1 / -1" }}>
            <CareerCoach />
          </div>
        </div>
      </div>
    </>
  );
}
