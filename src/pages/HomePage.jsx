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
      <div className="flex justify-center ">
        {/* main */}
        <main className="lg:w-4/5 w-full bg-gray-300 sm:p-3 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]   sm:gap-6 gap-2 ">
          {availableProducts.map((prod) => (
            <ProductSnippet key={prod.id} props={prod} />
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;
