import Fleming from "../img/members/fleming.jpeg";
import Durham from "../img/members/durham.jpeg";
import Acton from "../img/members/acton.jpeg";

const members = [
  {
    id: "Gabe",
    img: Durham,
    name: "Gabriel Durham",
    title: "Fundamentals Member",
    content:
      "Gabe is passionate about mathematics and statistics, particularly in their use to create positive social utility. He works in the Social and Economic Policy Division at Abt Associates. Gabe hopes that attaining recognition as a Certified Data Management Professional will help him better serve his consulting clients.",
    date: new Date(2022, 4, 4),
    linkedin: "https://www.linkedin.com/in/gabriel-durham/",
  },
  {
    id: "Nic",
    img: Acton,
    name: "Nic Acton",
    title: "Fundamentals Member",
    content:
      "Nic works to deliver enterprise intelligence solutions and operational value through AI/ML, Data Science, DevOps, Infrastructure, and Agile/Lean Product Management. Nic believes that studying for the CDMP advances his goal of becoming a well-rounded technologist.",
    date: new Date(2022, 4, 4),
    linkedin: "https://www.linkedin.com/in/nicacton/",
  },
  {
    id: "Grant",
    img: Fleming,
    name: "Grant Fleming",
    title: "Fundamentals Member",
    content:
      "Grant has multiple years of experience implementing analytics projects for public and private sector clients in the domains of public health, human capital retention, inventory time series forecasting, survey analysis, and humanitarian aid evaluation alongside diversely skilled, international teams. He is the lead author of <a href='https://amzn.to/3ta00zC' target='_blank' rel='noreferrer'><i>Responsible Data Science</i></a> (Wiley, 2021), a practical guide for Data Scientists and Managers on the ethical implications of developing and deploying AI models. At Elder Research, Grant works on developing, designing, and implementing analytic solutions across industries and provides technical and strategic support on client projects.",
    date: new Date(2022, 3, 31),
    linkedin: "https://www.linkedin.com/in/grant-fleming-a1712a131/",
  },
];

export default members;
