const fs = require("fs").promises;

require("dotenv").config();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event, context) {
  try {
    let payments = await fs.readFile("./src/data/payments.json");
    payments = JSON.parse(payments);
    const data = JSON.parse(event.body);
    const product = payments.find((payment) => payment.name === data.payment);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ price: product.price }),
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
