import React from 'react'
import PaymentMethods from '../Components/PaymentMethods'
import InputField from '../Components/InputField'
import PaymentWay from '../Components/PaymentMethods'

const Details = () => {
   return ( 
<div className="main-screen">
   
    <div className="mx-auto w-full">
      <p className="heading">Shipping and Payment</p>
      <p className="subheading">Personal details</p>
        <InputField/>
        <PaymentWay/>
       
        {/* <p className="subheading">Payment Methods</p>  */}

    </div>
</div>

  )
}

export default Details
