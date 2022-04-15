import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import crossedArms from "../img/crossed-arms2.jpeg";
import swimmer from "../img/swimmer.jpeg";

import CDMPad from "../components/CDMPad";
import PostAuthorCard from "../components/PostAuthorCard";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "cdmp");

export default function CDMP() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  const handleShowClick = (event) => {
    setShowModal(!showModal);
    console.log(event.currentTarget);
    setImage(event.currentTarget.src);
    setAlt(event.currentTarget.alt);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {showModal && (
        <dialog open onClick={handleShowClick}>
          <figure>
            <img src={image} alt="" onClick={handleShowClick} />
            <figcaption style={{ margin: "0" }}>{alt}</figcaption>
          </figure>
        </dialog>
      )}
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com" + post.link}
        />
        <meta name="og:description" content={post.description} />
        <meta name="og:image" content={swimmer} />
        <meta name="og:image:alt" content="swimmer in infinity pool" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={swimmer} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title" style={{ marginBottom: "0.2em" }}>
          The Best Data-Related Certification You’ve Never Heard Of
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            A practical guide to the most valuable training in Data Strategy.
          </p>
          <figure>
            <img src={swimmer} alt="man swimming" className="box-shadow" />
            <figcaption>
              Swimming upstream to address data quality issues. Photo by{" "}
              <a
                href="https://www.pexels.com/photo/man-swimming-in-an-infinity-pool-4239547/"
                target="_blank"
                rel="noreferrer"
              >
                alleksana
              </a>{" "}
              on{" "}
              <a
                href="https://www.pexels.com/photo/man-swimming-in-an-infinity-pool-4239547/"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </figcaption>
          </figure>
          <p>
            In 2012, Data Science was{" "}
            <a
              href="https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century"
              target="_blank"
              rel="noreferrer"
            >
              proclaimed
            </a>{" "}
            “the sexiest job of the 21st century.” Yet plodding through hours of
            data munging still feels <strong>decidedly unsexy</strong>. If
            anything, the hype around data-related careers over the past decade
            has illustrated just how poorly most organizations are doing when it
            comes to{" "}
            <Link to="/resources/foundations" target="_blank">
              managing their data as a strategic asset
            </Link>
            .
          </p>
          <p>
            Enter the Certified Data Management Professional (
            <a href="https://cdmp.info/" target="_blank" rel="noreferrer">
              CDMP
            </a>
            ) exam from Data Management Association International (
            <a href="https://dama.org/" target="_blank" rel="noreferrer">
              DAMA
            </a>
            ). The CDMP is the best Data Strategy certification you’ve never
            heard of. (And honestly, when you consider the fact that you may be
            working a job that didn’t exist ten years ago, it’s not surprising
            that this certification isn’t widespread just yet.)
          </p>
          <p>
            Data Strategy is a crucial discipline that spans{" "}
            <strong>end-to-end management of the data lifecycle</strong> as well
            as associated aspects of{" "}
            <Link to="/resources/foundations" target="_blank">
              data governance
            </Link>{" "}
            and key considerations of{" "}
            <Link to="/oath" target="_blank">
              data ethics
            </Link>
            .
          </p>
          <p>
            This article outlines the <strong>hows and whys</strong> of gaining
            the valuable CDMP credential. Studying for the CDMP Fundamentals
            exam lays the groundwork for effective thought leadership in Data
            Strategy.
          </p>
          <p style={{ marginBottom: "0em" }}>In this guide:</p>
          <ol style={{ marginBottom: "3em" }}>
            <li>About the CDMP Exam</li>
            <li>What’s tested on the CDMP</li>
            <li>How to prepare for CDMP</li>
            <li>Why you should get CDMP certified</li>
          </ol>
        </div>
        <CDMPad />
        <div className="blog">
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            About the CDMP Fundamentals Exam
          </p>
          <p>
            Training for the{" "}
            <a href="https://cdmp.info/" target="_blank" rel="noreferrer">
              CDMP Fundamentals exam
            </a>{" "}
            confers expertise across 14 areas related to Data Strategy (which
            I’ll cover in more detail in the next section). The test is{" "}
            <strong>open book</strong>, but the <strong>100 questions</strong>{" "}
            on the exam must be completed within <strong>90 minutes</strong> —
            not a lot of time to be looking things up. Therefore, it’s important
            to be extremely familiar with the{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              reference material
            </a>
            .
          </p>
          <p>
            When you schedule the exam ($300), DAMA provides 40 practice
            questions that are pretty reflective of the difficulty of the actual
            exam. As a further resource, check out{" "}
            <a
              href="https://nicolejaneway.medium.com/how-to-ace-the-aws-cloud-practitioner-certification-with-minimal-effort-39f10f43146"
              target="_blank"
              rel="noreferrer"
            >
              this article
            </a>{" "}
            about the process of studying for a certification with the objective
            of long term learning retention.
          </p>
          <p>
            It’s possible to sit for the exam online while monitored via webcam
            ($11 proctoring fee). The format is{" "}
            <strong>
              multiple choice — choose the single correct option out of five
            </strong>
            . You can mark questions and come back to them. At the conclusion of
            the test, you get immediate feedback on your score.
          </p>
          <p>
            <strong>Anything over 60% is considered passing</strong>. This is
            just fine if you’re interested in getting your CDMP Associate
            certification and moving along. If you’re interested in the advanced
            tiers of CDMP certification, you’ll have to pass with a 70% (CDMP
            Practitioner) or 80% (CDMP Master). To get certified at the highest
            level, CDMP Fellow, you’ll need to attain the Master Certification
            and also demonstrate industry experience and contribution to the
            field. Each of these{" "}
            <strong>
              advanced certifications also require passing two{" "}
              <Link to="/resources/specialist">Specialist Exams</Link>
            </strong>
            .
          </p>
          <figure>
            <img
              src="https://miro.medium.com/max/2000/1*coav2xHaloJAtZ_MOoDa2Q.png"
              alt="CDMP certification levels"
              onClick={handleShowClick}
            />
            <figcaption>
              via{" "}
              <a
                href="https://cdmp.info/about/"
                target="_blank"
                rel="noreferrer"
              >
                CDMP
              </a>
            </figcaption>
          </figure>
          <p>
            This brings me to my final point, which is about why — purely from a{" "}
            <strong>career advancement</strong> standpoint — you should chose to
            put yourself through the studying and exam-taking process for CDMP:
            certification from DAMA is associated with{" "}
            <strong>high-end positions</strong> in leadership, management, and
            data architecture. (Think of CDMP as getting credentialed into a
            semi-secret society of data ninjas.) Increasingly, enterprise roles
            and federal contracts related to data management are requesting CDMP
            certification.{" "}
            <a
              href="https://jonshaulis.com/index.php/2019/11/26/hurray-i-earned-my-cdmp/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p style={{ marginBottom: "0em" }}>
            <strong>Pros</strong>:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              Provides well-rounded knowledge base on topics related to Data
              Strategy
            </li>
            <li>Open book test means less time spent on rote memorization</li>
            <li>
              Four tiers for different levels of data management professionals
            </li>
            <li>60% score requirement to pass lowest level of certification</li>
            <li>Associated with elite roles</li>
            <li>Provides 3 year membership to DAMA International</li>
            <li>
              $311 exam fee is cheaper than other data-related certifications
              from Microsoft and The Open Group
            </li>
          </ul>
          <p style={{ marginBottom: "0em" }}>
            <strong>Cons</strong>:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              DAMA is not backed by a major tech company (e.g. Amazon, Google,
              Microsoft) that is actively pushing marketing efforts and driving
              brand recognition for CDMP certification — this means that CDMP is
              likely to be recognized as valuable mainly among individuals who
              are already familiar with data management
            </li>
            <li>
              $311 exam fee is relatively expensive compared to{" "}
              <a
                href="https://nicolejaneway.medium.com/how-to-ace-the-aws-cloud-practitioner-certification-with-minimal-effort-39f10f43146"
                target="_blank"
                rel="noreferrer"
              >
                AWS Cloud Practitioner cert
              </a>{" "}
              ($100) or{" "}
              <a
                href="https://cloud.google.com/certification"
                target="_blank"
                rel="noreferrer"
              >
                GCP certs
              </a>{" "}
              ($200)
            </li>
          </ul>
          <p style={{ marginBottom: "0em" }}>
            <strong>Alternatives</strong>:
          </p>
          <ul style={{ marginBottom: "3em" }}>
            <li>
              <em>Microsoft Certified Solutions Associate</em> (
              <a
                href="https://www.microsoft.com/en-us/learning/mcsa-certification.aspx"
                target="_blank"
                rel="noreferrer"
              >
                MCSA
              </a>
              ) — modularized certifications focusing on various Microsoft
              products ($330+)
            </li>
            <li>
              <em>Microsoft Certified Solutions Expert</em> (
              <a
                href="https://www.microsoft.com/en-us/learning/mcse-certification.aspx"
                target="_blank"
                rel="noreferrer"
              >
                MCSE
              </a>
              ) — builds on the MCSA with integrated certifications on topics
              such as{" "}
              <a
                href="https://www.microsoft.com/en-us/learning/mcse-core-infrastructure.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Core Infrastructure
              </a>
              ,{" "}
              <a
                href="https://www.microsoft.com/en-us/learning/mcse-data-management-analytics.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Data Management &amp; Analytics
              </a>
              , and{" "}
              <a
                href="https://www.microsoft.com/en-us/learning/mcse-productivity-certification.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Productivity
              </a>{" "}
              ($495+)
            </li>
            <li>
              <em>The Open Group Architecture Framework</em> (
              <a
                href="https://www.opengroup.org/certifications/togaf-individual-certification"
                target="_blank"
                rel="noreferrer"
              >
                TOGAF
              </a>
              ) —various levels of certification on high-level framework for
              software development and enterprise architecture methodology
              ($550+)
            </li>
            <li>
              <em>Scaled Agile Framework</em> (
              <a
                href="https://www.scaledagile.com/certification-basics/"
                target="_blank"
                rel="noreferrer"
              >
                SAFe
              </a>
              ) — role-based certifications for software engineering teams
              ($995)
            </li>
          </ul>
          <figure style={{ marginBottom: "3em" }}>
            <img
              src="https://miro.medium.com/max/1152/1*U2_nrr1ocs70ypKBEffcpQ.jpeg"
              alt=""
            />
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/photos/1K6IQsQbizI"
                target="_blank"
                rel="noreferrer"
              >
                Franki Chamaki
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/1K6IQsQbizI"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
              . The signage is a trademark of{" "}
              <a
                href="https://www.hivery.com/"
                target="_blank"
                rel="noreferrer"
              >
                Hivery
              </a>
              , a company that leverages AI for the retail industry.
            </figcaption>
          </figure>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            What’s tested on the CDMP
          </p>
          <p>
            The CDMP covers 14 topics —I’ve listed them in order of the
            prevalence with which they occur on the exam and provided a brief
            definition for each.
          </p>
          <p>
            <strong>Data Governance</strong> ( 11%) — practices and processes to
            ensure formal management of data assets.{" "}
            <a
              href="https://www.dataversity.net/what-is-data-governance/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Quality</strong> ( 11%) — assuring data is fit for
            consumption based on its accuracy, completeness, consistency,
            integrity, reasonability, timeliness, uniqueness/deduplication,
            validity, and accessibility.{" "}
            <a
              href="https://www.dataversity.net/what-is-data-quality/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Modelling and Design</strong> ( 11%) — translation of
            business needs into technical specifications.{" "}
            <a
              href="https://www.dataversity.net/what-is-a-data-modeler/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Metadata Management</strong> (11%) — information about data
            collected.{" "}
            <a
              href="https://www.dataversity.net/what-is-metadata/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Master and Reference Data Management</strong> (10%) —
            reference data is information used to categorize other data found in
            a database, or information that is solely for relating data in a
            database to information beyond the boundaries of the organization.
            Master reference data refers to information that is shared across a
            number of systems within the organization.{" "}
            <a
              href="https://www.dataversity.net/dataed-webinar-reference-master-data-management-unlocking-business-value/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Warehousing and Business Intelligence</strong> (10%) —
            a{" "}
            <a
              href="https://medium.com/data-warehouse-68ec63eecf78"
              target="_blank"
              rel="noreferrer"
            >
              data warehouse
            </a>{" "}
            stores information from operational systems (as well as other data
            resources, potentially) in a way that is optimized to support
            decision-making processes. Business intelligence refers to the use
            of technology to gather and analyze data, then translate it into
            useful information.{" "}
            <a
              href="https://www.dataversity.net/brief-history-data-warehouse/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Document and Content Management</strong> (6%) —
            technologies, methods, and tools used to organize and store an
            organization’s documents.{" "}
            <a
              href="http://dataversity.net/big-data-semantic-web-enterprise-content-management/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Integration and Interoperability</strong> ( 6%) — use
            of technical and business processes to merge data from different
            sources, with the goal of readily and efficiently providing access
            to valuable information.{" "}
            <a
              href="https://www.dataversity.net/the-fundamentals-of-data-integration/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Architecture</strong> (6%) — specifications to describe
            existing state, define data requirements, guide data integration,
            and control data assets, according to the organization’s data
            strategy.{" "}
            <a
              href="https://www.dataversity.net/what-is-data-architecture/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Security</strong> ( 6%) — implementation of policies
            and procedures to ensure people and things take the right actions
            with data and information assets, even in the presence of malicious
            inputs.{" "}
            <a
              href="https://www.dataversity.net/what-is-data-security/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Storage and Operations</strong> ( 6%) —
            characterization of hardware or software that holds, deletes, backs
            up, organizes, and secures an organization’s information.{" "}
            <a
              href="https://www.dataversity.net/what-is-data-storage/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Data Management Process</strong> ( 2%) — end-to-end
            management of data, including collection, control, protection,
            delivery, and enhancement.{" "}
            <a
              href="https://www.dataversity.net/what-is-data-management/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p>
            <strong>Big Data</strong> ( 2%) — extremely large datasets, often
            composed of various structured, unstructured, and semi-structured
            data types.{" "}
            <a
              href="https://www.dataversity.net/what-is-big-data/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <p style={{ marginBottom: "3em" }}>
            <strong>Data Ethics</strong> ( 2%) — code of conduct encompassing
            data handling, algorithms, and other practices to ensure that data
            is used appropriately in a moral context.{" "}
            <a
              href="https://www.dataversity.net/what-are-data-ethics/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
            .
          </p>
          <blockquote>
            <p style={{ marginBottom: "3em" }}>
              The very existence of an organization can be threatened by poor
              quality data <br />— Joe Peppard, Principal Research Scientist at
              MIT Sloan School of Management
            </p>
          </blockquote>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            How to prepare for CDMP
          </p>
          <p>
            Given that CDMP is an open book test, to study for the exam, all
            that’s needed is DAMA's Body of Knowledge book (
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>{" "}
            $55). It’s around <strong>600 pages</strong>, but if you mainly
            focus your study time on Chapter 1 (Data Management), diagrams &amp;
            schemas, roles &amp; responsibilities, and definitions, then this
            should get you 80% of the way toward a passing score.
          </p>
          <p>
            You may also be interested in Data Strategy Professionals'{" "}
            <Link to="/products/cdmp-study-plan">90-day Study Plan</Link>. This
            includes a <strong>study and review schedule</strong> to keep you on
            track with your reading. The scientifically-backed study approach
            leverages the 80/20 principle to help you focus on the most
            important information.
          </p>
          <p>
            The <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link> also
            includes <strong>vocabulary and key concepts</strong> for each of
            the 14 chapters tested on the Fundamentals Exam. Practice questions
            and exam preparedness checklist ensure you're ready to effortlessly
            ace the test.
          </p>{" "}
          <p>
            And because becoming a CDMP is about more than a test score, the
            plan includes{" "}
            <strong>
              external resources such as thought-provoking articles, case
              studies, and interview questions
            </strong>{" "}
            to prepare you for Data Management in the real world setting.
          </p>
          <p>
            If you're on a different timeline to achieve Data Strategy mastery
            through the CDMP, that's no problem! You can select "Immediate
            Access" to receive to the full{" "}
            <Link to="/products/cdmp-study-plan">CDMP Study Plan</Link> at one
            time.
          </p>
          <p>
            The exam contains <strong>100 multiple choice questions</strong> to
            be answered in <strong>90 minutes</strong>. A{" "}
            <strong>score of 60%</strong> is required to pass the first level
            exam. It can be taken with <strong>online</strong>{" "}
            <strong>proctoring</strong> and is <strong>open book</strong>. This
            means you can use your notes and the{" "}
            <a href="https://amzn.to/32oK8hH">
              <em>Data Management Body of Knowledge (DMBOK)</em>
            </a>{" "}
            as a reference.
          </p>
          <p>
            In addition to being your study guide for the exam, the{" "}
            <em>DMBOK</em> is of course useful as reference book, and you can
            drop it on your colleague’s desk if they need to learn data strategy
            or if they’ve nodded off during a webinar.
          </p>
          <div className="teal-box" style={{ maxWidth: "1000px" }}>
            <p
              style={{
                marginBottom: ".8em",
                fontSize: "1.2em",
                textAlign: "center",
              }}
            >
              <a
                href="https://www.facebook.com/groups/346145433213551/"
                target="_blank"
                rel="noreferrer"
              >
                CDMP Study Group Advice
              </a>
            </p>
            <p>
              "I started Nicole Janeway Bills’{" "}
              <Link to="/products/cdmp">CDMP Study Plan</Link> at the end of
              September. I read approx 1-2 chapters a week going through the{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>{" "}
              sequentially and did the CDMP practice test from DAMA every week.
              For answers where I was uncertain or got them wrong, I copied them
              into a notes file in Word. I also copied the contents of each of
              the emails I received in Nicole’s study program into that same
              word doc. I typically reviewed that Word file before each practice
              exam.
            </p>
            <p>
              "I followed along with the email plan and read the chapters in
              priority order by % of questions on the test. I experimented with
              Quizlet as some folks have put flash cards on there but had mixed
              results with the quality.{" "}
            </p>
            <p>
              "On the day of the exam I got my equipment set up and ran through
              the Honorlock setup and did another practice test where I scored
              39/40. I took a 20-minute break and went for a walk to clear my
              head, then started the test.{" "}
            </p>
            <p>
              "I’m not going to lie, I was concerned after the first 20
              questions. I felt ill-prepared but just flagged those I didn’t
              know immediately to come back to. I gave myself about 15 seconds
              per question the first time through then went back through and
              spent at most 1 minute each and referenced the <em>DMBOK</em>. And
              cleared the flags of those I answered. Then went back through and
              answered the rest the best I could and finished with 20 seconds to
              spare.{" "}
            </p>
            <p>
              "All in all, the <Link to="/products/cdmp">Study Plan</Link> is
              great and keeps content top of mind."
            </p>
            <p style={{ textAlign: "right", marginBottom: "0px" }}>
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/permalink/662777048217053"
                target="_blank"
                rel="noreferrer"
              >
                Jeff Johnson
              </a>
              ,
            </p>
            <p style={{ textAlign: "right" }}>
              <em>Manager, Enterprise Information Management at Starbucks</em>
            </p>
          </div>
          <p>
            <strong>Study tips:</strong>
          </p>
          <div style={{ marginLeft: "40px" }}>
            <p>
              📘 <strong>Buy the</strong>{" "}
              <a href="https://amzn.to/32oK8hH">
                <strong>
                  <em>DMBOK 2nd ed.</em>
                </strong>
              </a>{" "}
              <strong>right now</strong>. The exam is <strong>open book</strong>{" "}
              and the <em>DMBOK</em> is legitimately super useful as a reference
              for Data Management work. The <em>DMBOK</em> occupies a prime
              position on my desk — I frequently find myself referencing my
              highlights and sticky notes to address clients’ questions. In
              terms of how to use <em>DMBOK</em>, one test taker recommended 4–6
              hours per weekend for 8–10 weeks. Another approach could be
              reading a couple pages each morning and evening. However you
              tackle it, make sure you’re incorporating{" "}
              <a
                href="https://medium.com/@pruthvikumar.123/using-spaced-repetition-to-supercharge-your-programming-skills-a1b355934f61"
                target="_blank"
                rel="noreferrer"
              >
                spaced repetition
              </a>{" "}
              into your studying methodology.
            </p>
            <p>
              ❓ <strong>Buy the</strong>{" "}
              <a href="https://cdmp.info/about/">
                <strong>CDMP exam</strong>
              </a>{" "}
              <strong>right now</strong>. You have an unlimited amount of time
              to schedule the test date, and paying for the exam gives you
              access to a <strong>test bank of 200 questions</strong> that
              simulate the real exam.
            </p>
            <p>
              🔖{" "}
              <strong>
                Highlight and sticky note the <em>DMBOK</em>
              </strong>
              . Okay, this one’s obvious for an open book test. You’ll
              definitely want to use a highlighter and sticky notes to indicate
              key concepts. I put{" "}
              <strong>all sticky notes on one side of the book</strong> for easy
              referencing. I also recommend orienting your writing sideways on
              the tabs so they don’t stick out of the book as far.
            </p>
            <p>
              ❗️<strong>Indicate the start of each chapter</strong>. Use wide
              sticky notes or notes of a specific color to mark the start of
              each chapter. This was invaluable during the test to quickly find
              content associated with a specific topic.
            </p>
            <p>
              🔨 <strong>Work with the chapter framework</strong>. All the
              chapters of the <em>DMBOK</em> follow the structure{" "}
              <em>
                Introduction, Activities, Tools, Techniques, Implementation
                Guidelines, Governance, Works Cited / Recommended.
              </em>{" "}
              Focus your studying on the{" "}
              <strong>overview and technical sections</strong> that get more
              play on the exam relative to implementation and organizational
              sections.
            </p>
            <p>
              💙 <strong>Read in order then review by priority</strong>. The
              topics of the <em>DMBOK</em> are arranged in an intuitive order —
              the sequence you might assess these topics during a Data
              Management engagement. However, the proportion of each of the 14
              topics tested on the exam ranges from 11% for foundational areas
              such as Data Governance to 2% for advanced activities such as Big
              Data. On your second reading of the <em>DMBOK</em>, I recommend
              studying in <strong>priority order</strong>.
            </p>
          </div>
          <p>
            The CDMP is extremely relevant in today’s job marketplace. The
            credential is associated with high-level <strong>leadership</strong>{" "}
            positions. It’s also{" "}
            <strong>recognized by potential clients</strong> across the
            commercial and governmental spheres as indicating deep knowledge of
            Data Management. And if you’re just setting out on your data-related
            career journey, the CDMP is a great place to{" "}
            <strong>get started</strong>.
          </p>
          <p>
            <strong>Bonus tip:</strong>
          </p>
          <div style={{ marginLeft: "40px" }}>
            <p style={{ marginBottom: "3em" }}>
              ⭐️ <strong>Join the</strong>{" "}
              <a href="https://www.facebook.com/groups/346145433213551/">
                <strong>CDMP Study Group</strong>
              </a>
              . Use this community to compare notes, ask questions, and find
              study partners.
            </p>
          </div>
          <figure style={{ marginBottom: "3em" }}>
            <img
              src={crossedArms}
              alt="man with crossed arms"
              className="box-shadow"
            />
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@milancsizmadia"
                target="_blank"
                rel="noreferrer"
              >
                Milan Csizmadia
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/rCa8as1KkU0"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Why would you want to get CDMP certified
          </p>
          <p>
            Still not convinced of the importance of Data Management
            fundamentals?
          </p>
          <blockquote>
            <p>
              "Successwise, you’re better off being good at two complementary
              skills than being excellent at one"
            </p>
          </blockquote>
          <p>
            Scott Adams, author and creator of the Dilbert comics,{" "}
            <a href="https://amzn.to/32AZik6" target="_blank" rel="noreferrer">
              offers the idea
            </a>{" "}
            that “every skill you acquire doubles your odds of success.” He
            acknowledges this may be somewhat of an oversimplification —
            “obviously some skills are more valuable than others, and the
            twelfth skill you acquire might have less value than each of the
            first eleven” — but the point is that sometimes{" "}
            <strong>it’s</strong> <strong>better to go wide</strong> than to go
            deep.
          </p>
          <p>
            Setting aside the relative magnitude of the benefit (
            <em>
              because I seriously doubt it’s 2x per skill… thank you, law of
              diminishing marginal returns
            </em>
            ), it seems unquestionable that broadening your skillset can lead to
            more significant gains relative to toiling away at learning one
            specific skill. In a nutshell, this is why I think it’s important
            for a data scientist to learn data strategy.
          </p>
          <p style={{ marginBottom: "0em" }}>
            Generally speaking,{" "}
            <strong>having diversity in your skillset allows you to:</strong>
          </p>
          <ol style={{ marginBottom: "1em" }}>
            <li>
              <strong>Problem solve</strong> more effectively by drawing on
              cross-disciplinary learnings
            </li>
            <li>
              <strong>Communicate</strong> better with your teammates from other
              specialties
            </li>
            <li>
              <strong>Get your foot in the door</strong> in terms of gaining
              access to new projects
            </li>
          </ol>
          <p>
            Understanding{" "}
            <strong>
              data strategy transforms you from being a data consumer into an
              empowered data advocate at your organization
            </strong>
            . It’s worth putting up with all the tongue twister acronyms (
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>{" "}
            — really? Could they not have just called it{" "}
            <em>The Data Management Book</em>?<em>)</em> in order to deepen your
            appreciation for the end-to-end knowledge generating process.
          </p>
          <p>
            Taking the CDMP is extremely straightforward and beneficial for
            technology professionals. There are no trick questions, the test is
            open book, and it costs only $311. Hopefully, this write up has
            gotten you thinking about how attaining recognition as a CDMP would{" "}
            <strong>advance your career</strong> — for example:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              You’re a Data Scientist, Data Engineer, or Software Developer
              looking to move into a leadership role
            </li>
            <li>
              You’re a consultant seeking a credential to show your client that
              you possess a deep understanding of Data Management
            </li>
            <li>
              You’re a Data Science student wanting an end-to-end perspective on
              data-related topics
            </li>
            <li>You’re someone who is driven to learn useful things!</li>
          </ul>
          <p>
            If you have <strong>any doubt</strong> about the benefits of the
            CDMP, consider that in the decade from 2010 to 2020, the{" "}
            <a href="https://techjury.net/blog/big-data-statistics">
              amount of data
            </a>{" "}
            in our digital world increased 3000%, from 1.2 to 40 zettabytes.
            That’s <strong>40 trillion gigabytes</strong>.
          </p>
          <p>
            With each passing day, organizations produce more data than ever
            before. This creates{" "}
            <strong>significant opportunities and massive risks</strong>. A
            strong Data Strategy can empower experimentation that promotes
            comparative advantage. A weak Data Strategy can jeopardize an
            organization’s very existence — putting customers, stakeholders, and
            employees at risk.
          </p>
          <p>
            Professionals who can manage{" "}
            <strong>data as a strategic asset</strong> are in high demand. The
            CDMP is the <strong>only certification</strong> that trains and
            evaluates end-to-end Data Strategy capabilities.
          </p>
          <h2 id="those-study-tips-one-more-time-">
            Those study tips, one more time:
          </h2>
          <ol style={{ marginBottom: "1em" }}>
            <li>
              Buy the{" "}
              <a href="https://amzn.to/32oK8hH">
                <em>DMBOK 2nd ed.</em>
              </a>{" "}
              for the open book exam
            </li>
            <li>
              Buy the <a href="https://cdmp.info/about/">CDMP exam</a> to gain
              access to 200 practice questions
            </li>
            <li>
              Highlight and put sticky notes in the{" "}
              <a href="https://amzn.to/32oK8hH">
                <em>DMBOK</em>
              </a>
            </li>
            <li>
              Indicate the start of each chapter with special sticky notes
            </li>
            <li>
              Work with the chapter framework, focusing on{" "}
              <em>Introduction, Activities, Tools,</em> and <em>Techniques</em>
            </li>
            <li>Read the chapters in order then review by priority</li>
            <li>
              Join the{" "}
              <a href="https://www.facebook.com/groups/346145433213551/">
                CDMP Study Group
              </a>
            </li>
          </ol>
          <p>
            If you found this article helpful, follow the author on{" "}
            <a
              href="https://medium.com/@nicolejaneway"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            .
          </p>
          <br />
          <PostAuthorCard />
        </div>
      </div>
    </>
  );
}
