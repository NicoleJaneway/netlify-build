/* eslint-disable array-callback-return */
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import products from "../data/products";

import Product from "../components/Product";

import Divider from "@material-ui/core/Divider";

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta
          name="description"
          content="Data Strategy Professionals provides expertly crafted test prep materials for DAMA's Certified Data Management Professional exam as well as other trainings in the Data Strategy and Data Science fields."
        />
        <meta property="og:title" content="Products" />
        {/* OpenGraph tags */}
        <meta
          name="og:url"
          content={"https://www.datastrategypros.com/products"}
        />
        <meta
          name="og:description"
          content="Data Strategy Professionals provides expertly crafted test prep materials for DAMA's Certified Data Management Professional exam as well as other trainings in the Data Strategy and Data Science fields."
        />
        <meta
          name="og:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="og:image:alt" content="hand holding lightbulb" />
        <meta name="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="Products" />
        <meta
          name="twitter:description"
          content="Data Strategy Professionals provides expertly crafted test prep materials for DAMA's Certified Data Management Professional exam as well as other trainings in the Data Strategy and Data Science fields."
        />
        <meta
          name="twitter:image"
          content="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
        />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:creator" content="@Nicole_Janeway" />
      </Helmet>

      <div className="home-layout">
        <p className="title">Products</p>
        <Divider sx={{ fontWeight: 600, fontSize: "1.1em" }}>
          CDMP Fundamentals Exam Prep
        </Divider>
        <div id="product-catalog">
          {products.map((productObj) => {
            if (productObj.category === "cdmp-fundamentals") {
              return <Product key={productObj.name} productObj={productObj} />;
            }
          })}
        </div>
        <Divider sx={{ fontWeight: 600, fontSize: "1.1em" }}>
          CDMP Specialist Exam Prep
        </Divider>
        <div id="product-catalog">
          {products.map((productObj) => {
            if (productObj.category === "cdmp-specialist") {
              return <Product key={productObj.name} productObj={productObj} />;
            }
          })}
        </div>
        <Divider sx={{ fontWeight: 600, fontSize: "1.1em" }}>
          Career Services
        </Divider>
        <div id="product-catalog">
          {products.map((productObj) => {
            if (productObj.category === "service") {
              return <Product key={productObj.name} productObj={productObj} />;
            }
          })}
        </div>
        <Divider sx={{ fontWeight: 600, fontSize: "1.1em" }}>
          Data Science
        </Divider>
        <div id="product-catalog">
          {products.map((productObj) => {
            if (productObj.category === "data-science") {
              return <Product key={productObj.name} productObj={productObj} />;
            }
          })}
        </div>
        <Divider sx={{ fontWeight: 600, fontSize: "1.1em" }}>
          Physical Products
        </Divider>
        <div id="product-catalog">
          {products.map((productObj) => {
            if (productObj.category === "physical") {
              return <Product key={productObj.name} productObj={productObj} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
