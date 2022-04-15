import swimmer from "../img/swimmer.jpeg";
import mountain from "../img/mountain-man.jpeg";
import crossedArms from "../img/crossed-arms2.jpeg";
import milkyway from "../img/milky-way_cropped.jpg";
import coach from "../img/pushups.jpeg";

const posts = [
  {
    nickname: "cdmp",
    title: "The Best Data-Related Certification You’ve Never Heard Of",
    subtitle:
      "A practical guide to the most valuable training in Data Strategy.",
    image: { swimmer },
    link: "/resources/cdmp",
  },
  {
    nickname: "data-science",
    title: "An Introduction to Data Science for Technology Leaders",
    subtitle:
      "Leverage machine learning capabilities to fulfill your organization’s mission statement.",
    image: "https://miro.medium.com/max/2000/1*fZovDHtXZptukm5nIieivA.jpeg",
    link: "/resources/data-science-for-leaders",
  },
  {
    nickname: "data-strategy",
    title: "Foundations of Data Strategy",
    subtitle:
      "The size of the digital universe increased 3000% in the past decade. Fortunately, there are straightforward steps to effectively roll out a Data Management initiative.",
    image: { mountain },
    link: "/resources/foundations",
  },
  {
    nickname: "oath",
    title: "Are we ready for an Oath for Data Practitioners?",
    subtitle:
      "Just as we have best practices for setting up a database or creating a machine learning model, Data Practitioners should be bound to a set of rules when it comes to ethical conduct.",
    image: { crossedArms },
    link: "/resources/oath",
  },
  {
    nickname: "specialist",
    title: "Essential Guide to the CDMP Specialist Exams",
    subtitle:
      "Everything you need to know to attain the Practitioner and Master level certifications.",
    image: { milkyway },
    link: "/resources/specialist",
  },
  {
    nickname: "data-warehouse",
    title: "Comprehensive Guide to the Data Warehouse",
    subtitle:
      "Data analysis can’t start until the data cleaning process is complete. Learn about the role of the data warehouse as a repository of analysis-ready datasets.",
    image: "https://miro.medium.com/max/1400/0*aLkxYbRSp_z13uS6",
    link: "/resources/warehouse",
  },
  {
    nickname: "coaching",
    title: "What Coaching Can Do for Your Data-Related Career",
    subtitle:
      "Typically, we assume Career Coaching is most beneficial for someone changing careers. While that may be true, a Coach can catapult your career whether you're switching positions or looking to grow in your current role. Let's get clear about how to attain your dream job.",
    image: { coach },
    link: "/resources/career-coaching",
  },
];

export default posts;
