// import Divider from "@material-ui/core/Divider";

import Card from "../../components/Card.js";

import journeys from "../../data/journeys.js";

export default function Journeys() {
  return (
    <>
      <div
        className="teal-box homepage"
        style={{
          padding: "20px 40px 20px 40px",
          margin: "auto",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3em",
              marginTop: "12px",
            }}
          >
            <strong>Data Strategy Journeys</strong>
          </p>
        </div>
        <br />
        {journeys.map((journey) => (
          <>
            <Card key={journey.id} person={journey} color="#dee8e9" />
            <br />
            <br />
          </>
        ))}
      </div>
      <br />
      <br />
    </>
  );
}
