const books = [
  {
    title: "Data Governance",
    author: "John Ladley",
    link: "https://amzn.to/3bAeliU",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51vvw41zw3L._SX403_BO1,204,203,200_.jpg",
    summary:
      "John Ladley is a leader in the Data Management field and within DAMA. If you're considering the Specialist exam on thistopic, then Data Governance is a must read. Several <a href='https://www.facebook.com/groups/346145433213551/' target='_blank'rel='noreferrer'>CDMP Study Group</a> members have reported that reading this book was key to their success on the associated Specialist Exam.<br/><br/>Given the expenses associated with growth, privacy, and security, organizations face new sources of risk associated with their data assets.  Data Governance represents the solution.  A strong Data Governance Charter will help an organization navigate the perilous border between risk and opportunity.<br/><br/>",
    topic: "Data Governance",
  },
  {
    title: "Navigating the Labyrinth",
    author: "Laura Sebastian-Coleman",
    link: "https://amzn.to/3vecyaY",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51EKm3obQSL._SX331_BO1,204,203,200_.jpg",
    summary:
      "<a href='https://www.facebook.com/groups/346145433213551/' target='_blank' rel='noreferrer'>CDMP Study Group</a> member Simon Hindle recommends reading this high-level summary in order to build a solid foundation in Data Strategy before tackling the specificity of the <a href='https://amzn.to/32oK8hH' target='_blank' rel='noreferrer'><em>DMBOK</em>.</a><br/><br/>Sebastian-Coleman translates DAMA's ideas, frameworks, and procedures into a business-friendly book that bridges the gap between technical subject matter experts and executive decision makers.  The book offers a fantastic overview of the overall goals of Data Management, the terminology, and how to implement Data Strategy at a high level.<br/><br/>",
    topic: "Data Governance",
  },
  {
    title: "Data Literacy",
    author: "Peter Aiken",
    link: "https://amzn.to/3enrcFC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51wp+95tnbL._SY344_BO1,204,203,200_.jpg",
    summary:
      "Written by the <a href='https://dama.silkstart.com/team' target='_blank' rel='noreferrer'>current president</a> of DAMA, this book is bound to have relevance to what's tested on CDMP exams now and in the future. Aiken offers a roadmap for expanding data literacy across everyone who has access to the internet.  The book offers a thorough guide on expanding your personal data literacy and helping your organization become more data driven.<br/><br/>",
    topic: "Metadata",
  },
  {
    title: "Measuring Data Quality for Ongoing Improvement",
    author: "Laura Sebastian-Coleman",
    link: "https://amzn.to/2NskNPF",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51E7++V2lsL._SX406_BO1,204,203,200_.jpg",
    summary:
      "Another great read from Laura Sebastian-Coleman, who truly has her finger on the pulse of Data Management best practices. As a leading expert in the field of Data Management, Sebastian-Coleman offers guidance on how to monitor and maximize Data Quality over time.  She begins with standard measurement concepts and moves toward a detailed framework of different measurement techniques across the dimensions of Data Quality. Rather than single-instance activities, the organization's goal should be to promote ongoing measurement in order to reach the next level of Data Quality.<br/><br/>",
    topic: "Data Quality",
  },
  {
    title:
      "Executing Data Quality Projects: Ten Steps to Quality Data and Trusted Information",
    author: "Danette McGilvray",
    link: "https://amzn.to/38Qxr2i",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/513tw6nqDgL._SX381_BO1,204,203,200_.jpg",
    summary:
      "The Ten Steps approach specified in this book includes examples, several templates, and practical advice for execution.  Furthermore, readers are guided on how to choose the best action to take next to address their organization’s unique situations. This book has been recommended time and time again to support Data Quality initiatives.<br/><br/>",
    topic: "Data Quality",
  },
  {
    title: "Mastering your Data",
    author: "Andy Graham",
    link: "https://amzn.to/3Ex0XHy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41+vMVW1b6L._SY344_BO1,204,203,200_.jpg",
    summary:
      "This book, and the following, comes recommended by <a href='https://www.facebook.com/groups/346145433213551/' target='_blank' rel='noreferrer'>CDMP Study Group</a> member Mayukh Datta Roy, who used it to ace the Specialist exam on this topic.  Another reviewer called Andy Graham 'the Plato of Data Architecture.' It's certain that this book offers a wise perspective based on real project experience in MDM.<br/><br/>The book begins with a basic review of why MDM is necessary and a discussion of its origins.  The concept of the “golden record” is core to Graham’s treatise on Master Data.  Readers will receive a solid education on this concept, particularly how to identify the data sources that comprise the golden record. Finally, the book examines the business drivers and foundations of the business case.<br/><br/>",
    topic: "Master & Reference Data Management",
  },
  {
    title:
      "Agile Database Techniques: Effective Strategies for the Agile Software Developer",
    author: "Scott Ambler",
    link: "https://amzn.to/32QP8if",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51+ciDz-aqL._SX396_BO1,204,203,200_.jpg",
    summary:
      "As agile development has come to the fore as a technology management best practice, this excellent book provides a guide for DBAs interested aligning their work with efficient strategies for rapid development. Ambler describes Agile Modeling Driven Design (AMDD) and Test-Driven Design (TDD) approaches, database refactoring, database encapsulation strategies, and tools that support evolutionary techniques.<br/><br/>",
    topic: "Data Modelling & Design",
  },

  {
    title: "Data Resource Design: Reality Beyond Illusion.",
    author: "Michael H. Brackett",
    link: "https://amzn.to/3eIrbvX",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41m7U31nIcL._SX348_BO1,204,203,200_.jpg",
    summary:
      "Brackett, a veteran Data Architect and recipient of DAMA's Lifetime Achievement Award, wrote this book that will definitely help you produce high quality data resources.  After 50 years in the Data Management field, Brackett retired from working as the Data Resource Coordinator for the state government of Washington.<br/><br/>His  book provides information on how to formally design an organization's data system to meet current and future demand.  While most public and private sector organizations do not consistently follow a formal data resource design process, from Conceptual to Logical to Physical Model, readers will avoid the potential downfalls associated with poor planning.<br/><br/>",
    topic: "Data Modelling & Design",
  },
  {
    title: "Master Data Management",
    author: "David Loshin",
    link: "https://amzn.to/3plztjz",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41GivYUGZaL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    summary:
      "If you're seeking a business-focused perspective on MDM, then this book is a must read. Loshin teaches us that the key to a successful MDM endeavor isn't technology or processes.  In fact, it’s people: the organizational stakeholders and their ownership of the data that will be affected by the MDM initiative. This book offers a very practical, business-focused approach to MDM.  Readers can expect to substantially improve their ability to engage with stakeholders and gain their support. Loshin offers specific guidelines for deciding which data to 'master.'  Moreover, a key feature of this book is the thorough roadmap that can be applied to any MDM project.<br/><br/>",
    topic: "Master & Reference Data Management",
  },
  {
    title: "Data Reverse Engineering: Slaying the Legacy Dragon",
    author: "Peter Aiken",
    link: "https://amzn.to/32QPc1t",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/31DSZKG0Q5L._BO1,204,203,200_.gif",
    summary:
      "A book that wastes no time in teaching you how to optimize information assets in the networked enterprise. The abundant graphics in this book help make things easier to understand.<br/><br/>Data reverse engineering (DRE) is a method for addressing a broad range of data disintegration issues.   It is focused on retrieving knowledge about an application from data and its schema.  This technique combines structured data analysis tools with stringent data control measures.<br/><br/>",
    topic: "Metadata",
  },
  {
    title: "Agile Data Warehouse Design",
    author: "Lawrence Corr & Jim Stagnitto",
    link: "https://amzn.to/3bP6zla",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51WV5QjDbwL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    summary:
      "A step-by-step guide for capturing requirements and utilizing them to create high performance dimensional models. <i>Agile Data Warehouse Design</i> refers to the method transforming DW & BI into high performance data systems through 'modelstorming,' a portmanteau of data modeling and brainstorming.  Modelstorming should take place with business stakeholders, which include technical and nontechnical members of the organization.  This approach is consistently quicker, more inclusive, more productive, and frankly more fun than your standard Data Warehouse setup process.<br/><br/>",
    topic: "Data Warehousing & Business Intelligence",
  },
  {
    title:
      "Data Mining Explained: A Manager's Guide to Customer Centric Business Intelligence",
    author: "Rhonda Delmater and Monte Hancock Jr.",
    link: "https://amzn.to/3s3OoOi",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51+CTgnMAsL._SX375_BO1,204,203,200_.jpg",
    summary:
      "Authors Rhonda Delmater and Monte Hancock Jr. describe how data mining drives next generation customer relationship strategies. This book explains technical concepts in a way that makes them easy for today's technology leaders to understand. It's a must-have for any business that aims to use data mining to drive customer-centric Business Intelligence.<br/><br/>",
    topic: "Data Warehousing & Business Intelligence",
  },
  {
    title:
      "Managing Data in Motion: Data Integration Best Practice Techniques and Technologies",
    author: "April Reeve",
    link: "https://amzn.to/3ejKifK",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41TJcmq+oPL._SX258_BO1,204,203,200_.jpg",
    summary:
      "This book's author is the primary contributor to the <a href='https://amzn.to/32oK8hH' target='_blank' rel='noreferrer'><em>DMBOK</em></a> on the topic of Data Integration & Interoperability, and she's also a VP on the <a href='https://dama.silkstart.com/team' target='_blank' rel='noreferrer'>DAMA leadership team</a>. If this topic is of interest to you, you won't want to miss her writing on this important subject. Leveraging over two decades of expertise, Reeve puts forward a vendor-neutral strategy for transporting data between computational environments and data systems. Readers will learn approaches for significantly decreasing the complexity of managing system interfaces and promoting scalable designs.<br/><br/>",
    topic: "Data Integration & Interoperability",
  },
  {
    title:
      "Data as a Service: A Framework for Providing Reusable Enterprise Data Services",
    author: "Pushpak Sarkar",
    link: "https://amzn.to/3yU9uTE",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51l0IuQefvL._SX333_BO1,204,203,200_.jpg",
    summary:
      "As part of a data-centric organization, you need to be able to deliver data services that are easy to use, reliable, and scalable.  That's where this guide comes in.  Pushpak Sarkar outlines how state-of-the-art principles can be used to acquire and distribute data across heterogeneous platforms.<br/><br/>",
    topic: "Data Integration & Interoperability",
  },
];

export default books;
