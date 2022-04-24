import "./book-giveaway.css";
import email from "../img/icons/color-email-128.png";

export default function BookGiveaway() {
  function handleClick() {
    window.open(
      "mailto:nicolejanewaybills@gmail.com?subject=Data%20Strategy%20Professionals%20Book%20Recommendation"
    );
  }
  return (
    <div className="teal-box">
      <div className="center-text-box" id="more-quotes">
        <p
          className="box-title"
          style={{ fontSize: "1.2em", marginBottom: "12px" }}
        >
          <strong>November Book Giveaway</strong>
        </p>
        <div className="card about-card">
          <div className="card-image image is-4by4" style={{ border: "none" }}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41suNzklWRL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
              alt="Responsible Data Science"
              style={{ margin: "0", padding: "10px", maxWidth: "215px" }}
            />
          </div>
          <div className="card-content" style={{ paddingBottom: "0px" }}>
            <p className="title card-title" style={{ marginBottom: "0" }}>
              <a href="https://amzn.to/38rZBQW" target="_blank">
                <em>Responsible Data Science</em>
              </a>{" "}
              by Grant Fleming and Peter Bruce
            </p>
            <div className="content" style={{ marginBottom: "12px" }}>
              <br />
              <p>
                At the end of November, Data Strategy Professionals will be
                giving away a copy of{" "}
                <a href="https://amzn.to/38rZBQW" target="_blank">
                  <em>Responsible Data Science</em>
                </a>
                .
              </p>
              <div className="book-summary">
                <p style={{ marginBottom: "0" }}>Summary:</p>
                <p style={{ paddingLeft: "20px", marginBottom: "1em" }}>
                  The increasing popularity of Data Science has resulted in
                  numerous well-publicized cases of bias, injustice, and
                  discrimination. The widespread deployment of “black box”
                  models is a primary source of these unanticipated harms,
                  making modern techniques for manipulating large datasets seem
                  sinister, even dangerous. To prevent these harms, Data
                  Scientists must come to understand the potential impact of the
                  algorithms that they build and deploy.
                </p>
                <div style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-default"
                    style={{ marginBottom: "1em" }}
                    onClick={handleClick}
                  >
                    <img
                      src={email}
                      alt="email"
                      style={{
                        height: "1.6em",
                        marginRight: "10px",
                        verticalAlign: "middle",
                      }}
                    />
                    Enter the November Book Giveaway
                  </button>
                  <p>
                    To enter, email the community organizer with your favorite
                    data-related book recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mobile-book-summary"
            style={{
              marginTop: "8px",
              gridColumn: "1/-1",
              padding: "0 12px 1em 12px",
            }}
          >
            <p style={{ marginBottom: "0" }}>Summary:</p>
            <p style={{ paddingLeft: "20px", marginBottom: "1em" }}>
              The increasing popularity of data science has resulted in numerous
              well-publicized cases of bias, injustice, and discrimination. The
              widespread deployment of “black box” is a primary source of these
              unanticipated harms, making modern techniques and methods for
              manipulating large data sets seem sinister, even dangerous. To
              prevent these harms, data scientists everywhere must come to
              understand how the algorithms that they build and deploy may harm
              certain groups or be unfair.
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                className="btn btn-default"
                style={{ marginBottom: "1em" }}
                onClick={handleClick}
              >
                <img
                  src={email}
                  alt="email"
                  style={{
                    height: "1.6em",
                    marginRight: "10px",
                    verticalAlign: "middle",
                  }}
                />
                Enter the November Book Giveaway
              </button>
              <p>
                To enter, email the community organizer wtih your favorite
                data-related book recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
