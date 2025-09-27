import React from 'react';

function ProductInput({ label, type, name, placeholder, handleChange }) {
  return (
    <label>
      {label}:
      <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export default ProductInput;
