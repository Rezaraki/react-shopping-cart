import { useDispatch } from "react-redux";
import { addCount, decount, deleteItem } from "../features/cartSlice";

const CartProductSnippet = ({
  props: { id, title, price, images },
  quantity,
  cartLength,
  index,
}) => {
  const dispatch = useDispatch();

  const addHandler = (prodId) => {
    dispatch(addCount(prodId));
  };
  const decreaseHandler = (prodId) => {
    dispatch(decount(prodId));
  };
  const deleteHandler = (prodId) => {
    dispatch(deleteItem(prodId));
  };
  console.log(index, cartLength, cartLength === index - 1);
  return (
    <div
      className={`box-border px-1 ${cartLength - 1 === index ? "" : "mb-2"} `}
    >
      <div className="flex w-full bg-gray-200 rounded  h-36 ">
        <img className="h-full rounded-l" src={images?.[0]} alt={title} />

        <div className=" border-y-2 border-r-2  border-white rounded-r flex justify-around items-center w-full ">
          <h2>{title}</h2>
          <h2 className=" ">quantity:</h2>
          <button className=" min-h-0 " onClick={() => addHandler(id)}>
            add
          </button>
          <span> {quantity} </span>
          <button className="  min-h-min " onClick={() => decreaseHandler(id)}>
            decrease
          </button>
          <h2>price: {price}</h2>

          <button onClick={() => deleteHandler(id)}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartProductSnippet;
