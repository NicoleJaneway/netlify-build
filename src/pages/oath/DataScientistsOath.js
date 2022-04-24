import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function DataPractitionersOath() {
  const [name, setName] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [url, setUrl] = useState("");

  const date = new Date();
  const formattedDate = format(date, "EEEE, MMMM d, yyyy");
  const year = format(date, "yyyy");
  const month = format(date, "M");
  const urlDate = formattedDate
    .replaceAll(" ", "%20")
    .replaceAll(",", "%252C%2520");

  useEffect(() => {
    setUrl(
      `https://res.cloudinary.com/data-strategy-pros/image/upload/l_text:montserrat_60:${urlInput},co_white,y_-28/l_text:montserrat_24:${urlDate},co_white,y_155/v1635190701/Oath_oiuhwx.pdf`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlInput, url]);

  function handleSubmit(e) {
    e.preventDefault();
    setUrlInput(name);
  }

  function handleViewClick() {
    window.open(url, "_blank");
  }

  function handleLinkedInClick() {
    const LinkedInUrl = `https://www.linkedin.com/profile/add?startTask=Data%20Scientist's%20Oath&name=Data%20Scientist's%20Oath&&organizationId=76608014&issueYear=${year}&issueMonth=${month}&certUrl=https://res.cloudinary.com/data-strategy-pros/image/upload/l_text:montserrat_60:${urlInput.replaceAll(
      " ",
      ""
    )},co_white,y_-28/l_text:montserrat_24:${format(
      date,
      "MMddyy"
    )},co_white,y_155/v1635190701/Oath_oiuhwx.pdf`;
    window.open(LinkedInUrl, "_blank");
  }

  return (
    <>
      <div className="oath">
        <p>
          As a practicing Data Scientist, I pledge to fulfill, to the best of my
          ability, this oath:
        </p>

        <div style={{ paddingLeft: "2vw" }}>
          <p>
            I will remember that consistency, candor, and compassion should
            outweigh the performance of a data science algorithm. I will
            remember that my work may lead to unintended societal consequences,
            such as inequality, poverty, and other disparities, through
            algorithmic bias. I will always look for a path to fair treatment
            and nondiscrimination.
          </p>
          <p>
            I will evaluate models thoroughly using a comparison to baseline,
            more than one performance metric, and assessment of per-group
            performance metrics. I will avoid goal-posting (i.e., chasing
            improvement in a single metric).
          </p>
          <p>
            I acknowledge that the practice of Data Science requires more than
            just technical expertise. I will integrate subject matter experts
            into the process of my work. I will solicit perspectives on how a
            given model could have unintended consequences. I will coordinate on
            plans to mitigate these consequences.
          </p>
          <p>
            I will aim for my work to be reproducible. To this end, I will
            thoroughly document all inputs and processes in my work. If
            possible, I will share my code, results, and testing practices such
            that others can easily evaluate them.
          </p>
          <p>
            I recognize that a model needs to be continuously monitored. Quality
            of data input and model output must be evaluated at regular
            intervals over the life of the model in order to detect deviations
            from predetermined standards, combat model drift, and identify
            unexpectedly harmful predictions.
          </p>
          <p>
            I will work to provide some channel of recourse for data subjects
            impacted by a model.
          </p>
        </div>
        <p>
          If I do not violate this oath, may I enjoy vitality and virtuosity,
          gain respect for my contributions, and be remembered for my
          leadership. May I always act to preserve the highest standards in the
          field, and may I long experience the joy of helping those who can
          benefit from my work.
        </p>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Please enter your full name as you would like it to appear on your
          certificate:{" "}
        </label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" style={{ margin: "4px 10px 4px 10px" }} />
      </form>
      <br />
      {urlInput !== "" && (
        <>
          <br />
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              border: "5px solid #f9f9f9",
              background: "none",
              width: "45vw",
              margin: "auto",
            }}
          >
            <p style={{ marginBottom: "8px" }}>
              {name.split(" ")[0] + ", your certificate has been generated"}
            </p>
            <div className="buttons" style={{ justifyContent: "center" }}>
              <button className="btn btn-default" onClick={handleViewClick}>
                View your certificate
              </button>
              <button className="btn btn-accent" onClick={handleLinkedInClick}>
                Add to LinkedIn
              </button>
            </div>
          </div>
          <br />
        </>
      )}
    </>
  );
}
