export default function APItest() {
  function testApi() {
    console.log("fetching");
    fetch("/.netlify/functions/mailchimp", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Nico",
        lastName: "Bills",
        email: "happytestemail@gmail.com",
        product: "fundamentals-membership",
      }),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function testApi2() {
    console.log("fetching");
    fetch("/.netlify/functions/sendinblue", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Nico",
        lastName: "Bills",
        email: "happytestemail@gmail.com",
        product: "fundamentals-membership",
      }),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div
        className="home-layout"
        style={{
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn btn-accent" onClick={testApi}>
          Test Mailchimp
        </button>
        <div style={{ width: "20px" }}></div>
        <button className="btn btn-accent" onClick={testApi2}>
          Test Sendinblue
        </button>
      </div>
    </>
  );
}
