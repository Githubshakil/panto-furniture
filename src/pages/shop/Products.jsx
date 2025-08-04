import React, { useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/images/button-icon.png";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProduct = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="section-container">
        <h2 className="font-poppins text-4xl font-bold text-center my-8">
          {headline}
        </h2>

        {/* category tabs */}
        <div className="bg-[#eeeeee] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category, index) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                key={index}
                className={`py-1 sm:px-5  px-8 rounded-full hover:bg-primary text-[#1e1e1e] font-semibold text-[18px] hover:text-white transition-colors font-poppins cursor-pointer ${
                  selectedCategory === category
                    ? "bg-white text-primary"
                    : "text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* load more button */}

        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProduct}
              className="text-lg font-semibold text-primary flex items-center gap-1 font-poppins cursor-pointer"
            >
              View All
              <img src={btnIcon} alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
