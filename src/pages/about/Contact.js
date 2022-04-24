import email from "../../img/icons/color-forwardtofriend-128.png";

export default function Contact() {
  return (
    <>
      <div>
        <p className="title" style={{ fontSize: "1.2em" }}>
          Contact
        </p>

        <div className="buttons">
          <a href="mailto:info@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
            <img
              src={email}
              alt="email"
              style={{ width: "32px", height: "32px", marginRight: "10px" }}
            />
          </a>
          <p>
            Need <strong>help</strong> with something or have a{" "}
            <strong>question</strong> about one of our products? Send an email
            to{" "}
            <a href="mailto:support@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
              Customer Support
            </a>
          </p>
        </div>
        <div className="buttons">
          <a href="mailto:nicolejaneway@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
            <img
              src={email}
              alt="email"
              style={{ width: "32px", height: "32px", marginRight: "10px" }}
            />
          </a>
          <p>
            Want to get in touch about <strong>something else</strong>, such as
            a product idea or affiliate partnership? Send an email to our{" "}
            <a href="mailto:affiliates@datastrategypros.com?subject=Data%20Strategy%20Pros%20Inquiry">
              Partnerships Team
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
