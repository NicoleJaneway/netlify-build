import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import OurCommunity from "./OurCommunity";
import Journeys from "./Journeys";

export default function Home() {
  return (
    <>
      <Helmet>
        ‍<title>Data Strategy Professionals</title>‍
        <meta
          name="description"
          content="Training for data practitioners and CDMP exam takers."
        />
        <meta
          name="twitter:card"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="twitter:site" content="@Nicole_Janeway" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
        <meta name="twitter:title" content="Data Strategy Professionals" />
        <meta
          name="twitter:description"
          content="Training for data practitioners and CDMP exam takers."
        />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta property="og:title" content="Data Strategy Professionals" />
        <meta
          property="og:description"
          content="Training for data practitioners and CDMP exam takers."
        />
        <meta
          property="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta property="og:site_name" content="Data Strategy Professionals" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div
        className="homepage-img"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="homepage-box box-shadow">
          <div style={{ color: "#000" }}>
            <span
              style={{
                fontSize: "2em",
                fontWeight: "400",
              }}
            >
              Advance your Career in Data
            </span>
            <div className="hide-on-mobile">
              <p className="homepage-box-text">
                <br />
                At <strong>Data Strategy Professionals</strong>, we recognize
                that your work moves mountains
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="center-text-box">
        <p style={{ width: "90%", margin: "auto", fontSize: "1.02em" }}>
          Data Strategy is a crucial discipline that spans end-to-end management
          of the data lifecycle as well as associated aspects of Data Governance
          and key considerations of Data Ethics. We have the ability to measure
          and evaluate many areas of our society, business, and day-to-day life
          that previously went unrecognized and unobserved. What we choose to
          measure and evaluate is a reflection of our values.
        </p>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="teal-box homepage">
          <p
            style={{
              fontSize: "1.2em",
              fontWeight: "200",
              textAlign: "center",
              padding: "40px",
            }}
          >
            {" "}
            Our primary objective is to help you ace the{" "}
            <Link to="/resources/cdmp">
              Certified Data Management Professional Exam
            </Link>
            . We offer a{" "}
            <Link to="/products/cdmp-study-plan">90-Day Study Plan</Link>, as
            well as{" "}
            <Link to="/products/cdmp-Fundamentals-notes">
              Fundamentals Notes
            </Link>{" "}
            that can be used on the open book, open notes test.
          </p>
        </div>
      </div>
      {/* <br />
      <NewsletterSignup /> */}
      <br />
      <br />
      <OurCommunity />
      <Journeys />
    </>
  );
}
