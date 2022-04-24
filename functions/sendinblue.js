require("dotenv").config();
const fs = require("fs").promises;
const SibApiV3Sdk = require("sib-api-v3-sdk");

var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE;
var apiInstance = new SibApiV3Sdk.ContactsApi();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

/* FIX error handling */

export async function handler(event, context) {
  let contactObj = { statusCode: 200, headers, response: "something happened" };
  try {
    const data = JSON.parse(event.body);
    const attributes = {
      FIRSTNAME: data.firstName,
      LASTNAME: data.lastName,
    };

    let payments = await fs.readFile("./src/data/payments.json");
    payments = JSON.parse(payments);
    const product = payments.find((payment) => payment.name === data.product);
    const listId = parseInt(product.list);

    const contacts = [];

    /* Get all contacts */
    const existingContact = await apiInstance
      .getContacts()
      .then(function (output) {
        const stringified = JSON.stringify(output);
        const parsed = JSON.parse(stringified);
        parsed.contacts.forEach((contact) => {
          contacts.push(contact.email);
        });
        console.log("ping");

        return contacts.includes(data.email);
      });

    /* Check if contact is in list */
    if (existingContact) {
      console.log("Existing contact: ", data.email);

      var contactEmails = new SibApiV3Sdk.AddContactToList();
      contactEmails.emails = [data.email];
      apiInstance.addContactToList(listId, contactEmails).then(
        function (output) {
          const message = "API called successfully. Returned data: " + output;
          console.log(message);
          contactObj.response = message;
          return contactObj;
        },
        function (error) {
          console.error(error);
          contactObj.statusCode = error.status;
          contactObj.response = error.error;
          return contactObj;
        }
      );
    } else {
      console.log("Add new contact: ", data.email);
      var createContact = new SibApiV3Sdk.CreateContact();
      createContact.email = data.email;
      createContact.listIds = [listId];
      createContact.attributes = attributes;

      apiInstance.createContact(createContact).then(
        function (output) {
          output = JSON.stringify(output);
          const message = "API called successfully. Returned data: " + output;
          console.log(message);
          contactObj.response = message;
          return contactObj;
        },
        function (error) {
          console.log(error);
          contactObj.statusCode = error.status;
          contactObj.response = error.error;
          return contactObj;
        }
      );
    }
    return contactObj;
  } catch (error) {
    console.log(error);
    contactObj.statusCode = 400;
    contactObj.response = error;
    return contactObj;
  } finally {
    console.log("in finally block");
  }
}
