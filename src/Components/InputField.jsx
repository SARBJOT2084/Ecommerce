// InputField.js
import React from 'react';
const inputFields = [
  { label: "First Name", placeholder: "Sagar" },
  { label: "Last Name", placeholder: "Sharma" },
  { label: "Address", placeholder: "#434, 5th street" },
  { label: "City", placeholder: "New York" },
  { label: "State", placeholder: "Maharashtra" },
  { label: "Postal Code", placeholder: "411014" }
];

const Input = ({ label, placeholder }) => {
  return (
    <div>
      <div className="text-xs text-[#35295D] font-extrabold">{label}</div>
      <input className="input-box" placeholder={placeholder} />
    </div>
  );
};
const InputField = () => 
  {
    return (
      <div className="grid grid-cols-2 gap-2">
        {/* Map over inputFields array and render each input field */}
        {inputFields.map((field, index) => (
          <Input index={index} 
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
      </div>
    );
  }
export default InputField;