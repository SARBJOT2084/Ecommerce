import React from 'react'
import PaymentMethods from '../Components/PaymentMethods'

const Details = () => {
  return ( 
<div className="h-[95vh] w-[94%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
   
    <div className="mr-auto p-[5%] w-1/2 text-center">
      {/* <image src={} /> */}
    </div>

    <div className="ml-auto p-[5%] w-1/2 space-y-3">

      <p className="text-xl text-center font-['Montserrat'] font-bold">Complete Registration for the payment</p>
      <p className="text-lg font-['Montserrat'] font-bold">Personal details</p>
      <div className="grid grid-cols-2 gap-2 p-2 m-2">
        <div className="text-xs text-[#35295D] font-bold">First Name</div>
        <div className="text-xs text-[#060608] font-bold">Last Name</div>
        <input className=" p-2 border border-gray-300 rounded-md text-sm " placeholder="Sagar"/>
        <input className=" p-2 border border-gray-300 rounded-md text-sm " placeholder="Sharma" />
        <div className="text-xs text-[#060608] font-bold">Address</div>
        <div className="text-xs text-[#060608] font-bold">City</div>
        <input className="p-2 border border-gray-300 rounded-md text-sm " placeholder="#434,5th street"/>
        <input className="p-2 border border-gray-300 rounded-md text-sm " placeholder="New York" />      
        <div className="text-xs text-[#060608] font-bold">State</div>
        <div className="text-xs text-[#060608] font-bold">Postal Code</div>
        <input className="p-2 border border-gray-300 rounded-md text-sm " placeholder="Maharashtra"/>
        <input className="p-2 border border-gray-300 rounded-md text-sm " placeholder="411014" />
    </div>
    <p className="text-lg font-['Montserrat'] font-bold">Accepted Payment Methods</p> 
    <div className="grid grid-cols-5 gap-2 p-2 m-2 text-center">
      <div className="bg-gray-200 w-20 flex items-center justify-center">
        <img 
        src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
       height={30} width={30} alt="Visa" className="mx-auto my-auto" />
       </div>
       <div className="bg-gray-200 w-20 flex items-center justify-center">
        <img 
        src="https://i.pinimg.com/originals/38/2f/0a/382f0a8cbcec2f9d791702ef4b151443.png"
       height={30} width={30} alt="MSTR" className="mx-auto my-auto" />
       </div>
       <div className="bg-gray-200 w-20 flex items-center justify-center">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
       height={30} width={30} alt="Rupay" className="mx-auto my-auto" />
       </div>
       <div className="bg-gray-200 w-20 flex items-center justify-center">
        <img 
        src="https://logowik.com/content/uploads/images/upi-unified-payments-interface4949.logowik.com.webp"
       height={30} width={30} alt="UPI" className="mx-auto my-auto" />
       </div>
    </div>

    </div>
    
  
    
   

</div>

  )
}

export default Details
