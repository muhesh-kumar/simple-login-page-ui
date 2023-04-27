import React from 'react';

const InputWithLabel = ({ type, id, labelText, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <label htmlFor={id} className="text-fontPrimaryColor text-xs md:text-sm">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className="border border-black opacity-25 p-[10px] rounded-xl placeholder-fontPrimaryColor"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithLabel;
