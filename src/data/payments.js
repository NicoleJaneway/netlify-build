const payments = [
  {
    name: "test-product1",
    product: "TestProduct1",
    price: "50",
    type: "membership",
    mailchimpTag: "test-product1",
    description:
      "At this level, you'll receive access to the tools you need to ace the CDMP Fundamentals Exam and grow your Data Strategy career.",
  },
  {
    name: "test-product2",
    product: "TestProduct2",
    price: "50",
    type: "membership",
    mailchimpTag: "test-product2",
    description:
      "At this level, you'll receive access to the tools you need to ace the CDMP Specialist Exam and grow your Data Strategy career.",
  },
  {
    name: "fundamentals-membership",
    product: "Fundamentals Membership",
    price: "30000",
    type: "membership",
    mailchimpTag: "fundamentals-membership",
    description:
      "At this level, you'll receive access to the tools you need to ace the CDMP Fundamentals Exam and grow your Data Strategy career.",
    link: "https://forms.gle/sLUu3NV6GxUhqRmD6",
  },
  {
    name: "cdmp-study-plan-90-days",
    product: "Certified Data Management Professional Study Plan",
    price: "5900",
    type: "sendinblue",
    description:
      "Maximize your time, energy, and motivation to become a Data Strategist. Each week, you can expect 3-4 emails covering each of the 14 chapters tested on the exam.",
  },
  {
    name: "cdmp-study-plan-immediate-access",
    product: "Certified Data Management Professional Study Plan",
    price: "5900",
    type: "sendinblue",
    description:
      "Maximize your time, energy, and motivation to become a Data Strategist. You'll receive <strong>Immediate Access</strong> to the entire CDMP Study Plan via email.",
  },
  {
    name: "breaking-12-weeks",
    product: "Breaking into Data Science Email Bootcamp",
    price: "2900",
    type: "sendinblue",
    description:
      "Level up with 3-4 emails over 12 weeks providing the resources, articles, videos, and tutorials that will help you advance your Data Science career.",
  },
  {
    name: "breaking-immediate-access",
    product: "Breaking into Data Science Email Bootcamp",
    price: "2900",
    type: "sendinblue",
    description:
      "Level up with 3-4 emails over 12 weeks providing the resources, articles, videos, and tutorials that will help you advance your Data Science career.",
  },
  {
    name: "breaking-free-trial",
    product: "Breaking into Data Science Email Bootcamp",
    price: "0000",
    type: "sendinblue",
    description:
      "Check out the Data Science Email Bootcamp with this <strong>seven day free trial</strong> that provides the resources, articles, videos, and tutorials that will help you advance your Data Science career.",
  },
  {
    name: "cdmp-fundamentals-notes-digital",
    product: "CDMP Fundamentals Notes",
    file: "CDMP-Fundamentals-Notes",
    price: "3500",
    type: "download",
    mailchimpTag: "",
    description:
      "Fast-track your preparation for CDMP exams with the CDMP Fundamentals Notes. This <strong>30+ page</strong> document covers the 14 chapters of the <em>DMBOK</em> covered on the exam",
  },
  {
    name: "cdmp-fundamentals-notes-hardcopy",
    product: "CDMP Fundamentals Notes",
    price: "5000",
    type: "physical",
    mailchimpTag: "",
    description:
      "Fast-track your preparation for CDMP exams with the CDMP Fundamentals Notes. This <strong>30+ page</strong> document will be mailed to you.  <em>US customers only</em>.",
  },
  {
    name: "question-set-1",
    product: "CDMP Exam Question Sets",
    file: "CDMP-Question-Set-1",
    price: "1800",
    type: "download",
    mailchimpTag: "",
    description:
      "Thank you for your purchase of <strong>CDMP Question Set #1</strong>.",
  },
  {
    name: "question-set-2",
    product: "CDMP Exam Question Sets",
    file: "CDMP-Question-Set-2",
    price: "1800",
    type: "download",
    mailchimpTag: "",
    description:
      "Thank you for your purchase of <strong>CDMP Question Set #2</strong>.",
  },
  {
    name: "question-set-3",
    product: "CDMP Exam Question Sets",
    file: "CDMP-Question-Set-3",
    price: "1800",
    type: "download",
    mailchimpTag: "",
    description:
      "Thank you for your purchase of <strong>CDMP Question Set #3</strong>.",
  },
  {
    name: "specialist-membership",
    product: "Specialist Membership",
    price: "30000",
    type: "membership",
    mailchimpTag: "specialist-membership",
    description:
      "At this level, you'll receive access to the tools you need to ace the two Specialist Exams of your choosing and attain the Practitioner or Master level certification.",
    link: "https://forms.gle/X2youF8tzLaZaut38",
  },
  {
    name: "dg-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dq-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dm&d-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "m-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "m&rd-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "di&i-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dw&bi-guide",
    product: "Specialist Exam Guides",
    price: "2500",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dg-questions",
    product: "Specialist Exam Question Sets",
    price: "1200",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dq-questions",
    product: "Specialist Exam Question Sets",
    price: "600",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dm&d-questions",
    product: "Specialist Exam Question Sets",
    price: "1200",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "m-questions",
    product: "Specialist Exam Question Sets",
    price: "800",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "m&rd-questions",
    product: "Specialist Exam Question Sets",
    price: "600",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "di&i-questions",
    product: "Specialist Exam Question Sets",
    price: "800",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "dw&bi-questions",
    product: "Specialist Exam Question Sets",
    price: "600",
    type: "download",
    mailchimpTag: "",
  },
  {
    name: "resume-review",
    product: "Resume Review",
    price: "8500",
    type: "service",
    description:
      "Our Career Coach will review your <strong>resume</strong> and <strong>LinkedIn profile</strong> to provide you with the best advice for the next step in your career journey.",
    mailchimpTag: "",
  },
  {
    name: "poster",
    product: "Data Strategy Poster",
    price: "2500",
    type: "physical",
    description:
      "This <strong>24 x 36 inch poster</strong> covers the focus areas of Data Governance, Data Quality, Data Architecture & Modeling, Master & Reference Data, and Data Warehousing & Business Intelligence.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-light-gray-small",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>light gray</strong> Data Strategist t-shirt in size <strong>small</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-light-gray-medium",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>light gray</strong> Data Strategist t-shirt in size <strong>medium</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-light-gray-large",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>light gray</strong> Data Strategist t-shirt in size <strong>large</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-light-gray-xlarge",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>light gray</strong> Data Strategist t-shirt in size <strong>x-large</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-light-gray-xxlarge",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>light gray</strong> Data Strategist t-shirt in size <strong>xx-large</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-dark-gray-small",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>dark gray</strong> Data Strategist t-shirt in size <strong>small</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-dark-gray-medium",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>dark gray</strong> Data Strategist t-shirt in size <strong>medium</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-dark-gray-large",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>dark gray</strong> Data Strategist t-shirt in size <strong>large</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-dark-gray-xlarge",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>dark gray</strong> Data Strategist t-shirt in size <strong>x-large</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "tshirt-dark-gray-xxlarge",
    product: "Data Strategist T-Shirt",
    price: "2500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>dark gray</strong> Data Strategist t-shirt in size <strong>xx-large</strong>.  Your t-shirt will highlight your status as a data practitioner and help build community.",
    mailchimpTag: "",
  },
  {
    name: "mug-11",
    product: "Data Strategist Mug",
    price: "1300",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>11 oz</strong> Data Strategist mug.  Enjoy your favorite hot bevarage and highlight your status as a data professional with this ceramic mug.",
    mailchimpTag: "",
  },
  {
    name: "mug-15",
    product: "Data Strategist Mug",
    price: "1500",
    type: "physical",
    description:
      "Thank you for your purchase of this <strong>15 oz</strong> Data Strategist mug.  Enjoy your favorite hot bevarage and highlight your status as a data professional with this ceramic mug.",
    mailchimpTag: "",
  },
];

export default payments;
