import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";

// import FadeLoader from "react-spinners/FadeLoader";

export default function CheckoutForm({
  setFirstName,
  setLastName,
  setEmail,
  setShowSuccess,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(true);
  const [validEmail, setValidEmail] = useState(false);

  function handleOnReady() {
    setIsLoading(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      setShowSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLoading && (
        <div>
          <NameForm setFirstName={setFirstName} setLastName={setLastName} />
          <EmailForm setEmail={setEmail} setValidEmail={setValidEmail} />
        </div>
      )}
      <br />

      <PaymentElement onReady={handleOnReady} />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontStyle: "italic", marginBottom: "1em" }}></p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!isLoading && (
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
        )}
      </div>
    </form>
  );
}
