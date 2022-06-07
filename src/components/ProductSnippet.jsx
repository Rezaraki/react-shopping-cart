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
    console.log(prodId);
  };

  return (
    <div>
      <img className="w-full" src={image} alt={name} />
      <h2>{name}</h2>
      <h2>price: {price}</h2>
      {cartData.some((cartElem) => cartElem.productId === id) ? (
        <button onClick={() => navigate("/cart")}>go to cart</button>
      ) : (
        <button onClick={() => clickHandler(id)}>add to cart</button>
      )}
    </div>
  );
};

export default ProductSnippet;
