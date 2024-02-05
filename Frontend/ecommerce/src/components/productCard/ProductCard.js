import ProductStyle from "./ProductCard.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({name, description, imgurl, slug,price }) => {

  return (
    <>
      {/* <Link to={`/single/${slug}`} style={{ textDecoration: "none" }}> */}
        <article className={ProductStyle.cardContainer}>
          <section>
            <figure>
              <img
                className={ProductStyle.image}
                src={imgurl}
                alt={`${slug}`}
              />
              <figcaption>
                <h2 className={ProductStyle.productName}>
                  {name}{" "}
                </h2>
                <p className={ProductStyle.description}>
                  {description?.substring(0, 50)}...
                </p>
              </figcaption>
            </figure>
          </section>
          <section className={ProductStyle.PricingPart}>
            <div className={ProductStyle.priceContainer}>
              <p
                className={`${ProductStyle.originalPrice}`}
              >
                ${price}
              </p>

            </div>
          </section>
          <button className={ProductStyle.buy}>Buy</button>
        </article>
      {/* </Link> */}
    </>
  );
};
export default ProductCard;
