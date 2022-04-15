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
    const LinkedInUrl = `https://www.linkedin.com/profile/add?startTask=DataPractitioner'sOath&name=Data%20Practitioner's%20Oath&&organizationId=76608014&issueYear=${year}&issueMonth=${month}&certUrl=https://res.cloudinary.com/data-strategy-pros/image/upload/l_text:montserrat_60:${urlInput.replaceAll(
      " ",
      ""
    )},co_white,y_-28/l_text:montserrat_24:${format(
      date,
      "MMddyy"
    )},co_white,y_155/v1635190701/Oath_oiuhwx.pdf`;
    window.open(LinkedInUrl, "_blank");
  }

  // TO DO:
  // -  Contribute on GitHub button

  return (
    <>
      <div className="oath">
        <p>
          As a practitioner working in a data-related role, I pledge to fulfill,
          to the best of my ability, this oath:
        </p>

        <div style={{ paddingLeft: "2vw" }}>
          <p>
            I will work for the benefit of society and will avoid
            misrepresentations of data and analysis results.
          </p>

          <p>
            I will ascertain that, where applicable, data was gathered with
            informed consent of the data subject.
          </p>

          <p>
            I will ensure, to the best of my ability, that data is collected,
            processed, and used in a manner that is consistent with the rights
            of the data subject.
          </p>

          <p>
            I will respect the privacy of individuals and entities represented
            in a dataset. I will tread with care in securing the privacy of
            data.
          </p>

          <p>
            I will remember that the data I work with is not without meaning or
            context, but represents real people and situations.
          </p>

          <p>
            I will consider the potential consequences of extracting meaning
            from data and ensure my analyses help make better decisions on
            behalf of those represented.
          </p>

          <p>
            I will not be ashamed to say “I do not know.” I will call in the
            expertise of my colleagues as needed.
          </p>

          <p>
            I will empower colleagues of any level to express their suggestion,
            reservations, and concerns about my work.
          </p>

          <p>
            I will respect the work of those who have come before me and gladly
            share my knowledge with those who follow.
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
