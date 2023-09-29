import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";
import { useSelector , useDispatch} from "react-redux";
import { updateStore } from "./redux/features/basketSlice";

function App() {
  const dispatch = useDispatch()
  let store = useSelector(store=>store)
  let total = store.basket.total
  useEffect(()=>{
    dispatch(updateStore())
  }, [updateStore,store])

  
  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Navbar/>
      <h1 className="text-center mt-5 py-3 text-5xl">Redex Store</h1>
      <BasketProducts/>
      {store.basket.products.length &&
      <div className="flex justify-between pt-5 px-40 font-[500] text-2xl">
        <h4>Total</h4>
        <h4>{total.toFixed(2)}$</h4>
      </div>
      }
    </div>
  );
}

export default App;
