import { useState } from "react";

export default function DataStrategy() {
  const [showModal, setShowModal] = useState(false);

  const handleShowClick = (event) => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <dialog open onClick={handleShowClick}>
          <figure>
            <img
              src="https://miro.medium.com/max/1400/1*JtJmY1YheAQ2Nn3Qdo-cnA.png"
              alt="Aiken Pyramid"
              onClick={handleShowClick}
            />
            <figcaption style={{ margin: "0" }}>Aiken Pyramid</figcaption>
          </figure>
        </dialog>
      )}
      <div className="oath" style={{ width: "98%" }}>
        <p className="title" style={{ fontSize: "1.2em" }}>
          Getting Started with Data Strategy
        </p>
        <p>
          We now have the ability to measure and evaluate many areas of our
          society, business, and day-to-day life that previously went
          unrecognized and unobserved. At Data Strategy Professionals, we
          believe that what we choose to measure and evaluate is a reflection of
          our values.{" "}
        </p>
        <p>
          As of 2020, the size of our digital universe was around{" "}
          <a
            href="https://techjury.net/blog/how-much-data-is-created-every-day/"
            target="blank"
          >
            40 zettabytes
          </a>
          . By comparison, the world had produced just 1.2 zettabytes of data by
          the year 2010. That represents explosive growth of 3,000% in a single
          decade. Obviously, this represents significant opportunities and
          challenges for professionals working in data-related fields.
        </p>
        <p>
          A deep understanding of Data Strategy transforms a data practitioner
          from simply being a consumer of data into being an empowered advocate
          for better data management practices.
        </p>
        <figure
          style={{ maxWidth: "750px", float: "left", margin: "0 40px 1em 0" }}
        >
          <img
            style={{ boxShadow: "0px 3px 7px 3px rgba(0, 0, 0, 0.07)" }}
            src="https://miro.medium.com/max/1400/1*JtJmY1YheAQ2Nn3Qdo-cnA.png"
            alt="Aiken Pyramid"
            onClick={handleShowClick}
          />
          <figcaption
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: ".9em",
            }}
          >
            The{" "}
            <a href="https//amzn.to/32oK8hH" target="_blank">
              Aiken Pyramid
            </a>{" "}
            represents the fourteen content areas of Data Strategy
          </figcaption>
        </figure>
        <div>
          <p>
            Data Strategy can be thought of as aligning to a pyramid. As
            discussed in{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>The Data Management Body of Knowledge</em>
            </a>
            , The Aiken Pyramid outlines core Data Strategy concepts in a
            structure that illustrates how these functions build upon each
            other. At the pinnacle of the diagram, Data Science activities
            shouldn’t even be attempted until these other data management
            structures are in place and proven to be functioning effectively.
            Like Maslow’s hierarchy of needs, Data Science actualization cannot
            be attained without first achieving the physiological and safety
            needs of Data Governance, Data Quality, and Data Architecture at the
            foundational levels of the Aiken Pyramid.
          </p>

          <p>
            In{" "}
            <a href="https://amzn.to/3l6bxgz">
              <em>The Lean Startup</em>
            </a>
            , Eric Reis provides further motivation for diving deep into Data
            Strategy as he explores how innovators use data to support
            experimentation. A strong data infrastructure allows organizations
            of any size to validate hypotheses about customer values. Data
            provides a common language across business functions, allowing teams
            to move collectively towards empirically derived truth.
          </p>

          <p>
            On the other hand, “the very existence of an organization can be
            threatened by poor data quality.” So says Joe Peppard, Principal
            Research Scientist at MIT. Data Strategy helps an organization
            mitigate risk and protect their stakeholders, including customers,
            suppliers, and employees.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
