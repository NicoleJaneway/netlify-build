import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import mountain from "../img/mountain-man2.jpeg";
import storm from "../img/crossed-arms2.jpeg";
import swimmer from "../img/swimmer.jpeg";
import milkyway from "../img/milky-way_cropped3.jpg";
import coach from "../img/pushups.jpeg";

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources</title>
        <meta
          name="description"
          content="Articles to help you better understand the fields of Data Strategy and Data Science."
        />
        <meta property="og:title" content="Resources" />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com/resources"}
        />
        <meta
          name="og:description"
          content="Articles to help you better understand the fields of Data Strategy and Data Science."
        />
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="og:image:alt" content="hand holding lightbulb" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="Resources" />
        <meta
          name="twitter:description"
          content="Articles to help you better understand the fields of Data Strategy and Data Science."
        />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="home-layout">
        <p className="title">Resources</p>
        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/foundations">
              <img
                src={mountain}
                alt="man standing on mountain"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/foundations">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                Foundations of Data Strategy
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />
              Data Strategy outlines how data contributes to the vision, focus
              areas, guiding principles, essential capabilities, and goals of
              your organization. A strong Data Strategy positions your
              organization to capitalize on its strategic assets without
              jeopardizing its most important relationships with customers,
              employees, and partners.
              <br></br>
            </div>
          </div>
        </div>
        <br />

        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/cdmp">
              <img
                src={swimmer}
                alt="man swimming"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/cdmp">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                The Best Data-Related Certification You’ve Never Heard Of
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />A practical guide to the most valuable training in Data
              Strategy.
              <br></br>
            </div>
          </div>
        </div>
        <br />

        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/specialist">
              <img
                src={milkyway}
                alt="milkyway"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/specialist">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                Essential Guide to the CDMP Specialist Exams
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />
              Everything you need to know to attain the Practitioner and Master
              level certifications.
              <br></br>
            </div>
          </div>
        </div>
        <br />

        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/data-strategy-for-leaders">
              <img
                src="https://miro.medium.com/max/2000/1*fZovDHtXZptukm5nIieivA.jpeg"
                alt="leader"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/data-science-for-leaders">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                An Introduction to Data Science for Technology Leaders
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />
              Leverage machine learning capabilities to fulfill your
              organization’s mission statement.
              <br></br>
            </div>
          </div>
        </div>
        <br />

        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/oath">
              <img
                src={storm}
                alt="man with crossed arms"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/oath">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                Are we ready for an Oath for Data Practitioners?
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />
              Just as we have best practices for setting up a database or
              creating a machine learning model, Data Practitioners should be
              bound to a set of rules when it comes to ethical conduct.
              <br></br>
            </div>
          </div>
        </div>
        <br />
        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/warehouse">
              <img
                src="https://miro.medium.com/max/1400/0*aLkxYbRSp_z13uS6"
                alt="safari"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/warehouse">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                Comprehensive Guide to the Data Warehouse
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />
              Data analysis can’t start until the data cleaning process is
              complete. Learn about the role of the data warehouse as a
              repository of analysis-ready datasets.
              <br></br>
            </div>
          </div>
        </div>
        <br />
        <div className="card about-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
            }}
          >
            <Link to="resources/career-coaching">
              <img
                src={coach}
                alt="pushups"
                style={{
                  margin: "0",
                  padding: "10px",
                  maxWidth: "215px",
                }}
              />
            </Link>
          </div>
          <div className="card-content">
            <Link to="resources/career-coaching">
              <p className="title card-title" style={{ marginBottom: "0" }}>
                What Career Coaching Can Do for Your Data-Related Career
              </p>
            </Link>
            <p style={{ fontSize: "0.95em" }}> </p>
            <div className="content">
              <br />
              Typically, we assume Career Coaching is most beneficial for
              someone changing careers. While that may be true, a Coach can
              catapult your career whether you're switching positions or looking
              to grow in your current role. Let's get clear about how to attain
              your dream job.
              <br></br>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
