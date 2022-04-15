import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import coach from "../img/pushups.jpeg";

import CareerCoach from "../components/CareerCoach";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "coaching");

export default function Coaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Career Coaching</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com" + post.link}
        />
        <meta name="og:description" content={post.description} />
        <meta name="og:image" content={coach} />
        <meta name="og:image:alt" content="two people doing pushups" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coach} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title" style={{ marginBottom: "0.2em" }}>
          {post.title}
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            Typically, we assume Career Coaching is most beneficial for someone
            changing careers. While that may be true, a Coach can catapult your
            career whether you're switching positions or looking to grow in your
            current role.
          </p>{" "}
          <figure>
            <img
              src={coach}
              alt="two people doing pushups"
              className="box-shadow"
            />
            <figcaption>
              {post.description} Photo by{" "}
              <a
                href="https://www.pexels.com/@mikhail-nilov"
                target="_blank"
                rel="noreferrer"
              >
                Mikhail Nilov
              </a>{" "}
              on{" "}
              <a
                href="https://www.pexels.com/photo/man-and-woman-doing-push-up-face-to-face-6740308/"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </figcaption>
          </figure>
          <p>
            Taking action with the support of a{" "}
            <Link to="/products/career-coaching">Career Coach</Link> can help
            you reach your goals faster. A Coach can help you find a new job or
            attain promotion within your current organization.{" "}
          </p>
          <p>
            There are many paths to your ideal future career. On your own, you
            may feel overwhelmed and unable to make progress in a clear
            direction. At the same time, you may not be able to see all the
            possibilities without an objective external perspective. The support
            of a Career Coach can help address both sets of challenges.
          </p>
          <p>
            At Data Strategy Professionals, our objective with Career Coaching
            is to help you close the gap between where you are now and where you
            want to go in your data-related career.
          </p>
          <p style={{ marginBottom: "0em" }}>
            Outlined below, our multistep process yields consistent results.
          </p>
          <ol style={{ marginBottom: "1em" }}>
            <li>
              <strong>Identify where you are now.</strong> Start from a place of
              complete honesty with yourself.
            </li>
            <li>
              <strong>Visualize your ideal career.</strong> With your Career
              Coach, you'll go through a process of discovery to outline every
              aspect of the data-related job that would be most fulfiling to
              you. Whether this goal represents the height of ambition or feels
              just out of your reach, we'll start to work toward the future you
              envision.{" "}
            </li>
            <li>
              <strong>Identify the gaps to future state.</strong>
              Let's think through the steps required to reach your goal. With
              the support of your Coach, you'll start to close the gap between
              where you are now and where you'd like to be in your career. Our
              Coach can help you put together resume for this future you.{" "}
              <i>
                What education will you need? What experience will help you get
                there faster? Can you engage in sample projects or contract work
                that would fulfil that experience requirement? What
                certifications, tools, and skills do you need?{" "}
              </i>
            </li>
            <li>
              <strong>
                Now that you have clarity on where you want to go and the steps
                you need to take to get there
              </strong>
              ... what mindset and habits does future you need to get that dream
              job?
            </li>
          </ol>
          <p>
            {" "}
            So often, we see clients come in and what they think they need is
            one thing and what they really need is to align all that they are
            creating. When you bring your actions in line with your ideals, you
            gain strength of conviction. When the winds of life come in fast and
            heavy, you'll have a foundation to stand on. Let's help you get
            aligned with future you in every way!
          </p>
          <p>
            {" "}
            Whether your goal is to get a new job or attain advancement in your
            career as a Data Steward, Data Scientist, or Chief Data Officer, we
            can help you achieve success on your unique career path. (
            <a
              href="https://www.youtube.com/watch?v=Bs-EF6dOjzE"
              target="_blank"
              rel="noreferrer"
            >
              Watch as our Coach, Victoria Clark, helps a data-focused Product
              Manager gain clarity in her career goals.
            </a>
            ) We'll support you with{" "}
            <Link to="/products/resume-review">resume review</Link> and{" "}
            <Link to="/products/interview-prep">interview prep</Link> services
            too, so that your next step can be aligned on the path to your dream
            job (and making that awesome money too)!
          </p>
          <div style={{ maxWidth: "1100px" }}>
            <CareerCoach />
          </div>
        </div>
      </div>
    </>
  );
}
