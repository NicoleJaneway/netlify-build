import { useEffect } from "react";
import { Helmet } from "react-helmet";

import PostAuthorCard from "../components/PostAuthorCard";

import posts from "../data/posts";

const post = posts.find((post) => post.nickname === "data-warehouse");

export default function Warehouse() {
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
        <meta name="og:image:alt" content="Jeep on safari" />
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
          Comprehensive Guide to the Data Warehouse
        </p>
        <div className="blog">
          <p style={{ fontSize: "1.1em" }}>
            Data analysis can’t start until the data cleaning process is
            complete. Learn about the role of the data warehouse as a repository
            of analysis-ready datasets.
          </p>
          <figure>
            <img
              src="https://miro.medium.com/max/1400/0*aLkxYbRSp_z13uS6"
              alt="safari"
              className="box-shadow"
            />
            <figcaption>
              Hunting for clean data in the enterprise setting. Photo by{" "}
              <a href="https://unsplash.com/@huchenme?utm_source=medium&amp;utm_medium=referral">
                Hu Chen
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
              .
            </figcaption>
          </figure>
          <p>
            If you work with data, it’s valuable to have some idea of
            fundamental data warehouse concepts. Most of the work we do involves
            adding value on top of datasets that need to be clean and readily
            comprehensible. For a dataset to reach that stage of its lifecycle,
            it has already passed through many components of data architecture
            and, hopefully, many data quality filters. This is how we avoid the
            unfortunate situation wherein a data analyst or data science team
            ends up spending 80% of their time on data wrangling.
          </p>

          <p>
            Let’s take some time to deepen our appreciation of the data
            architecture process by learning about various considerations
            relevant to setting up a data warehouse.
          </p>
          <p>
            The <strong>data warehouse</strong> is a specific infrastructure
            element that provides down-the-line users, including{" "}
            <a
              href="https://medium.com/data-analyst-vs-data-scientist-2534fc1057c3"
              target="_blank"
              rel="noreferrer"
            >
              data analysts and data scientists
            </a>
            , access to data that has been shaped to conform to business rules
            and is stored in an easy-to-query format.
          </p>
          <p>
            The data warehouse typically connects information from multiple
            “source-of-truth” transactional databases, which may exist within
            individual business units. In contrast to information stored in a
            transactional database, the contents of a data warehouse are
            reformatted for speed and ease of querying.
          </p>
          <p>
            The data must conform to specific business rules that validate
            quality. Then it is stored in a <em>denormalized</em> structure —
            that means storing together pieces of information that will likely
            be queried together. This serves to increase performance by
            decreasing the complexity of queries required to get data out of the
            warehouse (i.e., by reducing the number of data joins).
          </p>
          <p style={{ marginBottom: "0" }}>In this guide:</p>
          <ol style={{ marginBottom: "3em" }}>
            <li>Architecting the Data Warehouse</li>
            <li>Enhancing Performance and Adjusting Size</li>
            <li>Related Data Storage Options</li>
            <li>Working with Big Data</li>
            <li>Extract, Transform, Load (ETL)</li>
            <li>Getting Data out of the Warehouse</li>
            <li>Data Archiving</li>
            <li>Summary</li>
          </ol>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Architecting the Data Warehouse
          </p>
          <p>
            In the process of developing the{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/four-4-step-design-process/"
              target="_blank"
              rel="noreferrer"
            >
              <em>dimension model</em>
            </a>{" "}
            for the data warehouse, the design will typically pass through three
            stages: (1) business model, which generalizes the data based on
            business requirements, (2) logical model, which sets the column
            types, and (3) physical model, which represents the actual design
            blueprint of the relational data warehouse.
          </p>
          <p>
            Because the data warehouse will contain information from across all
            aspects of the business, stakeholders must agree in advance to the{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/grain/"
              target="_blank"
              rel="noreferrer"
            >
              <em>grain</em>
            </a>{" "}
            (i.e. level of granularity) of the data that will be stored.
          </p>
          <p>
            Reminder to{" "}
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2012/05/DT108_WhenDimensionalModelDone.pdf"
              target="_blank"
              rel="noreferrer"
            >
              validate
            </a>{" "}
            the model across various stakeholder groups before implementation.
          </p>

          <figure>
            <img
              alt=""
              src="https://miro.medium.com/max/700/1*pxcXhzaGhIMZQlUhrZocfQ.jpeg"
              className="box-shadow"
            />
            <figcaption>
              A sample star schema for a hypothetical safari tours business.
            </figcaption>
          </figure>

          <p>
            The underlying structure in the data warehouse is commonly referred
            to as the{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/star-schema-olap-cube/"
              target="_blank"
              rel="noreferrer"
            >
              <em>star schema</em>
            </a>{" "}
            — it classifies information as either a dimension or fact (i.e.,
            measure). The{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/facts-for-measurement/"
              target="_blank"
              rel="noreferrer"
            >
              <em>fact table</em>
            </a>{" "}
            stores observations or events (i.e. sales, orders, stock balances,
            etc.) The{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/dimensions-for-context/"
              target="_blank"
              rel="noreferrer"
            >
              <em>dimension tables</em>
            </a>{" "}
            contain descriptive information about those facts (i.e. dates,
            locations, etc.)
          </p>
          <p>
            There are three different types of fact tables: (1) transactional
            for records at the standardized grain, (2) periodic for records that
            fall within a given time frame, (3) cumulative for records that fall
            within a given business process.
          </p>
          <p>
            In addition to the star schema, there’s also the option to arrange
            data into the{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/snowflake-dimension/"
              target="_blank"
              rel="noreferrer"
            >
              <em>snowflake schema</em>
            </a>
            . The difference here is that each dimension is normalized.
          </p>
          <blockquote>
            <p>
              <strong>Normalization</strong> is a database design technique for
              creating records that contain an atomic level of information.
            </p>
          </blockquote>
          <p style={{ marginBottom: "3em" }}>
            However, the snowflake schema adds unnecessary complexity to the
            dimension model — usually the star schema will suffice.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Enhancing Performance and Adjusting for Size
          </p>
          <p>
            In addition to understanding how to structure the data, the person
            designing the data warehouse should also be familiar with how to
            improve performance.
          </p>
          <p>
            One performance-enhancing technique is to create a{" "}
            <em>clustered index</em> on the data in the order it is typically
            queried. So for example, we might choose to organize the fact table
            by TourDate descending, so the tours that are coming up next will be
            shown first in the table. Setting up a clustered index reorders the
            way the records are physically stored, promoting speed of retrieval.
            In addition to an optional, single clustered index, a table can also
            have multiple non-clustered indices that won’t impact how the table
            is physically stored, but rather create additional copies in memory.
          </p>
          <p>
            Another performance enhancement involves splitting up very large
            tables into multiple smaller parts. This is called{" "}
            <em>partitioning</em>. By splitting a large table into smaller,
            individual tables, queries that need access to only a fraction of
            the data can run faster. Partitioning can be either vertical
            (splitting up columns) or horizontal (splitting up rows).{" "}
            <a
              href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/microsoft-data-warehouse-dw-toolkit-2005/"
              target="_blank"
              rel="noreferrer"
            >
              Here’s a link
            </a>{" "}
            where you can download an .rtf file containing{" "}
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2014/03/tablepartitioning.rtf"
              target="_blank"
              rel="noreferrer"
            >
              partitioning script
            </a>{" "}
            for SQL along with other database architecture resources like a{" "}
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2014/03/Ch02-tasklist.xls"
              target="_blank"
              rel="noreferrer"
            >
              project launch and management checklist
            </a>
            .
          </p>
          <figure>
            <img
              alt="giraffe"
              src="https://images.unsplash.com/photo-1528140304883-f8d39a02fc7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <figcaption>
              Yes, I will snag your free resources and helpful tools. Photo by{" "}
              <a
                href="https://unsplash.com/@s1awek?utm_source=medium&amp;utm_medium=referral"
                target="_blank"
                rel="noreferrer"
              >
                Slawek K
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>

          <p>
            Taking total database size into account is another a crucial
            component of tuning performance. Estimating the size of the
            resulting database when designing a data warehouse will help align
            performance with application requirements according to{" "}
            <a
              href="https://www.dbta.com/Columns/DBA-Corner/The-Importance-of-SLAs-110871.aspx"
              target="_blank"
              rel="noreferrer"
            >
              service level agreement (SLA)
            </a>
            . Moreover, it will provide insight into the budgeted demand for
            physical disk space or cost of cloud storage.
          </p>
          <p style={{ marginBottom: "3em" }}>
            To conduct this calculation, simply aggregate the size of each
            table, which{" "}
            <a
              href="https://docs.microsoft.com/en-us/sql/relational-databases/databases/estimate-the-size-of-a-database?view=sql-server-ver15"
              target="_blank"
              rel="noreferrer"
            >
              depends largely on the indexes
            </a>
            . If database size is significantly larger than expected, you may
            need to normalize aspects of the database. Conversely, if your
            database ends up smaller, you can get away with more
            denormalization, which will increase query performance.
          </p>

          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Related Data Storage Options
          </p>
          <p>
            The data in a data warehouse can be reorganized into smaller
            databases to suit the needs of the organization. For example, a
            business unit might create a <em>data mart</em>, with information
            specific to their department. This read-only info source provides
            clarity and accessibility for business users who might be a little
            further from the technical details of data architecture.{" "}
            <a
              href="https://www.kimballgroup.com/1999/12/the-matrix/"
              target="_blank"
              rel="noreferrer"
            >
              Here’s a planning strategy to deploy when creating a data mart
            </a>
            .
          </p>
          <p>
            Similarly, an <em>operational data store (ODS)</em> can be set up
            for operational reporting. The{" "}
            <a
              href="https://www.dataentryoutsourced.com/blog/ever-changing-master-data-management/"
              target="_blank"
              rel="noreferrer"
            >
              <em>Master Data Management (MDM) system</em>
            </a>{" "}
            stores information about unique business assets (i.e., customers,
            suppliers, employees, products, etc.)
          </p>
          <p style={{ marginBottom: "3em" }}>
            Read more about the{" "}
            <a
              href="https://www.kimballgroup.com/2014/01/design-tip-162-leverage-data-visualization-tools-but-avoid-anarchy/"
              target="_blank"
              rel="noreferrer"
            >
              risks of overutilizing data visualization tools
            </a>{" "}
            for business intelligence.
          </p>

          {/* <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Working with Big Data
          </p>
          <p>
            To handle big data, a data architect might chose to implement a tool
            such as{" "}
            <a
              href="https://hadoop.apache.org/"
              target="_blank"
              rel="noreferrer"
            >
              <em>Apache Hadoop</em>
            </a>
            . Hadoop was based on the{" "}
            <a
              href="https://research.google/pubs/pub62/"
              target="_blank"
              rel="noreferrer"
            >
              MapReduce technique developed by Google
            </a>{" "}
            to index the world wide web and was released to the public in 2006.
            In contrast to the highly structured environment of the data
            warehouse, where information has already been validated upstream to
            conform to business rules, Hadoop is a software library that accepts
            a variety of data types and allows for distributed processing across
            clusters of computers. Hadoop is often used to process streaming
            data.
          </p>
          <p>
            While Hadoop is able to quickly process streaming data, it struggles
            with query speed, complexity of queries, security, and
            orchestration. In recent years, Hadoop has been falling out of favor
            as cloud-based solutions (e.g.,{" "}
            <a
              href="https://aws.amazon.com/kinesis/"
              target="_blank"
              rel="noreferrer"
            >
              Amazon Kinesis
            </a>
            ) have risen to prominence — offering the same gains in terms of
            speed for processing unstructured data while integrating with other
            tools in the cloud ecosystem that address these potential
            weaknesses.
          </p>
          <p style={{ marginBottom: "3em" }}>
            Read more about{" "}
            <a
              href="https://www.kimballgroup.com/2014/01/design-tip-162-leverage-data-visualization-tools-but-avoid-anarchy/"
              target="_blank"
              rel="noreferrer"
            >
              how to approach the implementation of “new” database technologies
            </a>
            .
          </p> */}

          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Extract, Transform, Load (ETL)
          </p>
          <p>
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2013/08/Kimball-ETL-Extract-Subsystems1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <em>Extraction</em>
            </a>
            ,{" "}
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2013/08/Kimball-ETL-Transformation-Subsystems1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <em>transformation</em>
            </a>
            , and{" "}
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2013/08/Kimball-ETL-Load-Subsystems1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <em>load</em>
            </a>{" "}
            define the process of moving the data out of its original location
            (E), doing some form of transformation (T), then loading it (L) into
            the data warehouse. Rather than approach the ETL pipeline in an ad
            hoc, piecemeal fashion, database architect should look to{" "}
            <a
              href="https://link.springer.com/article/10.1007/s00778-017-0477-2"
              target="_blank"
              rel="noreferrer"
            >
              implement a systematic approach
            </a>{" "}
            that takes into account best practices around design considerations,
            operational issues, failure points, and recovery methods. See also
            this{" "}
            <a
              href="https://www.kimballgroup.com/2007/10/subsystems-of-etl-revisited/"
              target="_blank"
              rel="noreferrer"
            >
              helpful resource for setting up an ETL pipeline
            </a>
            .
          </p>
          <p>
            Documentation for ETL includes creating{" "}
            <em>source-to-target mapping:</em> the set of transformation
            instructions on how to convert the structure and content of data in
            the source system to the structure and content of the target system.{" "}
            <a
              href="http://www.kimballgroup.com/wp-content/uploads/2014/03/Ch07_ETL_Specification_ToC.docx"
              target="_blank"
              rel="noreferrer"
            >
              Here’s a sample template for this step
            </a>
            .
          </p>
          <p style={{ marginBottom: "3em" }}>
            <a
              href="https://www.youtube.com/watch?v=IF5YrYiV0sA"
              target="_blank"
              rel="noreferrer"
            >
              Your organization might also consider ELT
            </a>{" "}
            — loading the data without any transformations, then using the power
            of the destination system (usually a cloud-based tool) to conduct
            the transform step.
          </p>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            <strong>Getting Data Out of the Warehouse</strong>
          </p>
          <p>
            Once the data warehouse is set up, users should be able to easily
            query data out of the system. A little education might be required
            to optimize queries, focusing on:
          </p>
          <ul style={{ marginBottom: "3em" }}>
            <li>
              <a
                href="https://mode.com/sql-tutorial/sql-performance-tuning/"
                target="_blank"
                rel="noreferrer"
              >
                Tuning a complex query
              </a>
            </li>
            <li>
              <a
                href="https://www.sqlshack.com/execution-plans-in-sql-server/"
                target="_blank"
                rel="noreferrer"
              >
                Using an execution plan
              </a>
            </li>
            <li>
              <a
                href="https://mode.com/sql-tutorial/sql-performance-tuning/#making-joins-less-complicated"
                target="_blank"
                rel="noreferrer"
              >
                Understanding join mechanisms
              </a>
            </li>
            <li>
              <a
                href="https://docs.microsoft.com/en-us/sharepoint/administration/storage-and-sql-server-capacity-planning-and-configuration"
                target="_blank"
                rel="noreferrer"
              >
                Understand memory / disk / IO usage considerations
              </a>
            </li>
            <li>
              <a
                href="https://www.red-gate.com/simple-talk/sql/learn-sql-server/understanding-and-using-parallelism-in-sql-server/"
                target="_blank"
                rel="noreferrer"
              >
                Using parallelism
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/pulse/step-by-step-guide-creating-sql-hierarchical-queries-bibhas-mitra/"
                target="_blank"
                rel="noreferrer"
              >
                Writing hierarchical queries
              </a>
            </li>
          </ul>
          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Data Archiving
          </p>

          <p>
            Finally, let’s talk about optimizing your organization’s{" "}
            <a
              href="https://searchdatabackup.techtarget.com/definition/data-archiving"
              target="_blank"
              rel="noreferrer"
            >
              <em>data archiving</em>
            </a>{" "}
            strategy. Archived data remains important to the organization and is
            of particular interest to data scientists looking to conduct
            regression using historical trends.
          </p>

          <figure>
            <img
              src="https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="elephant"
            />
            <figcaption>
              Photo by{" "}
              <a
                href="https://www.pexels.com/@pixabay"
                target="_blank"
                rel="noreferrer"
              >
                Pixabay
              </a>{" "}
              on{" "}
              <a
                href="https://www.pexels.com/photo/animal-wildlife-elephant-ivory-70080/"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </figcaption>
          </figure>

          <p style={{ marginBottom: "3em" }}>
            The data architect should plan for this demand by relocating
            historical data that is no longer actively used into a separate
            storage system with higher latency but also robust search
            capabilities. Moving the data to a less costly storage tier is an
            obvious benefit of this process. The organization can also gain from
            removing write access from the archived data, protecting it from
            modification.
          </p>

          <p
            style={{
              fontSize: "1.2em",
              marginBottom: "0.2em",
              fontWeight: "600",
            }}
          >
            Summary
          </p>
          <p>
            This article covers tried and true practices for setting up a data
            warehouse. Let me know how you’re using this information in your
            work by dropping a comment.
          </p>
          <figure>
            <img
              src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="lion"
            />
            <figcaption>
              Follow these steps and you’ll end up as the king of the data
              jungle. Photo by{" "}
              <a
                href="https://www.pexels.com/@pixabay"
                target="_blank"
                rel="noreferrer"
              >
                Pixabay
              </a>{" "}
              on{" "}
              <a
                href="https://www.pexels.com/photo/close-up-portrait-of-lion-247502/"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </figcaption>
          </figure>

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
