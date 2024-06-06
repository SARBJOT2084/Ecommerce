import React,{useState} from 'react'
import { LuCreditCard } from "react-icons/lu";
import { BiSolidBank } from "react-icons/bi";
import { MdOutlineQrCodeScanner } from "react-icons/md";

const PaymentWay = () => {
    const [option, setOption] = useState('Pay Now');
    const handleToggle = () => {
        setOption((prevOption) => (prevOption === 'Pay Now' ? 'Pay on Delivery' : 'Pay Now'));
      };
    return (
        <div>
        <div  
        className='toggler-button'
        >
            <button
          onClick={() => handleToggle('Pay Now')}
          className={`pay-now transition duration-300 ease-in-out ${option === 'Pay Now' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
        >
          Pay Now
        </button>
        <button
          onClick={() => handleToggle('Pay on Delivery')}
          className={`pay-del transition duration-300 ease-in-out ${option === 'Pay on Delivery' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
        >
          Pay on Delivery
        </button>       
        </div>
        <div>
            {option === 'Pay Now' ? <PayNow/> : <PayDel/>}
        </div>
      </div>
    )
}

const PayDel = () => {
    return (
    <button className="pay-del-select">
        Click to Proceed 
    </button>
  )
}
const PayNow = () => {
    return (
        <div className="methods">
            <div className="pay">
            <LuCreditCard size={24}/>  Debit Card or Credit Card 

            </div>
            <div className="pay">
               <BiSolidBank size={24}/> NetBanking
            </div>
            <div className="pay">
               <MdOutlineQrCodeScanner size={24}/> UPI 
            </div>
            <div className="pay-now-select">Proceed with Pay</div>
        </div>  
    )
}


export default PaymentWay
