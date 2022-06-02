import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductSnippet = ({ props: { id, name, price, image } }) => {
  //   console.log(id, name, price, image);
  //   { id, name, price, image }

  const dispatch = useDispatch();

  const clickHandler = (prodId) => {
    dispatch(addToCart(prodId));
    console.log(prodId);
  };
  return (
    <div>
      <img className="w-full" src={image} alt={name} />
      <h2>{name}</h2>
      <h2>price: {price}</h2>
      <button onClick={() => clickHandler(id)}>add to cart</button>
    </div>
  );
};

export default ProductSnippet;
