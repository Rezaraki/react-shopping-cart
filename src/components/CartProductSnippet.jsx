import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const CartProductSnippet = ({
  props: { id, name, price, image },
  quantity,
}) => {
  //   console.log(id, name, price, image);
  //   { id, name, price, image }

  const dispatch = useDispatch();

  const clickHandler = (prodId) => {
    dispatch(addToCart(prodId));
  };

  return (
    <div className="w-full">
      <img className="" src={image} alt={name} />
      <h2>{name}</h2>
      <span>quantity :{quantity}</span>
      <h2>price: {price}</h2>

      <button onClick={() => clickHandler(id)}>add to cart</button>
    </div>
  );
};

export default CartProductSnippet;
