import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [motivation, setMotivation] = useState("");

  return (
    <>
      <form>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your name"
          id="firstName"
        />
        <br />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your name"
          id="lastName"
        />
        <br />
        <br />
        <br />
        <label htmlFor="type-select">Role:</label>
        <p> </p> <br />
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="type-select"
        >
          <option disabled>Choose a role</option>
          <option value="data analyst">Data Analyst</option>
          <option value="data engineer">Data Engineer</option>
          <option value="data scientist">Data Scientist</option>
          <option value="lead">Executive leadership role</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <br />
        <label htmlFor="entry">How you found us:</label>
        <br />
        <textarea
          name="motivation"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder=""
          id="motivation-entry"
        />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}
