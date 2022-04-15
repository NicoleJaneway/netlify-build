import Card from "../components/Card";
import team from "../data/team";

export default function CareerCoach() {
  return (
    <div className="white-box" style={{ background: "#f9f9f9" }}>
      <p
        style={{
          fontSize: "1.2em",
          marginBottom: ".5em",
          fontWeight: "600",
        }}
      >
        Meet our Career Coaches
      </p>
      <Card person={team.find((person) => person.id === "Victoria")} />
      <br />
      <Card person={team.find((person) => person.id === "Michael")} />
    </div>
  );
}
