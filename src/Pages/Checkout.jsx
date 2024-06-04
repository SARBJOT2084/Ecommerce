import React from 'react'
import PaymentMethods from '../Components/PaymentMethods'
import InputField from '../Components/InputField'
const Details = () => {
  return ( 
<div className="h-[95vh] w-[94%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
    <div className="mr-auto p-[5%] w-1/2 text-center">
    </div>
    <div className="ml-auto p-[5%] w-1/2 space-y-3">
      <p className="heading">Complete Registration for the payment</p>
      <p className="subheading">Personal details</p>
      <InputField/>
      <p className="subheading">Accepted Payment Methods</p> 
    <PaymentMethods/>
    </div>
</div>

  )
}

export default Details
