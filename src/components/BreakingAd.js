import "./book-giveaway.css";

import { Link } from "react-router-dom";

export default function BreakingAd() {
  return (
    <div className="teal-box" style={{ maxWidth: "2000px", margin: "auto" }}>
      <div className="center-text-box" id="more-quotes">
        <p
          className="box-title"
          style={{
            fontSize: "1.2em",
            marginBottom: "12px",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          <Link to="/products/data-science-email-bootcamp">
            Breaking into Data Science Email Bootcamp
          </Link>
        </p>
        <div className="card about-card">
          <div className="card-image image is-4by4" style={{ border: "none" }}>
            <Link to="/products/data-science-email-bootcamp">
              <img
                src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/breaking_into_ds_square.jpg"
                alt="hands stacked over table"
                style={{
                  maxWidth: "215px",
                  padding: "1em",
                }}
              />
            </Link>
          </div>
          <div className="card-content" style={{ paddingBottom: "0px" }}>
            <div className="content" style={{ marginBottom: "12px" }}>
              <p style={{ paddingTop: ".4em" }}>
                Email Bootcamp delivers the opportunity to learn Data Science
                through <strong>three to four emails</strong> each week on a
                different foundational topic. You'll gain access to an{" "}
                <strong>exclusive Facebook group</strong> to interact with other
                data professionals and get any of your questions related to the
                course content answered by an expert.
              </p>
              <p>
                Each week, you'll receive +4 Data Science emails containing:{" "}
                <strong>key resources</strong>,{" "}
                <strong>crucial concepts</strong>,{" "}
                <strong>midweek checkin</strong>, <strong>weekly wrapup</strong>
                , and
                <strong>bonus content</strong>.
              </p>
              <p>
                Topics in the bootcamp include <strong>Statistics</strong>,{" "}
                <strong>Python and core libraries</strong>, <strong>SQL</strong>
                , <strong>Data Strategy</strong>,{" "}
                <strong>Machine Learning</strong>, and{" "}
                <strong>Deep Learning</strong>.
              </p>
              <p>
                Overall,{" "}
                <Link to="/products/data-science-email-bootcamp">
                  Breaking into Data Science Email Bootcamp
                </Link>{" "}
                is an excellent resource for technology leaders to better
                understand this highly in-demand field.
              </p>
            </div>
          </div>
          <div
            style={{
              gridColumn: "1/3",
              textAlign: "center",
              justifyItems: "center",
            }}
          >
            <Link to="/products/data-science-email-bootcamp">
              <button
                className="btn btn-accent"
                style={{
                  marginTop: "1em",
                  marginBottom: "2em",
                }}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
