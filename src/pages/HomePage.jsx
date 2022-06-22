import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import ProductSnippet from "../components/ProductSnippet";
import { useGetProductsQuery } from "../features/api/apiSlice";
import Pagination from "@mui/material/Pagination";
const HomePage = () => {
  const navigate = useNavigate();
  let [availableProducts, setAvailableProducts] = useState();
  const products = useSelector((state) => state.products);

  const [prodRange, setProdRange] = useState(1);
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isSuccess } = useGetProductsQuery(prodRange);

  const handleChange = (event, value) => {
    setPage(value);

    let offset = value === 1 ? 1 : value * 10;
    console.log(value, offset);
    setProdRange(offset);
  };

  // useEffect(()=>{},[])
  availableProducts = isSuccess ? data : products;

  return (
    <>
      <div className="flex justify-center  pb-2">
        {/* main */}
        <main className="lg:w-4/5 w-full bg-gray-300 pb-2  ">
          <div className="sm:p-3 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]   sm:gap-6 gap-2">
            {error ? (
              <>Oh no, there was an error use hard coded data</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {availableProducts.map((prod) => (
                  <ProductSnippet key={prod.id} props={prod} />
                ))}
              </>
            ) : null}
          </div>

          <Pagination
            className="flex justify-center mt-2"
            count={10}
            page={page}
            shape="rounded"
            onChange={handleChange}
          />
        </main>
      </div>
    </>
  );
};

export default HomePage;
