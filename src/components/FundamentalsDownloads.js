import { Link } from "react-router-dom";

import products from "../data/products";

export default function FundamentalsDownloads() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <figure style={{ margin: "20px" }}>
        <Link
          to={`/files/CDMP-Fundamentals-Notes.pdf`}
          target="_blank"
          download
        >
          <img
            src={
              products.find(
                (product) => product.name === "CDMP Fundamentals Notes"
              ).img
            }
            alt={
              products.find(
                (product) => product.name === "CDMP Fundamentals Notes"
              ).alt
            }
            style={{ maxWidth: "100px" }}
          />
        </Link>
        <figcaption style={{ fontSize: "0.8em", maxWidth: "105px" }}>
          <Link
            to={`/files/CDMP Fundamentals Notes.pdf`}
            target="_blank"
            download
          >
            CDMP Fundamentals Notes
          </Link>
        </figcaption>
      </figure>
      <figure style={{ margin: "20px" }}>
        <Link to={`/files/CDMP-Question-Set-1.pdf`} target="_blank" download>
          <img
            src={
              products.find(
                (product) => product.name === "CDMP Exam Question Sets"
              ).img
            }
            alt={
              products.find(
                (product) => product.name === "CDMP Exam Question Sets"
              ).alt
            }
            style={{ maxWidth: "100px" }}
          />
        </Link>
        <figcaption style={{ fontSize: "0.8em" }}>
          <Link to={`/files/CDMP-Question-Set-1.pdf`} target="_blank" download>
            Question Set #1
          </Link>
        </figcaption>
      </figure>
      <figure style={{ margin: "20px" }}>
        <Link to={`/files/CDMP-Question-Set-2.pdf`} target="_blank" download>
          <img
            src={
              products.find(
                (product) => product.name === "CDMP Exam Question Sets"
              ).img
            }
            alt={
              products.find(
                (product) => product.name === "CDMP Exam Question Sets"
              ).alt
            }
            style={{ maxWidth: "100px" }}
          />
        </Link>
        <figcaption style={{ fontSize: "0.8em" }}>
          <Link to={`/files/CDMP-Question-Set-2.pdf`} target="_blank" download>
            Question Set #2
          </Link>
        </figcaption>
      </figure>
      <figure style={{ margin: "20px" }}>
        <Link to={`/files/CDMP-Question-Set-3.pdf`} target="_blank" download>
          <img
            src={
              products.find(
                (product) => product.name === "CDMP Exam Question Sets"
              ).img
            }
            alt={
              products.find(
                (product) => product.name === "CDMP Exam Question Sets"
              ).alt
            }
            style={{ maxWidth: "100px" }}
          />
        </Link>
        <figcaption style={{ fontSize: "0.8em" }}>
          <Link to={`/files/CDMP-Question-Set-3.pdf`} target="_blank" download>
            Question Set #3
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
