export default function NameForm({ setFirstName, setLastName }) {
  return (
    <div className="name-form">
      <div style={{ marginRight: "12px", marginBottom: "6px" }}>
        <label htmlFor={"firstName"}>
          <p style={{ fontSize: "13px", color: "rgb(48, 49, 61)" }}>
            <strong>First Name</strong>
          </p>
        </label>
        <input
          type="text"
          id="firstName"
          onBlur={(e) => setFirstName(e.target.value)}
          className="field"
          style={{
            height: "44.4px",
            padding: "12px",
            background: "white",
            fontSize: "16px",
            fontweight: "400",
            lineHeight: "18.4px",
          }}
        ></input>
      </div>
      <div>
        <label htmlFor={"lastName"}>
          <p style={{ fontSize: "13px", color: "rgb(48, 49, 61)" }}>
            <strong>Last Name</strong>
          </p>
        </label>
        <input
          type="text"
          id="lastName"
          onBlur={(e) => setLastName(e.target.value)}
          className="field"
          style={{
            height: "44.4px",
            padding: "12px",
            background: "white",
            fontSize: "16px",
            fontweight: "400",
            lineHeight: "18.4px",
          }}
        ></input>
        <br />
      </div>
    </div>
  );
}
