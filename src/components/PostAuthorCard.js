import Bills from "../img/team/Bills.jpg";

export default function PostAuthorCard() {
  return (
    <div className="card about-card" style={{ maxWidth: "1000px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
      >
        <img
          src={Bills}
          alt="Nicole"
          style={{
            borderRadius: "50%",
            margin: "0",
            padding: "10px",
            maxWidth: "215px",
          }}
        />
      </div>
      <div className="card-content">
        <p className="title card-title" style={{ marginBottom: "0" }}>
          Nicole Janeway Bills
        </p>
        <p style={{ fontSize: "0.95em" }}>
          <em>Data Strategy Professionals Community Organizer</em>
        </p>
        <div className="content">
          <br />
          Nicole offers a proven track record of applying Data Strategy and
          related disciplines to solve clients’ most pressing challenges. She
          has worked as a Data Scientist and Project Manager for federal and
          commercial consulting teams. Her business experience includes natural
          language processing, cloud computing, statistical testing, pricing
          analysis, ETL processes, and web and application development.
          <br></br>
        </div>
      </div>
    </div>
  );
}
