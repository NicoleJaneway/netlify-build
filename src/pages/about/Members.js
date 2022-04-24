import MemberCard from "../../components/MemberCard.js";
import members from "../../data/members";

import { Link } from "react-router-dom";

export default function Team() {
  console.log(members[0].date);

  return (
    <>
      <div>
        <p>
          Data Strategy Professionals Foundation and Specialist Members receive
          access to products to help them ace the{" "}
          <Link to="/resources/cdmp">CDMP Exam</Link>, such as{" "}
          <Link to="/products/career-coaching">Career Coaching</Link>,{" "}
          <Link to="/products/resume-review">Resume Review</Link>, and exclusive
          access to <strong>members only events</strong>.{" "}
          <Link to="/products/membership">Learn more.</Link>
          <br />
          <br />
        </p>
        {members.map((member) => (
          <>
            <MemberCard person={member} /> <br />
          </>
        ))}
      </div>
    </>
  );
}
