import { useState } from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";

// import FadeLoader from "react-spinners/FadeLoader";

export default function FreebieForm({
  setFirstName,
  setLastName,
  setEmail,
  setShowSuccess,
}) {
  const [validEmail, setValidEmail] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <EmailForm setEmail={setEmail} setValidEmail={setValidEmail} />
        <NameForm setFirstName={setFirstName} setLastName={setLastName} />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontStyle: "italic", marginBottom: "1em" }}></p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-accent"
          type="submit"
          style={{
            width: "200px",
            padding: "10px 20px",
            margin: "4px 0",
          }}
          disabled={!validEmail}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
