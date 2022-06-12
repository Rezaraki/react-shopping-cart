import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductSnippet = ({ props: { id, name, price, image } }) => {
  //   console.log(id, name, price, image);
  //   { id, name, price, image }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const clickHandler = (prodId) => {
    dispatch(addToCart(prodId));
  };

  return (
    <div className="md:hover:shadow-md shadow-md ">
      <img className="w-full rounded-t" src={image} alt={name} />
      <div className=" bg-gray-200 md:rounded-b  border-white md:border-x-2 border-b-2 flex justify-between px-3 py-1">
        <div>
          <h2 className="font-sans text-base font-bold ">{name}</h2>
          <h2 className="font-semibold">{price} $</h2>
        </div>

        <div className="flex items-center">
          <div>
            {cartData.some((cartElem) => cartElem.productId === id) ? (
              <button onClick={() => navigate("/cart")}>go to cart</button>
            ) : (
              <button onClick={() => clickHandler(id)}>add to cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSnippet;
