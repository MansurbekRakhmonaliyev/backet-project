import { useSelector} from "react-redux";


function Navbar() {
  const  {amount}  = useSelector((state) => state.basket)
    
  return (
    <div className='flex justify-between pt-5 px-40'>
        <p className='font-medium'>Home</p>
        <p className='font-medium flex items-center'>
            <span>Basket</span>
            <span className='flex justify-center items-center  w-6 h-6 relative left-1 bg-red-500 text-sm text-white py-2 px-1' style={{borderRadius:'50%'}}>{amount}</span>
        </p>
    </div>
  )
}

export default Navbar