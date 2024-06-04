import React from 'react'
import PaymentMethods from '../Components/PaymentMethods'
import InputField from '../Components/InputField'

const Details = () => {
   return ( 
<div className="main-screen">
   
    <div className="mx-auto">
      <p className="heading">Complete Registration for the payment</p>
      <p className="subheading">Personal details</p>
      <InputField/>
      <p className="subheading">Accepted Payment Methods</p> 
    <PaymentMethods/>

    <button className="bg-black rounded-md h-12 text-white w-full font-['Montserrat']"> 
      Select Payment Option
    </button>
    </div>
</div>

  )
}

export default Details
