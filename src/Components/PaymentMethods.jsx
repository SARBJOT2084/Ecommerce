import React,{useState} from 'react'

const images=[
"https://i.pinimg.com/originals/38/2f/0a/382f0a8cbcec2f9d791702ef4b151443.png",
"https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
,"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
,"https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_170312.png"
]

const PaymentMethods = () => {
    const [highlighted, setHighlighted] = useState(false);
    const handleClick = () => {
      setHighlighted(!highlighted);
    };
    return (
        <div className="grid grid-cols-5 gap-2 p-2 m-2">
            {images.map((imageUrl, index) => (
                <button className={`bg-gray-200 w-20 flex items-center justify-center ${highlighted ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={handleClick}
                key={index}
                >        
                    <img key={index} src={imageUrl} 
                    height={30} 
                    width={30} 
                    alt={`Payment Method ${index + 1}`} />
                
                </button>
            ))}
        </div>
        )
}


export default PaymentMethods
