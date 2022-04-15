import "./book-giveaway.css";
import { useEffect } from "react";

import products from "../data/products";

export default function DSPproducts({ products: productList }) {
  const filtered = products.filter((product) =>
    productList.includes(product.name)
  );
  useEffect(() => {
    console.log(productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="teal-box" style={{ maxWidth: "2000px", margin: "auto" }}>
      <div className="center-text-box" id="more-quotes">
        <p
          style={{
            fontSize: "1.2em",
            marginBottom: "1em",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          <strong>You May Also be Interested</strong>
        </p>
        <div className="image-display-tri">
          {filtered.map((product) => (
            <figure>
              <a
                href={`https://www.datastrategypros.com${product.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={product.img}
                  alt={product.alt}
                  style={{ width: "20vw" }}
                />
              </a>
              <figcaption style={{ textAlign: "center" }}>
                <a
                  href={`https://www.datastrategypros.com${product.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {product.name}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
