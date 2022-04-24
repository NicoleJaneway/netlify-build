import { Link } from "react-router-dom";

export default function OathDescription() {
  return (
    <p>
      As someone who works with data, you hold yourself to a high standard of
      ethics. At Data Strategy Professionals, we recognize this commitment with
      a formal oath. If desired, you can add this credential to LinkedIn.
      <br />
      <br />
      <Link to="/resources/oath">Read more</Link> about why we felt this oath
      was needed and how we drew inspiration from ethical commitments in other
      professions.
      <br />
      <br />
      We welcome you to submit edits to the{" "}
      <a
        href="https://github.com/DataStrategyPros/oath/blob/main/data-practitioner-oath"
        target="_blank"
        rel="noreferrer"
      >
        Data Practitioner's Oath
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/DataStrategyPros/oath/blob/main/data-scientist-oath"
        target="_blank"
        rel="noreferrer"
      >
        Data Scientist's Oath
      </a>{" "}
      on GitHub.
    </p>
  );
}
