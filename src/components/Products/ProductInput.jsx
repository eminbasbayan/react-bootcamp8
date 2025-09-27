import React from 'react';

function ProductInput({ label, type, name, placeholder, handleChange, value}) {
  return (
    <label>
      {label}:
      <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

export default ProductInput;
