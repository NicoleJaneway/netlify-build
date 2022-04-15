import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import BreakingAd from "../components/BreakingAd";
import PostAuthorCard from "../components/PostAuthorCard";
import DSPproducts from "../components/DSPproducts";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "data-science");

export default function DataScience() {
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
        <meta name="og:image" content={post.image} />
        <meta name="og:image:alt" content="woman entering building" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>
      <div className="home-layout">
        <p className="title" style={{ marginBottom: "0.2em" }}>
          An Introduction to Data Science for Technology Leaders
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            Leverage machine learning capabilities to fulfill your
            organization’s mission statement.
          </p>
          <p>
            <figure>
              <img
                src="https://miro.medium.com/max/2000/1*fZovDHtXZptukm5nIieivA.jpeg"
                alt=""
              />
              <figcaption>
                Photo by{" "}
                <a href="https://www.pexels.com/@dana-tentis-118658?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">
                  Dana Tentis
                </a>{" "}
                from{" "}
                <a href="https://www.pexels.com/photo/woman-wearing-black-dress-pants-with-black-handbag-671803/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">
                  Pexels
                </a>
              </figcaption>
            </figure>
          </p>
          <p>
            Increasingly, Data Science is recognized as a key capability for
            capitalizing on data as a strategic resource. In this article, we
            outline how leaders in Data Management and Information Technology
            can use Data Science and Machine Learning to open the door to new
            opportunities.
          </p>
          <p>
            <strong>
              Data Science can unlock complex patterns in large datasets,
              including text and images
            </strong>
            . Organizations can use tools based in Machine Learning to
            revolutionize operations, ways of working, and interactions with
            customers and constituents.
          </p>
          <p>
            Here, we demystify Data Science so that decision makers can clearly
            understand how to leverage this field to meet their needs.
          </p>
          <p style={{ marginBottom: "0em" }}>
            <strong>Contents:</strong>
          </p>
          <ul style={{ marginBottom: "3em" }}>
            <li>Getting Started</li>
            <li>The Data Science Team</li>
            <li>Considerations</li>
            <li>Statistical Techniques</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Summary</li>
          </ul>
        </div>
        <BreakingAd />
        <div className="blog">
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Getting Started
          </p>
          <p>
            When an organization begins thinking about{" "}
            <strong>data as a strategic asset</strong>, it gains the capability
            to experiment, to speak a common language across functions, and to
            better serve its customers. Data Science provides the information
            and tools to enable these milestones.
          </p>
          <p>
            As an organization’s <strong>data maturity</strong> increases, it
            informs a shift from basic reporting to{" "}
            <strong>predictive analytics</strong>. Data scientists use
            statistical methods and algorithms to derive predictive insight from
            large quantities of data. These modeling techniques can help an
            organization attain <strong>data-driven decision making</strong>.
          </p>
          <p>
            <strong>Machine Learning</strong> represents the subfield of Data
            Science that uses <strong>artificial neural networks</strong> to
            identify complex relationships in data. This discipline holds the
            promise to deliver advanced data products such as chatbots, text
            synthesis, and image recognition.
          </p>
          <p>
            Through Data Science and Machine Learning, organizations can operate
            more efficiently. These domains improve employee satisfaction by
            reducing manual, tedious tasks and freeing up more time for
            value-added work. Moreover, an initiative that leverages these
            techniques can produce tools to dramatically improve customer
            service.
          </p>
          <p>
            Whether your organization has advanced data capabilities or is just
            getting started in this space, you’ll need to think carefully about
            how your team is structured in order to empower data scientists to
            do their best work.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            The Data Science Team
          </p>
          <p>
            In order for a Data Science initiative to be successful, the
            organization must be committed to good data management practices
            across the board. This includes foundational{" "}
            <strong>training in data literacy</strong>,{" "}
            <strong>data quality reporting processes</strong>, and the
            establishment of a <strong>data governance charter</strong> and
            supporting institutions, such as a{" "}
            <strong>data governance council</strong>.{" "}
            <a href="https://medium.com/data-strategy-716059d5c066">
              <em>Read more about how to initiate Data Strategy</em>
            </a>
            <em>.</em>
          </p>
          <figure>
            <img
              src="https://miro.medium.com/max/1400/1*KgE1HPPUFRrzndlsr0lj9g.jpeg"
              alt="hands stacked over table"
            />
            <figcaption>
              via <a href="https://drop.studio/">DROP</a>
            </figcaption>
          </figure>
          <p>
            As an advanced function, Data Science is enabled by supporting teams
            such as{" "}
            <a href="https://medium.com/atlas-research/data-science-team-eae84b1af65d#f205">
              Human Centered Design
            </a>
            ,{" "}
            <a href="https://medium.com/atlas-research/data-science-team-eae84b1af65d#155d">
              DataOps
            </a>
            , and{" "}
            <a href="https://medium.com/atlas-research/data-science-team-eae84b1af65d#a352">
              DevSecOps
            </a>
            .
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              <strong>Human Centered Design</strong>: responsible for ensuring
              the end user is at the center of solutions developed by the Data
              Scientists. They conduct interviews, construct customer personas,
              and help translate business needs into technical requirements.
            </li>
            <li>
              <strong>DataOps</strong>: responsible for data architecture and
              engineering. This group is tasked with maintaining high quality
              data that flows from transactional data sources to the endpoints
              such as data warehouses where it can be accessed by business
              units, data analysts, and data scientists. Data quality issues
              should be addressed through a formal process that reports issues
              to the DataOps team so that the issue can be rectified at its
              source.
            </li>
            <li>
              <strong>DevSecOps</strong>: responsible for creating the pipelines
              that move data through the organization and deliver data products
              to the end user, while maintaining focus on data security. This
              team should be comfortable working with infrastructure as code,
              the process of maintaining and provisioning servers based on
              programmable requirements.
            </li>
          </ul>
          <p>
            <a
              href="https://medium.com/atlas-research/data-science-team-eae84b1af65d"
              target="_blank"
              rel="noreferrer"
            >
              <em>
                Read more about empowering Data Science with an effective team
              </em>
            </a>
            .
          </p>
          <p>
            Supported by these teams, data scientists can capitalize on insights
            latent within an organization’s data sources. The work of a data
            scientist is distinguished from that of a data analyst by the use of
            computer programming (typically in the languages <strong>R</strong>{" "}
            or <strong>Python</strong>) and statistical methodologies to conduct
            hypothesis testing, produce advanced analytics, and generate
            predictive insight.
          </p>
          <p>
            Machine learning engineers work with large datasets typically
            composed of <strong>labeled training examples</strong>. The data
            could come from an organization’s transactional database, or it
            could be text or images. After data preparation, the machine
            learning engineer passes the training data into a neural network, a
            complex mathematical model composed of inputs, weights and biases,
            an activation function, etc. These components form layers of neurons
            — much like the natural neural network upon which this computing
            metaphor is based.
          </p>
          <p>
            Machine Learning results in impressive data products such as
            chatbots, image recognition tools, recommendation engines, and many
            more applications. These capabilities may be referred to
            collectively as artificial intelligence.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Considerations
          </p>
          <p>
            Here are some questions to ask as your team considers the
            implementation of Data Science.
          </p>
          <strong>Is my organization ready?</strong>
          <p>
            Not all challenges can or should be addressed by advanced
            statistical techniques. A data scientist is not needed, for example,
            to perform a basic linear regression or ANOVA, features inbuilt into{" "}
            <a href="https://www.excel-easy.com/examples/regression.html">
              Microsoft Excel
            </a>{" "}
            and{" "}
            <a href="https://help.tableau.com/current/pro/desktop/en-us/trendlines_add.htm">
              other business intelligence tools
            </a>
            .
          </p>
          <strong>Do we have a sufficient quantity of data?</strong>
          <p>
            Generally speaking, Data Science, particularly Machine Learning,
            requires a very large dataset. As a rule of thumb, 5,000
            observations per category is required to obtain good performance
            from a neural network. Upwards of 10,000 observations per category
            is required to match human performance.
          </p>
          <strong>Is this model better than the baseline?</strong>
          <p>
            Data scientists should always compare their work against benchmarks.
            Before building a statistical or machine learning approach, the Data
            Science team should evaluate the quality of results achieved from
            naive methodology such as:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>Taking an average of past outcomes</li>
            <li>Projecting the most recent observations forward in time</li>
            <li>Using linear regression</li>
          </ul>
          <p>
            This way, the team will have three benchmarks to compare their work
            against.
          </p>
          <p>
            Model development should then proceed in order of increasing
            complexity. If a neural network (<em>high complexity</em>) doesn’t
            significantly outperform a random forest (
            <em>moderate complexity</em>
            ), then modeling efforts should focus on the random forest. This
            approach reduces unnecessary complexity in order to save on runtime
            and compute power.
          </p>
          <h2 id="where-should-we-incorporate-humans-into-the-loop-">
            Where should we incorporate humans into the loop?
          </h2>
          <p>
            Data Science doesn’t take place in a vacuum — decision makers should
            carefully consider where and how to integrate human experts into the
            workflow.
          </p>
          <p>
            In{" "}
            <a href="https://amzn.to/3pKFDtG">
              <em>The Signal and The Noise</em>
            </a>
            <em>,</em> Nate Silver of{" "}
            <a href="https://fivethirtyeight.com/">FiveThirtyEight</a> fame
            describes how{" "}
            <a href="https://fivethirtyeight.com/features/the-imperfect-pursuit-of-a-perfect-baseball-forecast/">
              baseball scouts
            </a>{" "}
            represent the hybrid model that combines statistics and human
            intuition. In Silver’s experience, the scouts outperformed the
            statistical models, which isn’t surprising because scouts use
            quantitative analysis as well additional sources of information,
            such as their sense of the athlete’s mental preparedness, in order
            to make their judgments.
          </p>
          <p>
            Humans still have an important role to play in tuning models,
            determining where their use is appropriate, and interpreting
            outputs.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Statistical Techniques
          </p>
          <p>
            Data Science encompasses statistical techniques that began with the
            invention of{" "}
            <a href="https://priceonomics.com/the-discovery-of-statistical-regression/">
              regression analysis
            </a>{" "}
            in the early 19th century. The field offers a suite of methods to
            assess data, resulting in prediction, classification, and
            clustering.
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              <strong>Regression</strong>: used to predict a continuous
              variable. For example, a healthcare system might deploy a
              regression algorithm using patient data to predict length of stay.
            </li>
            <li>
              <strong>Classification</strong>: used to segment a target variable
              into predetermined categories. For example, a tax bureau might
              conduct anomaly detection by using a logistic model to classify
              returns as fraudulent or not fraudulent.
            </li>
            <li>
              <strong>Clustering</strong>: used to create groupings from
              unlabeled data. For example, clustering could be used to better
              understand connections within a transaction dataset, thereby
              enabling investigators to detect money laundering.
            </li>
          </ul>
          <p>
            Rather than build on formalized business logic rules (i.e. Robotic
            Process Automation [<strong>RPA</strong>]), Data Science is
            constructed from statistical methodologies. All these techniques
            involve an element of probability. Data products are highly flexible
            and respond well to the incorporation of more data.
          </p>
        </div>
        <DSPproducts
          products={[
            "Certified Data Management Professional Study Plan",
            "CDMP Fundamentals Notes",
            "CDMP Exam Question Sets",
          ]}
        />
        <div className="blog">
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Natural Language Processing
          </p>
          <p>
            One powerful application of Machine Learning is Natural Language
            Processing (<strong>NLP</strong>). Data Scientists can deploy
            state-of-the-art neural networks to turn unstructured text data into
            business insights and user applications. Here are some capabilities
            of NLP:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              <strong>Text Summarization</strong>: used to generate short
              summaries of long documents
            </li>
            <li>
              <strong>Sentence Classification</strong>: automatically categorize
              sentences within a document
            </li>
            <li>
              <strong>Named Entity Recognition</strong>: extract words or
              phrases that represent a concept of interest
            </li>
            <li>
              <strong>Text Regression</strong>: predict numerical values (e.g.,
              prices) from text descriptions
            </li>
            <li>
              <strong>Unsupervised Topic Modeling</strong>: discover latent
              themes buried in large document sets
            </li>
            <li>
              <strong>Document Similarity</strong>: find related documents based
              on thematic similarity
            </li>
            <li>
              <strong>Open-Domain Question-Answering</strong>: submit questions
              to a large text corpus and receive exact answers
            </li>
          </ul>
          <p>
            As an example of how these techniques could be used in the public
            sector, a grant processing organization might use NLP to create
            automatic summaries of applications. A preliminary stage of review
            could intelligently search the application for key terminology,
            taking advantage of a neural network’s capability to understand
            context and leverage synonyms. Finally, the reviewers might use
            document similarity to compare the application against previous
            grant submissions, and then deploy a predictive model to evaluate
            the potential success of the new application.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Computer Vision
          </p>
          <p>
            The field of Computer Vision encompasses all image-related
            capabilities of Machine Learning. Three prominent use cases:
          </p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              <strong>Image Classification</strong>: automatically categorize
              images across various dimensions
            </li>
            <li>
              <strong>Image Detection</strong>: determining whether an image
              contains a specific entity
            </li>
            <li>
              <strong>Image Regression</strong>: predict numerical values from
              photos
            </li>
          </ul>
          <p>
            A defense agency might use these techniques to transform satellite
            images into situational intelligence. Or a local city government
            could use traffic cameras at intersections to better understand
            local patterns in multi-modal transit such as bicycles, scooters,
            and pedestrians. Finally, a manufacturing operation could set up a
            camera to record the output of manual gages on dated equipment,
            using computer vision to turn the images into data.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginTop: "3em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Other Applications
          </p>
          <p>Data Science can also be used to achieve the following:</p>
          <ul style={{ marginBottom: "1em" }}>
            <li>
              <strong>Recommendation engines</strong>: system for predicting
              user preferences. A civic technology app store might use this type
              of algorithm to suggest content on its platform
            </li>
            <li>
              <strong>Reinforcement learning</strong>: iterative approach to
              address challenges such as{" "}
              <a href="https://papers.nips.cc/paper/2018/file/9fb4651c05b2ed70fba5afe0b039a550-Paper.pdf">
                real time vehicle routing
              </a>
            </li>
          </ul>
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
            Investing in Data Science informs gradual maturity from{" "}
            <strong>basic reporting</strong> to{" "}
            <strong>predictive analytics</strong>. The use of algorithms for
            data modeling can help an organization to move past basic business
            intelligence into <strong>predictive analytics</strong> and{" "}
            <strong>Machine Learning</strong>. Ultimately, Data Science can help
            organizations improve their services through streamlined operations,
            advanced insights, and augmented intelligence.
          </p>
          <p style={{ marginBottom: "3em" }}>
            <em>
              Don't forget about the{" "}
              <Link to="/products/data-science-email-bootcamp">
                Data Science Email Bootcamp
              </Link>{" "}
              if you'd like to deepen your capabilities in this field!
            </em>
          </p>
          <PostAuthorCard />
        </div>
      </div>
    </>
  );
}
