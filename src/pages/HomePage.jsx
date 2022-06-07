import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import ProductSnippet from "../components/ProductSnippet";

const HomePage = () => {
  const navigate = useNavigate();
  let [availableProducts, setAvailableProducts] = useState();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  availableProducts = products;

  return (
    <>
      <h2>homepage</h2>
      <div className="flex justify-center ">
        {/* main */}
        <main className="w-3/5 bg-gray-400  grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 ">
          {availableProducts.map((prod) => (
            <ProductSnippet key={prod.id} props={prod} />
          ))}
        </main>
        <aside>some content to be placed here</aside>
        <button onClick={() => navigate("/cart")}> go to cart</button>
      </div>
    </>
  );
};

export default HomePage;
