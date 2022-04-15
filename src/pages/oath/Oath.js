import { NavLink, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import GitHub from "../../img/icons/black-github-icon.png";

import OathDescription from "./OathDescription";
import DataPractitionersOath from "./DataPractitionersOath";
import DataScientistsOath from "./DataScientistsOath";

export default function Oath() {
  // TO DO
  // Toggle active class on NavLink

  function handleGitHubClick() {
    window.open("https://github.com/DataStrategyPros/oath", "_blank");
  }

  return (
    <>
      <Helmet>
        <title>Oath</title>
        <meta
          name="description"
          content="Oath of ethics for Data Strategists and Data Scientists."
        />
        <meta property="og:title" content="Oath" />
        {/* OpenGraph tags */}
        <meta name="og:url" content={"https://www.datastrategypros.com/oath"} />
        <meta
          name="og:description"
          content="Oath of ethics for Data Strategists and Data Scientists."
        />
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="og:image:alt" content="hand holding lightbulb" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="Oath" />
        <meta
          name="twitter:description"
          content="Oath of ethics for Data Strategists and Data Scientists"
        />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="home-layout">
        <p className="title">Oath</p>
        <div
          className="buttons"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="float-left">
            <NavLink to="/oath/data-practitioner">
              <button className="btn btn-default">
                Data Practitioner's Oath
              </button>
            </NavLink>
            <NavLink to="/oath/data-scientist">
              <button className="btn btn-default">Data Scientist's Oath</button>
            </NavLink>
          </div>
          <button className="btn btn-default" onClick={handleGitHubClick}>
            {" "}
            <img
              src={GitHub}
              style={{ height: "1em", marginRight: "4px" }}
              alt="GitHub logo"
            />{" "}
            Edit on GitHub
          </button>
        </div>

        <Switch>
          <Route exact path="/oath">
            <OathDescription />
          </Route>
          <Route exact path="/oath/data-practitioner">
            <DataPractitionersOath />
          </Route>
          <Route exact path="/oath/data-scientist">
            <DataScientistsOath />
          </Route>
        </Switch>
      </div>
    </>
  );
}
