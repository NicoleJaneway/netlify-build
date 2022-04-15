import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import storm from "../img/storm.jpeg";
import crossedArms from "../img/crossed-arms2.jpeg";
import oath from "../img/oath.png";
import Li from "../img/add-to-Li.png";
import ironRing from "../img/iron-ring.png";

import PostAuthorCard from "../components/PostAuthorCard";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "oath");

export default function OathPost() {
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
        <meta name="og:image" content={crossedArms} />
        <meta name="og:image:alt" content="man with crossed arms" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={crossedArms} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title" style={{ marginBottom: "0.2em" }}>
          Are we ready for an Oath for Data Practitioners?
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            Just as we have best practices for setting up a database or creating
            a machine learning model, Data Practitioners should be bound to a
            set of rules when it comes to ethical conduct.
          </p>
          <figure>
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
          <p>
            The consequences of working with data extend far beyond optimizing
            query speed, creating a streamlined data pipeline, or attaining a
            certain level of predictive performance. In this article, we explore
            a potential path towards creating an oath of ethics for Data
            Practitioners.
          </p>
          <p>
            The objective of the{" "}
            <Link to="/oath/data-practitioner">Data Practitioner's Oath</Link>{" "}
            is to establish a standard for ethical practice across the
            profession. Our team at Data Strategy Professionals is hopeful this
            will reduce instances of questionable data usage and machine
            learning malpractice.
          </p>
          <p>
            To inform the creation of the{" "}
            <Link to="/oath/data-practitioner">Data Practitioner's Oath</Link>,
            we looked into the history of professional oaths in other fields,
            such as medicine, engineering, and accounting. This write-up will
            also address the implementation details and potential impact of the
            oath.
          </p>
          <p style={{ marginBottom: "0em" }}>In this article:</p>
          <ol style={{ marginBottom: "1em" }}>
            <li>History of Professional Oaths</li>
            <li>An Oath for Data Practitioners?</li>
            <li>Implementation of the Data Practitioner's Oath</li>
          </ol>
          <p>
            We invite your{" "}
            <a
              href="https://github.com/DataStrategyPros/oath"
              target="_blank"
              rel="noreferrer"
            >
              contributions
            </a>{" "}
            to the Data Practitioner's and Data Scientist's Oaths. Please submit
            your edits and suggestions via{" "}
            <a
              href="https://github.com/DataStrategyPros/oath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            or by{" "}
            <a href="mailto:nicolejaneway@datastrategypros.com?subject=Data%20Practitioner%27s%20Oath">
              emailing the Community Organizer
            </a>
            .
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            History of Professional Oaths
          </p>
          <p>
            Ethical commitments in the tradition of western medicine date back
            over 2000 years. The physicians' Hippocratic Oath is one of the
            oldest and certainly the most famous:{" "}
          </p>
          <blockquote>
            <p>
              I swear to fulfill, to the best of my ability and judgment, this
              covenant:{" "}
            </p>
            <em>
              <p>
                I will respect the hard-won scientific gains of those physicians
                in whose steps I walk, and gladly share such knowledge as is
                mine with those who are to follow.
              </p>
              <p>
                I will apply, for the benefit of the sick, all measures
                required, avoiding those twin traps of overtreatment and
                therapeutic nihilism.
              </p>
              <p>
                I will remember that there is art to medicine as well as
                science, and that warmth, sympathy, and understanding may
                outweigh the surgeon's knife or the chemist's drug.
              </p>
              <p>
                I will not be ashamed to say "I know not," nor will I fail to
                call in my colleagues when the skills of another are needed for
                a patient's recovery.
              </p>
              <p>
                I will respect the privacy of my patients, for their problems
                are not disclosed to me that the world may know. Most especially
                must I tread with care in matters of life and death. If it is
                given me to save a life, all thanks. But it may also be within
                my power to take a life; this awesome responsibility must be
                faced with great humbleness and awareness of my own frailty.
                Above all, I must not play at God.
              </p>
              <p>
                I will remember that I do not treat a fever chart, a cancerous
                growth, but a sick human being, whose illness may affect the
                person's family and economic stability. My responsibility
                includes these related problems, if I am to care adequately for
                the sick.
              </p>
              <p>
                I will prevent disease whenever I can, for prevention is
                preferable to cure.
              </p>
              <p>
                I will remember that I remain a member of society, with special
                obligations to all my fellow human beings, those sound of mind
                and body as well as the infirm.
              </p>
            </em>
            <p>
              If I do not violate this oath, may I enjoy life and art, respected
              while I live and remembered with affection thereafter. May I
              always act so as to preserve the finest traditions of my calling
              and may I long experience the joy of healing those who seek my
              help.
            </p>
          </blockquote>
          <p>
            Though aspects of the oath have{" "}
            <a
              href="https://ascopost.com/issues/october-15-2014/relevance-of-the-hippocratic-oath-in-the-21st-century.aspx"
              target="_blank"
              rel="noreferrer"
            >
              diminished in relevance
            </a>{" "}
            since it was created by{" "}
            <a
              href="https://www.discoveringkos.com/destination-item/hippocrates-of-kos-biography/"
              target="_blank"
              rel="noreferrer"
            >
              Hippocrates of Kos
            </a>{" "}
            around 370 BCE, the ancient pledge of medical ethics is used in
            modern graduation ceremonies across western medicine. It is also
            considered one of the most binding documents in history, as well as
            the most famous medical texts.
          </p>{" "}
          <p>
            The text addresses{" "}
            <strong>knowledge sharing, data privacy, and empathy</strong>,
            urging each signatory to treat the sick to the best of his or her
            ability. However, the clause most commonly attributed to
            Hippocrate's oath - "first, do no harm" - does not actually appear
            anywhere in the text. This principle likely evolved from 19th
            century writings, such as{" "}
            <a
              href="https://www.florence-nightingale.co.uk/florence-in-her-own-words-hospital-architecture/"
              target="_blank"
              rel="noreferrer"
            >
              Florence Nightingale
            </a>
            's essay on hospital architecture, which states, "the very first
            requirement [is that] it should do the sick no harm."
          </p>{" "}
          <figure style={{ marginTop: "3em", marginBottom: "3em" }}>
            <img
              src={ironRing}
              alt="man with crossed arms"
              className="box-shadow"
            />
            <figcaption>
              Iron ring via{" "}
              <a
                href="https://ubiquityvc.substack.com/p/the-other-ring-of-commitment-why"
                target="_blank"
                rel="noreferrer"
              >
                Ubiquity Ventures
              </a>
            </figcaption>
          </figure>
          <p>
            In other fields, the commitment to an ethical standard is
            represented in a physical object. This object then serves as a
            constant reminder of the professional's pledge. For example,
            Canadian engineers wear an <strong>iron ring</strong> that they
            receive as part of their graduation ceremony, which is called the
            "Ritual of the Calling of an Engineer:"
          </p>
          <blockquote>
            <p>
              In the presence of these my betters and my equals in my Calling, I
              bind myself upon my Honour and Cold Iron, that, to the best of my
              knowledge and power, I will not henceforward suffer or pass, of be
              privy to the passing of, Bad Workmanship or Faulty Material, in
              aught that concerns my work before mankind as an Engineer, or in
              my dealings with my own Soul before my Maker.
            </p>
            <p>
              My Time I will not refuse; my Thought I will not grudge; my Care I
              will not deny, towards the honour, use, stability and perfection
              of any works to which I may be called to set my hand.
            </p>
            <p>
              My Fair Wages for that work I will openly take. My Reputation in
              my Calling I will honorably guard; but I will in no way go about
              to compass or wrest judgment or gratification from anyone with
              whom I may deal. And further, I will early and warily strive my
              uttermost against professional jealousy and the belittling of my
              working-colleagues in any field of their labor.
            </p>
            <p>
              For my assured Failures and Derelictions, I ask pardon beforehand
              of my betters and my equals in my Calling here assembled; praying
              that in the hour of my temptations, weakness and weariness, the
              memory of this my Obligation and the company before whom it was
              entered into, may return to me to aid, comfort and restrain.
            </p>
          </blockquote>{" "}
          <p>
            {" "}
            <a
              href="https://exhibits.library.utoronto.ca/exhibits/show/engineering-buildings/haultain-building/h-e-t--haultain"
              target="_blank"
              rel="noreferrer"
            >
              H. E. T. Haultain
            </a>
            , a mining engineering professor at the University of Toronto
            proposed the iron ring as a symbol to accompany the ceremony. The
            ring is to be worn on the pinky finger of the engineer's working
            hand, a visible manifestation of the ethical commitment.
          </p>
          <p>
            Within the profession of accounting, new entrants have the option to
            pledge a ceremonial oath before beginning their work, but the
            tradition varies across educational institutions.
          </p>
          <figure style={{ marginTop: "3em", marginBottom: "3em" }}>
            <img src={storm} alt="storm over mountain" className="box-shadow" />
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@nobleshots"
                target="_blank"
                rel="noreferrer"
              >
                Kevin Noble
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/kLwR2_BmMZI"
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
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            An Oath for Data Practitioners?
          </p>
          <p>
            It's been almost a decade since HBR's 2012 pronouncement of Data
            Science as "
            <a
              href="https://medium.com/r/?url=https%3A%2F%2Fhbr.org%2F2012%2F10%2Fdata-scientist-the-sexiest-job-of-the-21st-century"
              target="_blank"
              rel="noreferrer"
            >
              the sexiest job of the 21st century
            </a>
            ." In the intervening years, breakthrough technologies and ever
            increasing data access have continued to foment the impact of
            data-related professions.
          </p>
          <p>
            These trends necessitate the need for more robust data ethics in
            education and practice. While data-related professions may lack a
            2,000+ year tradition, the field would still benefit from a
            standardized ethical commitment along the lines of the Hippocratic
            Oath.
          </p>
          <p>
            The patchwork of laws and regulations related to data use and data
            privacy falls short of protecting the modern citizen. Legal
            frameworks tend to lag the actual capabilities of related
            technologies. Moreover, they're essentially useless unless the
            involved parties choose to follow and enforce them.
          </p>
          <figure style={{ marginTop: "3em", marginBottom: "3em" }}>
            <img src={oath} alt="oath" className="box-shadow" />
            <figcaption>Data Practitioner's Oath certification</figcaption>
          </figure>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Implementation of the Data Practioner's Oath
          </p>
          <p>
            Education of data practitioners is wildly decentralized compared to
            medicine, engineering, or accounting. In contrast to fields where
            only formal education can certify a student, data-related jobs are
            held by folks with a variety of educational backgrounds, which may
            include academics, vocational training, and/or self-learning.
          </p>
          <p>
            Therefore, ensuring broad exposure to the{" "}
            <Link to="/oath/data-practitioner">Data Practitioner's Oath</Link>{" "}
            presents a challenge. Making sure that university students and
            vocational learners have the opportunity to attest to the oath seems
            like a good first step. But more options are needed in order to
            reach the broad swath of data practitioners.
          </p>
          <p>
            Given that today' certifications revolve around recognition on
            social media, Data Strategy Professionals provides a straightforward
            way for data practitioners to proudly acknowledge their attestation
            to the ethical commitment on LinkedIn. The certificate indicating
            signature of the oath could be displayed alongside certifications
            related to data management, deep learning, cloud computing, and
            other accouterments of a full stack Data Scientist.
          </p>
          <figure style={{ marginTop: "3em", marginBottom: "3em" }}>
            <Link to="/oath/data-practitioner">
              <img src={Li} alt="oath" className="box-shadow" />
            </Link>
            <figcaption>
              Click to add the{" "}
              <Link to="/oath/data-practitioner">certification</Link> to your
              LinkedIn profile
            </figcaption>
          </figure>
          <p>
            If you found this article thought-provoking, consider signing on to
            the{" "}
            <Link to="/oath/data-practitioner">Data Practitioner's Oath</Link>.
          </p>
          <br />
          <PostAuthorCard />
        </div>
      </div>
    </>
  );
}
