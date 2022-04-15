import Card from "../../components/Card.js";
import team from "../../data/team";

export default function Team() {
  return (
    <>
      <div>
        {team.map((member) => (
          <>
            <Card person={member} />
            <br />
          </>
        ))}
        <br />
      </div>
    </>
  );
}
