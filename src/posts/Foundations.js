import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import mountain from "../img/mountain-man.jpeg";
import Aiken from "../img/AikenPyramid.png";

import CDMPad from "../components/CDMPad";
import PostAuthorCard from "../components/PostAuthorCard";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "data-strategy");

/* TODO 
-  How to import Orbit / use web components with React*/

export default function Foundations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
        <meta name="og:image" content={mountain} />
        <meta name="og:image:alt" content="man on a mountain" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={mountain} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title" style={{ marginBottom: "0.2em" }}>
          Foundations of Data Strategy
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            The size of the digital universe increased 3000% in the past decade.
            Fortunately, there are straightforward steps to effectively roll out
            a Data Management initiative.
          </p>
          <figure>
            <img
              src={mountain}
              alt="man on a mountain"
              className="box-shadow"
            />
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@dinoreichmuth"
                target="_blank"
                rel="noreferrer"
              >
                Dino Reichmuth
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/@dinoreichmuth"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <p>
            The objective of this writeup is to help all of us that work with
            data to better understand the <strong>whys and hows</strong> of
            implementing good Data Management practices.
            {/* Mixed in with text
            about the fundamental building blocks of Data Strategy, you'll find
            slides and videos that offer this content through different
            modalities to help reinforce your learning. */}
          </p>
          {/* <p>
            To further energize your long-term retention of this content, we've also included active-retrieval
            questions through a tool called{" "}
            <a href="https://withorbit.com/" target="_blank">
              Orbit
            </a>
            . After answering the questions, you can sign up with Orbit, and the
            tool will test your recall at spaced intervals. This technique is
            scientifically proven to help with the retention of new material.
          </p> */}
          <p>
            This is particularly useful if you’re interested in continuing to
            deepen your authority in this area by becoming recognized as a{" "}
            <Link to="/resources/cdmp" target="_blank">
              Certified Data Management Professional (CDMP)
            </Link>
            . The knowledge gained from reading the{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>{" "}
            can help you set up a robust Data Strategy for your team. Enjoy!
          </p>
          <hr />
          <p>
            In 2020, the size of our digital universe is 
            <a
              href="https://techjury.net/blog/how-much-data-is-created-every-day/"
              target="_blank"
              rel="noreferrer"
            >
              40 zettabytes
            </a>
            . By comparison, the world had produced just 1.2 zettabytes of data
            by the year 2010. That represents{" "}
            <strong>explosive growth of 3,000%</strong> in a single
            decade. Obviously, this presents both opportunities and challenges.
          </p>
          <p>
            In 
            <a href="https://amzn.to/3l6bxgz" target="_blank" rel="noreferrer">
              <em>The Lean Startup</em>
            </a>
            , Eric Reis explores how innovation leaders use data to support
            experimentation. A strong data infrastructure allows an organization
            to validate hypotheses about customer values. Data provides a common
            language across business functions, allowing the organization to
            move collectively towards empirically derived truth.
          </p>
          <p>
            On the other hand,{" "}
            <blockquote>
              "the very existence of an organization can be threatened by poor
              data quality."
            </blockquote>
            <p>
              So says{" "}
              <a
                href="https://medium.com/@Joe_Peppard"
                target="_blank"
                rel="noreferrer"
              >
                Joe Peppard
              </a>
              , Principal Research Scientist at MIT. Data strategy helps an
              organization mitigate risk and protect their stakeholders,
              including customers, suppliers, and employees.
            </p>
          </p>
          {/* <p>
            Let's practice what you just learned about{" "}
            <strong>Data Strategy</strong> with some questions:
          </p>
          <orbit-reviewarea color="blue">
            <br />
            <orbit-prompt
              question="By roughly what percentage has the size of the digital universe grown in the last decade?"
              answer="3,000%"
            ></orbit-prompt>
            <br />
            <orbit-prompt
              question="What are the two major goals of a Data Strategy initiative?"
              answer="1) Leverage data as a strategic asset
2) Mitigate risks"
            ></orbit-prompt>
            <br />
            <orbit-prompt
              question="What is the main certification for Data Strategy?"
              answer="The Certified Data Management Professional (CDMP) exam"
            ></orbit-prompt>
            <br />
          </orbit-reviewarea> */}
          <figure>
            <img src={Aiken} alt="Aiken Pyramid" className="box-shadow" />
            <figcaption>
              Aiken Pyramid courtesy of{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>
            </figcaption>
          </figure>
          <p>
            As discussed in the{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>Data Management Body of Knowledge</em>
            </a>
            , the Aiken Pyramid outlines core Data Strategy concepts in a
            structure that illustrates how these functions build upon each
            other. At the pinnacle of the diagram, Data Science activities
            shouldn’t even be attempted until these other structures are in
            place and proven to be functioning effectively.
          </p>
          <p style={{ marginBottom: "0" }}>
            Here are six core topics that we’ll discuss in this writeup:
          </p>
          <ol style={{ marginBottom: "3em" }}>
            <li>Data Governance</li>
            <li>Data Quality</li>
            <li>Data Architecture</li>
            <li>Data Modeling</li>
            <li>Master & Reference Data Management</li>
            <li>Data Warehousing & Business Intelligence</li>
          </ol>
          {/* <p>
            Information about these topics will be interleaved with questions
            designed to test your recall of what you've just read. If you
            provide the Orbit tool with your email, it will save your responses
            and send you prompts on a schedule based in spaced-repetition so
            that you can continue to review these topics.
          </p> */}
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0em",
              fontWeight: "600",
            }}
          >
            Data Governance
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <em>
              Percentage of the <Link to="/resources/cdmp">CDMP exam</Link>: 11%
            </em>
          </p>
          <p>
            It’s important to begin a Data Strategy effort with a conversation
            about the mission statement and strategic aims of the organization. 
            <strong>Connecting data to business outcomes</strong> will drive the
            motivation to sustain Data Governance for the long haul.
          </p>{" "}
          <p>
            The team can then document this motivation in the Data Governance
            Charter, which should include a clear vision of the organization’s
            future state when it comes to data.
          </p>{" "}
          <p style={{ marginBottom: "0" }}>Additional processes to consider:</p>
          <ul style={{ marginBottom: "1em" }}>
            <li>Develop Operating Framework</li>
            <li>Develop RACI matrix</li>
            <li>Conduct Maturity Assessment</li>
            <li>Conduct Gap Assessment</li>
            <li>Develop Roadmap with transition steps</li>
          </ul>
          <p>
            As we turn to talking about the organizational structures required
            to support Data Governance, it's worth remembering that Data
            Governance is a process not a project. There isn’t a set end date.
            Therefore, it’s important to maintain continuity by setting up Roles
            & Responsibilities that will outlast any specific individual
            contributor.
          </p>
          <p style={{ marginBottom: "0" }}>
            Organizational structures to support Data Governance:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>Chief Data Officer</li>
            <li>Steering Committee</li>
            <li>Data Governance Council</li>
            <li>Program Office</li>
            <li>Data Stewards Working Groups</li>
          </ul>
          <p style={{ marginBottom: "0" }}>
            <strong>How to get started</strong> — here are three practical
            initial steps for a Data Governance initiative:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              First, align data-related benefits and risks to the organization’s
              strategic objectives.
            </li>{" "}
            <li>
              Second, set up an organizational structure for the long term.{" "}
            </li>{" "}
            <li>
              Finally, conduct a Data Maturity Assessment that includes
              conversations across the organization about data culture. This
              will help the Data Governance team get a better understanding for
              attitudes and behaviors around data. You can ask questions like: 
              <em>
                Is data freely shared across business units? Do data consumers
                have the skills and endpoints required to access the data they
                need in their work? Is data quality trusted?
              </em>
            </li>
          </ul>
          <p>
            Setting up Data Governance definitely requires time and energy, but
            it’s foundational to improving the organization’s data
            infrastructure. It’s truly the key to unlocking other potential
            data-related initiatives, including Data Science.
          </p>
          <p style={{}}>
            Keep in mind that Data Governance is an ongoing process, not a
            project.
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <a
              href="https://youtu.be/Ttzxl-ljBJI"
              target="_blank"
              rel="noreferrer"
            >
              <em>Watch a video about this topic</em>
            </a>
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0em",
              fontWeight: "600",
            }}
          >
            Data Quality
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <em>
              Percentage of the <Link to="/resources/cdmp">CDMP exam</Link>: 11%
            </em>
          </p>
          <p>
            The 
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>
             identifies nine dimensions related to Data Quality: Accuracy,
            Completeness, Consistency, Integrity, Reasonability, Timeliness,
            Uniqueness/Deduplication, Validity, and Accessibility.
          </p>
          <p>
            <strong>Data should be fit for a purpose</strong>. It should meet
            the requirements of its authors, users, and administrators.
          </p>
          <p style={{ marginBottom: "0" }}>
            <strong>How to get started</strong>:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              In order to move forward with a data quality initiative, you
              should first set up a formal Data Quality Reporting Process. In
              The Lean Startup, Eric Ries talks about the importance of asking
              “why” 5 times in order to reach the root cause of a problem. That
              exercise is relevant to investigating Data Quality issues and
              conducting root cause remediation.
            </li>{" "}
            <li>
              Second, you might consider Data Literacy training for data owners
              as well as data consumers across the organization.
            </li>{" "}
            <li>
              Third, a significant number of Data Quality issues stem from lack
              of quality Metadata, especially in the era of Data Lakes. It’s
              possible that data is loaded into the storage system and then lost
              due to poor quality Metadata tags. Efforts to create a data
              catalog could be useful in resolving this challenge.
            </li>
          </ul>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <a
              href="https://youtu.be/CE-S2Lk0PPw"
              target="_blank"
              rel="noreferrer"
            >
              <em>Watch a video about this topic</em>
            </a>
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0em",
              fontWeight: "600",
            }}
          >
            Data Architecture
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <em>
              Percentage of the <Link to="/resources/cdmp">CDMP exam</Link>: 6%
            </em>
          </p>
          <p>
            This area represents the transformation of business needs into
            technical specifications. Architecture describes the current and
            future state of data infrastructure. The Enterprise Data Model and
            Data Flow Diagram are key tools that form the backbone of Data
            Architecture.
          </p>
          <p>
            An <strong>Enterprise Data Model</strong> is a holistic,
            enterprise-level, implementation-independent Conceptual or Logical
            data model that provides a common, consistent view of data across
            the enterprise.
          </p>
          <p>
            A <strong>Data Flow Diagram</strong> defines the requirements and
            master blueprint for storage and processing across databases,
            platforms, and networks. Here is an example Data Flow Diagram
            presented as a Matrix. A matrix provides a clear overview of data
            interchange. You could add more detail to this layout, such as
            comments indicating storage system.
          </p>
          <p style={{ marginBottom: "0" }}>
            <strong>How to get started</strong> with Data Architecture:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              Develop an Enterprise Data Model (EDM) that provides a consistent
              view of data across the organization
            </li>
            <li>
              Develop a Data Flow Diagram that defines the requirements and a
              blueprint for storage and processing across databases,
              applications, platforms, and networks
            </li>
          </ul>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <a
              href="https://youtu.be/O_OK--qLr5c"
              target="_blank"
              rel="noreferrer"
            >
              <em>Watch a video about this topic</em>
            </a>
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0em",
              fontWeight: "600",
            }}
          >
            Data Modeling
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <em>
              Percentage of the <Link to="/resources/cdmp">CDMP exam</Link>: 11%
            </em>
          </p>
          <p>Modeling provides a blueprint for how data is connected.</p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              Starting with the Conceptual Data Model, business concepts and
              activities are documented as entities and relationships
            </li>
            <li>
              The Logical Data Model captures detailed requirements. This phase
              builds on requirements and existing documentation to add
              associative entities
            </li>
            <li>
              Finally, the development of the Physical Data Model outlines how
              data will be stored in the enterprise system
            </li>
          </ul>
          <p>
            Once the modeling process is complete, the team may choose to
            undertake a process of <strong>reverse engineering</strong> from
            Physical Model, to Logical Model, to Conceptual Model, in order to
            ensure requirements are met.
          </p>
          <p>
            At large enterprises, there’s often a tendency to jump right into
            Logical Model and skip the Conceptual Model entirely. However, this
            is a mistake — there’s significant value in starting with the
            Conceptual Model as it is a significant aid to creating a common
            understanding across the team of data entities and relationships.
          </p>
          <p style={{ marginBottom: "0" }}>
            <strong>How to get started</strong> with Data Modeling:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>Select scheme and notation</li>
            <li>Gather entities and relationships</li>
            <li>Utilize organization-specific terminology</li>
          </ul>
        </div>
        <p
          style={{
            fontSize: ".9em",
            marginBottom: "3em",
          }}
        >
          <a
            href="https://youtu.be/O_OK--qLr5c"
            target="_blank"
            rel="noreferrer"
          >
            <em>Watch a video about this topic</em>
          </a>
        </p>

        <CDMPad />
        <div className="blog">
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0em",
              fontWeight: "600",
            }}
          >
            Master & Reference Data Management
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <em>
              Percentage of the <Link to="/resources/cdmp">CDMP exam</Link>: 10%
            </em>
          </p>
          <p>
            This was one of the concepts that I was most unfamiliar with when I
            started reading the{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>
            . So I’ll hope to provide you with a more intuitive understanding of
            what this area entails.
          </p>
          <p>
            Master Data is <strong>information about business entities</strong>.
            It is collected and preserved as a “source of truth” and a resource
            across the entire organization. This reduces variation in how
            critical entities are defined and identified, and allows for data to
            be shared across business functions and applications. It promotes
            standards of shared data models and integration patterns.
          </p>
          <p>
            Similarly, Reference Data refers to data that should be shared
            across the organization. It’s often gathered from{" "}
            <strong>external sources</strong>, and it’s used to provide context
            to the organization’s functions and activities.
          </p>
          <p style={{ marginBottom: "0" }}>
            <strong>How to get started</strong>:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              Plan for storage in a <strong>system of record</strong>
            </li>
            <li>
              Collect <strong>business entities</strong> and document data
            </li>
            <li>
              Set up a process for <strong>ongoing monitoring</strong>
            </li>
          </ul>
          <p>
            Master and Reference Data provide a common language and emphasize
            that data is a shared asset across the organization.
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <a
              href="https://youtu.be/MJGENzVGP0w"
              target="_blank"
              rel="noreferrer"
            >
              <em>Watch a video about this topic</em>
            </a>
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0em",
              fontWeight: "600",
            }}
          >
            Data Warehousing & Business Intelligence
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <em>
              Percentage of the <Link to="/resources/cdmp">CDMP exam</Link>: 10%
            </em>
          </p>
          <p>
            The data warehouse is a specific infrastructure element that
            provides data consumers, such as analysts and data scientists, with
            access to data that has been shaped to conform to business rules and
            is stored in an easy-to-query format.
          </p>
          <p>
            The data warehouse typically connects information from multiple
            “source-of-truth” transactional databases. The contents of a data
            warehouse have been restructured for speed and ease of querying.
            This serves to increase performance by partitioning, indexing, and
            decreasing the complexity of table joins.
          </p>
          <p>
            Business intelligence is typically represented by reports and
            dashboards that provide insight to business stakeholders.
          </p>
          <blockquote>
            <p>
              "The only sins that ever get addressed interrupt the flow of
              money."
            </p>
          </blockquote>
          <p>
            I really like this quote from business intelligence consultant{" "}
            <a
              href="https://www.dataengineeringpodcast.com/power-bi-business-intelligence-episode-154/"
              target="_blank"
              rel="noreferrer"
            >
              Rob Collie
            </a>{" "}
            because it illustrates the fact that business intelligence will
            often reveal all the data quality issues that persist in a business.
            Just because a data quality problem isn’t interrupting the cash
            flow, that doesn’t mean it isn’t insidiously impeding the
            organization’s strategic objectives.
          </p>
          <p>
            This is why it is so important to start Data Strategy efforts by
            creating governance and promoting data quality that then will flow
            into effective advanced analytics like business intelligence and
            data science projects.
          </p>
          <p style={{ marginBottom: "0em" }}>
            <strong>How to Get Started</strong> with Data Warehousing:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              First, design with the end in mind, then build and deliver in
              agile sprints
            </li>
            <li>
              Second, aggregate and optimize at the end of the implementation
              process
            </li>
            <li>
              Third, promote self-service access to data through transparent
              communication of metadata and education for data consumers
            </li>
          </ul>
          <p style={{ marginBottom: "0em" }}>
            <strong>How to Get Started</strong> with Business Intelligence:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              Similarly, the first step is to design with the end in mind, then
              build and deliver in agile sprints
            </li>
            <li>
              Second, aggregate and optimize at the end of the implementation
              process
            </li>
            <li>
              Third, promote self-service access to data through transparent
              communication of metadata and education for data consumers
            </li>
          </ul>
          <p>
            These elements of Data Strategy sit toward the top of the Aiken
            Pyramid, where we are starting to get into activities such as
            advanced analytics and machine learning that might be one step more
            complicated than BI.
          </p>
          <p
            style={{
              fontSize: ".9em",
            }}
          >
            <a
              href="https://youtu.be/SjQ1T1Pb7m4"
              target="_blank"
              rel="noreferrer"
            >
              <em>Watch a video about this topic</em>
            </a>
          </p>

          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Summary
          </p>
          <p>
            Like Maslow’s hierarchy of needs, Data Science actualization cannot
            be attained without first achieving the physiological and safety
            needs of <strong>Data Governance</strong>,{" "}
            <strong>Data Quality</strong>, and{" "}
            <strong>Data Architecture</strong> at the foundational levels of the
            Aiken Pyramid.
          </p>
          <p>
            Understanding Data Strategy transforms you from a data consumer into
            an empowered advocate for better Data Management practices.
          </p>
          <p>
            <em>
              I’m happy to answer any questions you have at this point — just be
              forewarned: as a statistician, I don’t have to be right, only
              close.
            </em>{" "}
            <strong>If you enjoyed this article</strong>, you may be interested
            in reading about the{" "}
            <Link to="/resources/cdmp">best data-related certification</Link>.
          </p>
          <br />
          <PostAuthorCard />
        </div>
      </div>
    </>
  );
}
