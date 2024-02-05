import style from "./AllProductsPage.module.css";
// import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
// import FilterSection from "../../components/filterSection/filterSection";

const AllProductsPage = () => {
  const [title, setTitle] = useState("All Products");
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}product/AllProducts`
        );
        if (response) {
          setProducts(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  return (
    <>
      <main className={style.mainContainer}>
        {/* <FilterSection
          setProductLoading={setLoading}
          setProducts={setProducts}
          setTitle={setTitle}
        /> */}
        <section className={style.cardsContainer}>
          <h1 className={style.pageTitle}>{title}</h1>
          {/* <SearchBar
            setProductLoading={setLoading}
            setProducts={setProducts}
            setTitle={setTitle}
          /> */}
          {loading ? (
          <div>Loading...</div>
          ) : (
            <div className={style.cardsWrapper}>
              {Products.length === 0 ? (
                <p>No products available for this filter.</p>
              ) : (
             Products.map((product, index) => (
                  <ProductCard
                    id={product._id}
                    key={index}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imgurl={product.image}
                    slug={product.slug}
                  />
                ))
              )}
            </div>
          )}

        </section>
      </main>
    </>
  );
};

export default AllProductsPage;
