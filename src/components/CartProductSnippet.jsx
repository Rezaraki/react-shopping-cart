import { useDispatch } from "react-redux";
import { addCount, decount, deleteItem } from "../features/cartSlice";

const CartProductSnippet = ({
  props: { id, name, price, image },
  quantity,
}) => {
  //   console.log(id, name, price, image);
  //   { id, name, price, image }

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

  return (
    <div className="box-border px-1 pt-1   mb-2 ">
      <div className="flex w-full h-64  ">
        <img className="h-full rounded-lg" src={image} alt={name} />
        <div className="  w-full   bg-slate-300 rounded-lg">
          <h2>{name}</h2>
          <h2 className="inline-block">quantity:</h2>
          <button className="border" onClick={() => addHandler(id)}>
            add
          </button>
          <span> {quantity} </span>
          <button className="border" onClick={() => decreaseHandler(id)}>
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
