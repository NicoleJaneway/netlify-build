const fs = require("fs").promises;

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_TEST_KEY),
  headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };

exports.handler = async function (event, context) {
  let payments = await fs.readFile("./src/data/payments.json");
  payments = JSON.parse(payments);
  const data = JSON.parse(event.body);
  const product = payments.find((payment) => payment.name === data.payment);

  try {
    const intent = await stripe.paymentIntents.create({
      // Price should be calculated on server
      // to prevent customer from manipulating price
      amount: product.price,
      currency: "usd",
      payment_method_types: ["card"],
    });
    console.log("Client Secret:", intent.client_secret);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ client_secret: intent.client_secret }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
