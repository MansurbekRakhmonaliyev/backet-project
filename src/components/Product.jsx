import { useEffect } from "react";
import { increment, decrement, removeItem , updateStore} from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ name, amount, price, image }) {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-14">
        <img src={image} alt={name + " glasses"} className="w-40" />

        <div className="flex flex-col gap-1 ">
          <p className="font-medium">{name}</p>
          <p className="font-medium">${price}</p>
          <button onClick={()=>dispatch(dispatch(removeItem(name)))} className="text-red-500 tracking-wider">Remove</button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={()=>{
          amount == 1 ? dispatch(removeItem(name)):dispatch(decrement(name))
        }}>-</button>
        <p>{amount}</p>
        <button onClick={()=>dispatch(increment(name))}>+</button>
      </div>
    </div>
  );
}

export default Product;
