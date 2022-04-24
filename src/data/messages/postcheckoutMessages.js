const postcheckoutMessages = [
  {
    type: "membership",
    message:
      "Please{' '}<a href={payment.link} target='_blank' rel='noreferrer'>click here</a> to answer a questionnaire to receive your member benefits",
  },
  {
    type: "sendinblue",
    message:
      "You will receive your email course via the email address you provided in checkout.",
  },
  {
    type: "download",
    message:
      "You will receive your digital download via the email address you provided in checkout.",
  },
  {
    type: "physical",
    message: "You will receive your order in 10-14 days.",
  },
];

export default postcheckoutMessages;
