import mailchimp from "@mailchimp/mailchimp_marketing";
require("dotenv").config();
const fs = require("fs").promises;

const LIST_ID = process.env.MAILCHIMP_LIST_ID;

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us8",
});

const crypto = require("crypto");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event, context) {
  let payments = await fs.readFile("./src/data/payments.json");
  payments = JSON.parse(payments);
  const data = JSON.parse(event.body);
  const product = payments.find((payment) => payment.name === data.product);

  console.log(product);

  // const id = crypto
  //   .createHash("md5")
  //   .update(data.email.toLowerCase())
  //   .digest("hex");

  // const mergeFields = {
  //   EMAIL: data.email,
  //   FNAME: data.firstName,
  //   LNAME: data.lastName,
  // };
  // try {
  //   mc.lists
  //     .getListMember(LIST_ID, id)
  //     .then(function (data) {
  //       console.log("Existing subscriber.");
  //       // Update subscriber with new tag
  //       mc.lists.setListMember(LIST_ID, id, {
  //         email_address: data.email,
  //         status: "subscribed",
  //         tags: [product.name],
  //         merge_fields: mergeFields,
  //       });
  //       return {
  //         statusCode: 400,
  //         headers,
  //         body: JSON.stringify({ response: "Updating existing customer" }),
  //       };
  //     })
  //     .catch(function (err) {
  //       console.log("Adding", data.email);
  //       mc.lists.addListMember(LIST_ID, {
  //         email_address: data.email,
  //         status: "subscribed",
  //         status_if_new: "subscribed",
  //         merge_fields: mergeFields,
  //         tags: [product.name],
  //       });
  //       return {
  //         statusCode: 400,
  //         headers,
  //         body: JSON.stringify({ response: "Adding new customer" }),
  //       };
  //     });
  // } catch (err) {
  //   console.log(err);
  //   return {
  //     statusCode: 400,
  //     headers,
  //     body: JSON.stringify({ error: err.message }),
  //   };
  // } finally {
  //   return {
  //     statusCode: 400,
  //     headers,
  //     body: JSON.stringify({ response: "something happened" }),
  //   };
  // }
};
