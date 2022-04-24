import li from "../img/icons/color-linkedin-128.png";

export default function MemberCard({ person, color }) {
  return (
    <div
      className="card about-card"
      style={{ boxShadow: "none", background: color }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
      >
        <img
          src={person.img}
          alt={person.name}
          style={{
            borderRadius: "50%",
            margin: "0",
            padding: "10px",
            maxWidth: "215px",
            maxHeight: "215px",
            minWidth: "195px",
            minHeight: "195px",
          }}
        />
      </div>
      <div className="card-content">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="title card-title" style={{ marginBottom: "0" }}>
            {person.name}
          </p>
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noreferrer noopener">
              <img
                src={li}
                alt="linkedin"
                style={{
                  height: "1.25em",
                  width: "1.25em",
                  marginLeft: "1em",
                  marginTop: "-0.5em",
                }}
              />
            </a>
          )}
        </div>
        <p style={{ fontSize: "0.95em" }}>
          <em>{person.title}</em>
        </p>
        <div className="content">
          <br />
          <p
            dangerouslySetInnerHTML={{
              __html: person.content,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
