import React from 'react'

const images=[{
    src:"https://i.pinimg.com/originals/38/2f/0a/382f0a8cbcec2f9d791702ef4b151443.png"
},{
    src:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
},{
    src:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
},{
    src:"https://logowik.com/content/uploads/images/upi-unified-payments-interface4949.logowik.com.webp"
}]

const PaymentMethods = ({img}) => {
  return (
    <div className="bg-gray-200 w-20 flex items-center justify-center">
        <img 
        src={img.src}
       height={30} width={30} alt="Visa" className="mx-auto my-auto" />
    </div>
  )
}

export default PaymentMethods
