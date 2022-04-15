import "./book-giveaway.css";
import email from "../img/icons/color-email-128.png";
import screenshot from "../img/093021_speedfriending.png";

import { Link } from "react-router-dom";

export default function NewsletterSignup() {
  function handleClick() {
    window.open(
      "mailto:nicolejanewaybills@gmail.com?subject=Data%20Strategy%20Professionals%20Book%20Recommendation"
    );
  }
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
          <a href="https://forms.gle/vKjqQXxucJcS922b6" target="_blank">
            Sign up for Community Newsletters
          </a>
        </p>
        <div
          className="card about-card"
          style={{ gridTemplateColumns: "400px auto" }}
        >
          <div className="card-image image is-4by4" style={{ border: "none" }}>
            <Link to="/products/cdmp-study-plan">
              <img
                src={screenshot}
                alt="Gatheround screenshot"
                style={{ margin: "0", padding: "10px", width: "400px" }}
              />
            </Link>
          </div>
          <div className="card-content" style={{ paddingBottom: "0px" }}>
            <p
              className="title card-title"
              style={{ marginBottom: ".2em", fontSize: "1.2em" }}
            ></p>
            <div className="content" style={{ marginBottom: "12px" }}>
              <br />
              <p>
                Join the 1,200+ Data Professionals who have opted to join our
                community. Non-annoying, twice a month email newsletters. Learn
                about Data Strategy and upcoming events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
