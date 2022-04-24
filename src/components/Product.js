import { Link } from "react-router-dom";

export default function Product({ productObj, img }) {
  return (
    <Link
      to={productObj.link}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            border: "none",
          }}
        >
          <img src={productObj.img} alt={productObj.alt} />
        </div>
        <div className="card-content">
          <p className="title card-title">{productObj.name}</p>
          <div className="content">
            {productObj.description}
            <br />
            <br />
          </div>
        </div>

        <button className="btn btn-accent full-width bottom">
          More Details
        </button>
      </div>
    </Link>
  );
}
