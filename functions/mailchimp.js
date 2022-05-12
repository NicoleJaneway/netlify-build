const mc = require("@mailchimp/mailchimp_marketing");
require("dotenv").config();
const fs = require("fs").promises;

const LIST_ID = process.env.MAILCHIMP_LIST_ID;

mc.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us8",
});

const crypto = require("crypto");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event, context) {
  let contactObj = { statusCode: 200, headers, response: "something happened" };
  try {
    let payments = await fs.readFile("./src/data/payments.json");
    payments = JSON.parse(payments);
    const data = JSON.parse(event.body);
    const product = payments.find((payment) => payment.name === data.product);

    const id = crypto
      .createHash("md5")
      .update(data.email.toLowerCase())
      .digest("hex");

    const mergeFields = {
      EMAIL: data.email,
      FNAME: data.firstName,
      LNAME: data.lastName,
    };

    mc.lists
      .getListMember(LIST_ID, id)
      .then(function (data) {
        console.log("Existing subscriber.");
        // Update subscriber with new tag
        mc.lists.setListMember(LIST_ID, id, {
          email_address: data.email,
          status: "subscribed",
          tags: [product.name],
          merge_fields: mergeFields,
        });
        contactObj.response = "Updated subscriber: " + data.email;
        return contactObj;
      })
      .catch(function (err) {
        console.log("Adding", data.email);
        mc.lists.addListMember(LIST_ID, {
          email_address: data.email,
          status: "subscribed",
          status_if_new: "subscribed",
          merge_fields: mergeFields,
          tags: [product.name],
        });
        contactObj.response = "Updated subscriber: " + data.email;
        return contactObj;
      })
      .catch(function (err) {
        console.log("Error:", err);
        contactObj.statusCode = err.status;
        contactObj.response = err.error;
        return contactObj;
      });
  } catch (err) {
    console.log(err);
    contactObj.statusCode = 400;
    contactObj.response = JSON.stringify({ error: err.message });
    return contactObj;
  }
};
