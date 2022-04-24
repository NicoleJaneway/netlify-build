// import Divider from "@material-ui/core";
import { Link } from "react-router-dom";

export default function OurCommunity() {
  return (
    <div
      className="white-box"
      style={{
        padding: "0",
        margin: "auto",
        width: "85%",
        background: "none",
      }}
    >
      {/* <Divider sx={{ fontWeight: 600, fontSize: "1.1em" }}> */}
      <p style={{ textAlign: "center", fontSize: "1.2em" }}>
        <strong>Our Community</strong>
      </p>
      {/* </Divider> */}
      <br />

      <div
        className="image-display-tri hide-on-mobile"
        style={{ gap: "40px", justifyContent: "space-between" }}
      >
        <figure className="hide-on-mobile">
          <a
            href="https://www.facebook.com/groups/cdmpstudygroup"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
              alt="hand holding lightbulb"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            <a
              href="https://www.facebook.com/groups/cdmpstudygroup"
              target="_blank"
              rel="noreferrer"
            >
              CDMP Study Group
            </a>
          </figcaption>
        </figure>

        <figure className="hide-on-mobile">
          <a
            href="https://www.facebook.com/groups/breakingintodatascience"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/breaking_into_ds_square.jpg"
              alt="hands stacked in huddle over table"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            <a
              href="https://www.facebook.com/groups/breakingintodatascience"
              target="_blank"
              rel="noreferrer"
            >
              Breaking into Data Science
            </a>
          </figcaption>
        </figure>

        <figure className="hide-on-mobile">
          <a
            href="https://www.linkedin.com/groups/13951141/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/1_t43PDV1g9w-DvjMugoks2A_square.jpeg"
              alt="buildings"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/groups/13951141/"
              target="_blank"
              rel="noreferrer"
            >
              Data Strategy Professionals on LinkedIn
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="hide-on-mobile">
        <br />
        <br />
      </div>
      <div className="center-text-box">
        <p>
          The best credential for Data Strategists is an{" "}
          <a
            rel="noreferrer noopener"
            href="http://amzn.to/32oK8hH"
            target="_blank"
          >
            open book
          </a>{" "}
          test. The{" "}
          <Link to="/resources/cdmp">
            Certified Data Management Professional exam
          </Link>{" "}
          is wonderfully practical in its approach to testing Data Management
          fundamentals. In the{" "}
          <a
            rel="noreferrer noopener"
            href="https://www.facebook.com/groups/cdmpstudygroup/"
            target="_blank"
          >
            CDMP Study Group
          </a>
          , we cover a different chapter of the{" "}
          <a
            rel="noreferrer noopener"
            href="http://amzn.to/32oK8hH"
            target="_blank"
          >
            <em>Data Management Body of Knowledge </em>
          </a>
          each month. For a 90-day study plan that will help you effortlessly
          ace the exam,{" "}
          <Link
            rel="noreferrer noopener"
            to="/products/cdmp-study-plan"
            target="_blank"
          >
            click here
          </Link>
          .
        </p>
        <br />

        <p>
          In{" "}
          <a
            rel="noreferrer noopener"
            href="https://www.facebook.com/groups/breakingintodatascience"
            target="_blank"
          >
            Breaking into Data Science
          </a>
          , aspiring Data Scientists can share their journey into the field.
          Topics covered include statistics, Python, pandas, sklearn, SQL, Data
          Strategy, Data Ethics, Machine Learning, Deep Learning, Sample
          Projects, and Data Science jobs. For an email bootcamp that covers the
          year’s worth of content in twelve weeks,{" "}
          <Link to="/products/data-science-email-bootcamp" target="_blank">
            click here
          </Link>
          . (To check out more information about the bootcamp, including sample
          emails and customer reviews,{" "}
          <a
            rel="noreferrer noopener"
            href="https://www.facebook.com/media/set/?set=oa.502365124261224&amp;type=3"
            target="_blank"
          >
            click here
          </a>
          .)
        </p>
        <br />

        <p>
          The size of our digital universe has grown{" "}
          <Link to="/resources/foundations" target="_blank">
            {" "}
            30x
          </Link>{" "}
          in the past decade.{" "}
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/groups/13951141"
            target="_blank"
          >
            Data Strategy Professionals
          </a>{" "}
          is the place for thoughtful conversations about how to tackle new
          challenges and opportunities presented by the ever-increasing wealth
          of data. In this LinkedIn group, we trade career advice, resources for
          Data Ethics, and thoughts on{" "}
          <a href="https://www.youtube.com/watch?v=SUOsHOxuvtI&amp;ab_channel=NicoleJanewayBills">
            what to measure and why
          </a>
          .
        </p>
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}
