import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductSnippet = ({
  props: { id, title, price, images },
  props: prodBody,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const clickHandler = (prodId) => {
    dispatch(addToCart(prodId));
  };

  return (
    <div className="md:hover:drop-shadow-lg shadow-md ">
      <img
        className="w-full rounded-t aspect-square	object-cover"
        src={images?.[0]}
        alt={title}
      />
      <div className="h-20 bg-gray-200 md:rounded-b  border-white md:border-x-2 border-b-2 flex justify-between px-3 py-1">
        <div className="flex flex-col justify-between ">
          <h2 className="font-sans text-base font-bold ">{title}</h2>
          <h2 className="font-semibold">{price} $</h2>
        </div>

        <div className="flex items-center shrink-0 ">
          {/* change the add cart btn to go to cart if it was already added */}
          {cartData.some((cartElem) => cartElem.productBody.id === id) ? (
            <button onClick={() => navigate("/cart")}>go to cart</button>
          ) : (
            <button onClick={() => clickHandler(prodBody)}>add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSnippet;
