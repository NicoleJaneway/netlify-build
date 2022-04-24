import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import milkyway from "../img/milky-way_cropped.jpg";

import books from "../data/books";
import BookCard from "../components/BookCard";
import PostAuthorCard from "../components/PostAuthorCard";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "specialist");

export default function Specialist() {
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
        <meta name="og:image" content={milkyway} />
        <meta name="og:image:alt" content="milkyway galaxy" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={milkyway} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title" style={{ marginBottom: "0.2em" }}>
          Essential Guide to the CDMP Specialist Exams
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            Everything you need to know to attain the Practitioner and Master
            level certifications.
          </p>
          <figure>
            <img src={milkyway} alt="man swimming" className="box-shadow" />
            <figcaption>
              Photo by{" "}
              <a
                href="https://pixabay.com/users/evgenit-4930349/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4451281"
                target="_blank"
                rel="noreferrer"
              >
                Evgeni Tcherkasski
              </a>{" "}
              on{" "}
              <a
                href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4451281"
                target="_blank"
                rel="noreferrer"
              >
                Pixabay
              </a>
              .
            </figcaption>
          </figure>
          <p>
            The CDMP Specialist Exams offer data practitioners the opportunity
            to advance their credentials and knowledge of specific Data Strategy
            topics. DAMA International offers seven options for Specialist
            Exams.
          </p>
          <p style={{ marginBottom: "0em" }}>
            <strong>Seven options of Specialist Exams</strong> (pick two):
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>Data Governance</li>
            <li>Data Quality</li>
            <li>Data Modelling & Design</li>
            <li>Metadata</li>
            <li>Master & Reference Data Management</li>
            <li>Data Integration & Interoperability</li>
            <li>Data Warehousing & Business Intelligence</li>
          </ul>
          <p>
            After getting a 70%+ on the{" "}
            <Link to="resources/cdmp">CDMP Fundamentals Exam</Link>, the{" "}
            <strong>CDMP Practitioner level certification</strong> requires that
            you pass two Specialist Exams with a score of <strong>70%+</strong>.
          </p>
          <p>
            To attain the <strong>CDMP Master level certification</strong>, you
            must pass the{" "}
            <Link to="resources/cdmp">CDMP Fundamentals Exam</Link> and two
            Specialist Exams with a score of <strong>80%+</strong>. You must
            also submit 10 years of relevant work experience for DAMA's review.
          </p>
          <p>
            All the CDMP exams are <strong>100 questions</strong> that you must
            answer in <strong>90 minutes</strong>. (The exception to this is if
            you purchase an English as a Second Language (ESL) version of the
            exams, in which case, you'll have 110 minutes.) DAMA specifies that
            you can only use <strong>one</strong> book while taking the exam,
            and we strongly recommend the{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>
            . You can use a digital copy so long as it's on a second device
            that's not connected to the internet.
          </p>
          <p>
            Data Strategy Professionals offers very thorough{" "}
            <Link to="/product/specialist-exam-guides">
              Specialist Exam Guides
            </Link>{" "}
            to help you ace the exam. Like the CDMP Fundamentals Exam, the
            Specialist Exams are open book, open notes, so you can print out
            these 15+ page documents to use them as a reference while taking the
            test.
          </p>
          <p style={{ marginBottom: "0em" }}>
            Each <Link to="/product/specialist-exam-guides">study guide</Link>{" "}
            includes the following:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>Introduction to the CDMP Specialist Exams</li>
            <li>Topic Summary</li>
            <li>Practice Questions & Answers</li>
            <li>Further Reading</li>
            <li>Real World Examples</li>
            <li>Tips from CDMP Study Group</li>
            <li>Next Steps</li>
          </ul>
          <p>
            In addition to reading (
            <span style={{ fontStyle: "italic" }}>
              or very thoroughly skimming
            </span>
            ) the{" "}
            <a href="https://amzn.to/32oK8hH" target="_blank" rel="noreferrer">
              <em>DMBOK</em>
            </a>{" "}
            before you take the Specialist Exams, you may choose to study{" "}
            <strong>additional reading materials</strong> covered in this
            article.
          </p>
          <br />
          <figure>
            <img
              src="https://miro.medium.com/max/2000/1*coav2xHaloJAtZ_MOoDa2Q.png"
              alt="CDMP certification levels"
              onClick={handleShowClick}
              style={{ maxWidth: "100%" }}
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
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Data Governance
          </p>
          <p>
            This is a fairly popular Specialist Exam among{" "}
            <a
              href="https://www.facebook.com/groups/346145433213551/"
              target="_blank"
              rel="noreferrer"
            >
              CDMP Study Group
            </a>{" "}
            members. Of course, Data Governance lays the foundation for all Data
            Strategy work to follow. To prep for the Data Governance exam, we
            recommend the following resources:
          </p>
          {books.map((book) =>
            book.topic === "Data Governance" ? (
              <BookCard bookObj={book} />
            ) : null
          )}
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
            <p p style={{ marginBottom: "0px" }}>
              "Whoo hoo... just finished the third and final exam and got my
              Practitioner certificate... The Specialist Exams are a bit
              scenario based, and a few questions were repeated with different
              context. But overall the experience is good. Time spent: 5 weeks -
              3 to 4 hours a day."
            </p>
            <p style={{ textAlign: "right", marginBottom: "0px" }}>
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/permalink/595485314946227"
                target="_blank"
                rel="noreferrer"
              >
                Mahendar Muthu
              </a>
              ,
            </p>
            <p style={{ textAlign: "right" }}>
              Metadata and Data Warehousing & Business Intelligence
            </p>
          </div>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Data Quality
          </p>
          <p>
            Advance your understanding of this crucial field by acing the
            Specialist Exam on Data Quality. To prep for this one, we recommend
            the following resources:
          </p>
          {books.map((book) =>
            book.topic === "Data Quality" ? <BookCard bookObj={book} /> : null
          )}
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
            <p style={{ marginBottom: "0em" }}>
              "I am happy to share that I successfully cleared the CDMP
              Specialist Exam (Master & Reference Data Management)... I used the
              following resources to help prepare for the exam.{" "}
            </p>
            <ol style={{ marginBottom: "0em", listStyle: "none" }}>
              <li>
                a){" "}
                <a
                  href="https://amzn.to/32oK8hH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>DMBOK</em>
                </a>{" "}
              </li>
              <li>
                b){" "}
                <a
                  href="https://amzn.to/3vecyaY"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>Navigating the Labyrinth</em>
                </a>{" "}
                by Laura Sebastian-Coleman
              </li>
              <li>
                c){" "}
                <a
                  href="https://amzn.to/3Ex0XHy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>Mastering your Data</em>
                </a>{" "}
                by Andy Graham
              </li>
              <li>
                d){" "}
                <a
                  href="https://amzn.to/3plztjz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>Master Data Management</em>
                </a>{" "}
                by David Loshin
              </li>
              <li>
                e) Leaned on the hard lessons learnt over the many years working
                in this space 🙂 "
              </li>
            </ol>
            <p style={{ textAlign: "right", marginBottom: "0px" }}>
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/permalink/603073897520702"
                target="_blank"
                rel="noreferrer"
              >
                Mayukh Datta Roy
              </a>
              ,
            </p>
            <p style={{ textAlign: "right" }}>
              Master & Reference Data Management
            </p>
          </div>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Data Modelling & Design
          </p>
          <p>
            For a major career boost as a Data Architect, consider making Data
            Modelling & Design one of your selections for the CDMP Specialist
            Exams. To prep, we recommend the following resources:
          </p>
          {books.map((book) =>
            book.topic === "Data Modelling & Design" ? (
              <BookCard bookObj={book} />
            ) : null
          )}
          <br />
          <br />
          <div style={{ maxWidth: "1000px" }}>
            <div
              className="teal-box"
              style={{ maxWidth: "2000px", margin: "auto" }}
            >
              <div className="center-text-box" id="more-quotes">
                <p
                  className="box-title"
                  style={{
                    fontSize: "1.2em",
                    marginBottom: "12px",
                    maxWidth: "100%",
                    textAlign: "center",
                  }}
                >
                  Effortlessly ace the{" "}
                  <Link to="/products/cdmp-study-plan">
                    CDMP Fundamentals Exam
                  </Link>{" "}
                  in 90 days or less
                </p>
                <div style={{ backgroundColor: "white", padding: "16px" }}>
                  <div
                    className="card-content"
                    style={{ paddingBottom: "0px" }}
                  >
                    <div className="content" style={{}}>
                      <Link to="/products/cdmp-study-plan">
                        <img
                          src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
                          alt="hand holding lightbulb"
                          style={{
                            margin: "0 20px 20px 0",
                            maxWidth: "215px",
                            float: "left",
                          }}
                        />
                      </Link>
                      <p>
                        Have you taken the{" "}
                        <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link>{" "}
                        yet?
                      </p>
                      <p>
                        If not, join the hundreds of Data Professionals who have
                        opted to maximize their{" "}
                        <strong>time, energy, and motivation</strong> while
                        studying for the CDMP exam with the help of Data
                        Strategy Professionals'{" "}
                        <Link to="/products/cdmp-study-plan">
                          CDMP Study Plan
                        </Link>
                        .
                      </p>
                      <p>
                        The plan is delivered as 3-4 emails each week that cover
                        each of the 14 chapters{" "}
                        <a
                          href="https://amzn.to/32oK8hH"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <em>DMBOK</em>
                        </a>
                        . The 90-day plan outlines a study and review schedule
                        scientifically proven to maximize long term retention of
                        the material.
                      </p>
                      <p>
                        On a different timeline to achieve Data Strategy
                        mastery? No problem! Purchase{" "}
                        <strong>Immediate Access</strong> to the{" "}
                        <Link to="/products/cdmp-study-plan">
                          CDMP Study Plan
                        </Link>{" "}
                        to receive all 60+ emails at one time.
                      </p>
                      <p>
                        Because becoming a Data Strategist is about more than a
                        test score, the{" "}
                        <Link to="/products/cdmp-study-plan">
                          CDMP Study Plan
                        </Link>{" "}
                        also provides real world examples, case studies, and job
                        prep resources that will help you advance your career.
                        You may also be interested the{" "}
                        <Link to="/products/cdmp-fundamentals-notes">
                          CDMP Fundamentals Notes
                        </Link>{" "}
                        as a boost to your studies and a resource you can use
                        while taking the <strong>open book, open notes</strong>{" "}
                        test.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      gridColumn: "1/3",
                      textAlign: "center",
                      justifyItems: "center",
                    }}
                  >
                    <Link to="/products/cdmp-study-plan">
                      <button
                        className="btn btn-accent"
                        style={{
                          marginTop: "1em",
                          marginBottom: "1em",
                        }}
                      >
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Metadata
          </p>
          <p>
            A very popular choice among members of the{" "}
            <a
              href="https://www.facebook.com/groups/346145433213551/"
              target="_blank"
              rel="noreferrer"
            >
              CDMP Study Group
            </a>
            . To prep for the Metadata exam, we recommend the following
            resources:
          </p>
          {books.map((book) =>
            book.topic === "Metadata" ? <BookCard bookObj={book} /> : null
          )}

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
              "One helpful tip if you have the pdf version of the{" "}
              <a
                href="https://amzn.to/32oK8hH"
                target="_blank"
                rel="noreferrer"
              >
                <em>DMBOK</em>
              </a>
              : while in the document, select "Print to PDF" then specify the
              page range of the chapter you’re studying. That way, when you take
              the exam, you can have just that chapter open so you’re not
              scrolling through hundreds of pages!"
            </p>
            <p style={{ textAlign: "right", marginBottom: "0px" }}>
              - <strong>Jeff Johnson</strong>
            </p>
          </div>

          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Master & Reference Data Management
          </p>
          <p>
            A Specialist Exam that's great for data practitioners aspiring to
            leadership roles. To prep for the Master & Reference Data Management
            exam, we recommend the following resources:
          </p>
          {books.map((book) =>
            book.topic === "Master & Reference Data Management" ? (
              <BookCard bookObj={book} />
            ) : null
          )}
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
              "The practice exams that come with the test purchase are the best.
              And you can retake them as many times as you want. Each time you
              retake, at least half the questions are newly generated.{" "}
            </p>
            <p>
              "There are a few questions on the exams that are not anywhere in
              the book. Skip them and go back to them at the end (you can mark
              questions for review). By the time you go back, you may be able to
              figure out the answer or have found something in another question
              that helped.
            </p>
            <p>
              "Definitely don’t count on looking every question up. You won’t
              have time. Of the 100 I probably looked up 20 or so. I went
              through the test questions twice.
            </p>
            <p>
              "I took the Fundamentals Exam one day and the two Specialist Exams
              the next - although that was brain numbing so you may want to
              spread them across three days."
            </p>
            <p style={{ textAlign: "right", marginBottom: "0px" }}>
              -{" "}
              <a
                href="https://www.facebook.com/groups/cdmpstudygroup/permalink/608947613599997"
                target="_blank"
                rel="noreferrer"
              >
                Katrina Waring Castillo
              </a>
              ,
            </p>
            <p style={{ textAlign: "right" }}>
              Master & Reference Data and Data Warehousing & Business
              Intelligence
            </p>
          </div>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Data Integration & Interoperability
          </p>
          <p>
            A lesser studied topic, but perhaps it's the right fit for you? To
            prep for the Data Integration & Interoperability exam, we recommend
            the following resources:
          </p>
          {books.map((book) =>
            book.topic === "Data Integration & Interoperability" ? (
              <BookCard bookObj={book} />
            ) : null
          )}
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Data Warehousing & Business Intelligence
          </p>
          <p>
            To wrap up this list, here are our recommendations to prep for the
            Data Warehousing & Business Intelligence exam:
          </p>
          {books.map((book) =>
            book.topic === "Data Warehousing & Business Intelligence" ? (
              <BookCard bookObj={book} />
            ) : null
          )}
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
            If you benefited from these book summaries, you may consider
            purchasing the{" "}
            <Link to="/product/specialist-exam-guides">
              Specialist Exam Guides
            </Link>{" "}
            that offer detailed insights for each of the books outlined here
            along with{" "}
            <strong>
              key concepts, best practices, and real world examples
            </strong>{" "}
            for every{" "}
            <a href="https://cdmp.info/exams/" target="_blank" rel="noreferrer">
              Specialist Exam
            </a>{" "}
            topic.
          </p>
          <p>
            As a reminder, you must pass the{" "}
            <Link to="/resources/cdmp">CDMP Fundamentals Exam</Link> with at
            least a 70% in order to continue to the CDMP Specialist Exams.
            Attaining a 70% on all three tests is required for recognition as a
            CDMP Practitioner. To attain the CDMP Master certificate, you must
            pass all three exams with a score of at least 80%.
          </p>
          <p>
            Another distinction between these two certification levels is the
            amount of relevant experience required: DAMA recognizes CDMP
            Practitioners as anyone with{" "}
            <strong>2-10 years of Data Management experience</strong>. DAMA
            grants the CDMP Master certification to those with{" "}
            <strong>10+ years of experience</strong>. You can also continue on
            to pursuing the <strong>CDMP Fellow certification</strong> through{" "}
            <strong>
              contributions to DAMA and the broader Data Management community
            </strong>
            .
          </p>
          <p>
            Let us know your experience with the Specialist Exams by posting in
            the{" "}
            <a
              href="https://www.facebook.com/groups/346145433213551/"
              target="_blank"
              rel="noreferrer"
            >
              CDMP Study Group
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
