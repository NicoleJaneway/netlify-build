import { useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import DataStrategy from "./DataStrategy";
import Team from "./Team";
import Contact from "./Contact";
import Members from "./Members";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="About the Data Strategy Professionals team."
        />
        <meta property="og:title" content="About" />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com/about"}
        />
        <meta
          name="og:description"
          content="About the Data Strategy Professionals team."
        />
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="og:image:alt" content="hand holding lightbulb" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="About" />
        <meta
          name="twitter:description"
          content="About the Data Strategy Professionals team."
        />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title">About</p>
        {/* <div className="center-text-box"> */}
        <p>
          <strong>Our mission</strong> is to provide a space for thoughtful
          conversations about Data Strategy. To this end, we offer an{" "}
          <a href="/oath">oath for data practitioners</a>, as well as training
          on <a href="/products/cdmp-study-plan">Data Management</a> and{" "}
          <a href="/products/data-science-email-bootcamp">Data Science</a>.
        </p>
        <br />
        <br />
        {/* </div> */}

        <div className="buttons">
          <NavLink to="/about/dsp">
            <button className="btn btn-default">
              Data Strategy Fundamentals
            </button>
          </NavLink>
          <NavLink to="/about/team">
            <button className="btn btn-default">About the Team</button>
          </NavLink>
          <NavLink to="/about/members">
            <button className="btn btn-default">About our Members</button>
          </NavLink>
          <NavLink to="/about/contact">
            <button className="btn btn-default">Get in Touch</button>
          </NavLink>
        </div>

        <Switch>
          <Route exact path="/about/dsp">
            <br />
            <DataStrategy />
          </Route>
          <Route exact path="/about/team">
            <br />
            <Team />
          </Route>
          <Route exact path="/about/members">
            <br />
            <Members />
          </Route>
          <Route exact path="/about/contact">
            <br />
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}
