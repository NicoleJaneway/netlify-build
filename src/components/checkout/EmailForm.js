import validator from "validator";

export default function EmailForm({ setEmail, setValidEmail }) {
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setValidEmail(true);
      setEmail(email);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={"userEmail"}>
        <p style={{ fontSize: "13px", color: "rgb(48, 49, 61)" }}>
          <strong>Email</strong>
        </p>
      </label>
      <input
        type="text"
        id="userEmail"
        onBlur={(e) => validateEmail(e)}
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
      {/* <TextField
        id="userEmail"
        variant="outlined"
        sx={{
          width: "380px",
          height: "44.4px",
          background: "white",
        }}
        defaultValue="first"
      /> */}

      <br />
    </div>
  );
}
