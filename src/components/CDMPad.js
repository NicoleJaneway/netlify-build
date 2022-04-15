import "./book-giveaway.css";

import { Link } from "react-router-dom";

export default function CDMPad() {
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
          <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link>
        </p>
        <div className="card about-card">
          <div className="card-image image is-4by4" style={{ border: "none" }}>
            <Link to="/products/cdmp-study-plan">
              <img
                src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
                alt="hand holding lightbulb"
                style={{ margin: "0", padding: "10px", maxWidth: "215px" }}
              />
            </Link>
          </div>
          <div className="card-content" style={{ paddingBottom: "0px" }}>
            <p
              className="title card-title"
              style={{ marginBottom: ".2em", fontSize: "1.2em" }}
            >
              Effortlessly ace the{" "}
              <Link to="/products/cdmp-study-plan">CDMP Fundamentals exam</Link>{" "}
              in 90 days or less
            </p>
            <div className="content" style={{ marginBottom: "12px" }}>
              <br />
              <p>
                Join the hundreds of Data Professionals who have opted to
                maximize their <strong>time, energy, and motivation</strong>{" "}
                while studying for the CDMP exam with the help of Data Strategy
                Professionals'{" "}
                <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link>.
              </p>
              <p>
                The plan is delivered as 3-4 emails each week that cover each of
                the 14 chapters{" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>
                . The 90-day plan outlines a study and review schedule
                scientifically proven to maximize long term retention of the
                material.
              </p>
              <p>
                On a different timeline to achieve Data Strategy mastery? No
                problem! Purchase <strong>Immediate Access</strong> to the{" "}
                <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link> to
                receive all 60+ emails at one time.
              </p>

              <p>
                Because becoming a Data Strategist is about more than a test
                score, the CDMP Study Plan also provides real world examples,
                case studies, and job prep resources that will help you advance
                your career.
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
            <Link to="/products/cdmp-study-plan">
              <button
                className="btn btn-accent"
                style={{
                  marginTop: "1em",
                  marginBottom: "2em",
                }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
