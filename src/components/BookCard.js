export default function BookCard({ bookObj }) {
  return (
    <div className="card about-card" style={{ maxWidth: "1000px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
      >
        <a href={bookObj.link} target="_blank" rel="noreferrer">
          <img
            src={bookObj.image}
            alt={bookObj.title}
            style={{
              margin: "0",
              padding: "10px",
              maxWidth: "215px",
              minWidth: "195px",
            }}
          />
        </a>
      </div>
      <div className="card-content" style={{ paddingBottom: "0px" }}>
        <p className="title card-title" style={{ marginBottom: "0" }}>
          <a href={bookObj.link} target="_blank" rel="noreferrer">
            <em>{bookObj.title}</em>
          </a>{" "}
          by {bookObj.author}
        </p>
        <div className="content" style={{ marginBottom: "12px" }}>
          <br />
          <p
            dangerouslySetInnerHTML={{
              __html: bookObj.summary,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
