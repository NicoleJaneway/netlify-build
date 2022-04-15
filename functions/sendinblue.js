require("dotenv").config();
const fs = require("fs").promises;

var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE;
var apiInstance = new SibApiV3Sdk.ContactsApi();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event, context) {
  try {
    let payments = await fs.readFile("./src/data/payments.json");
    payments = JSON.parse(payments);
    const data = JSON.parse(event.body);
    const product = payments.find((payment) => payment.name === data.product);

    var createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = data.email;
    createContact.attributes = {
      FNAME: data.firstName,
      LNAME: data.lastName,
    };

    createContact.listIds = product.list;

    apiInstance.createContact(createContact).then(
      function (data) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ response: data }),
        };
      },
      function (err) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ Error: JSON.stringify(err) }),
        };
      }
    );
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  } finally {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ response: "something happened" }),
    };
  }
};
