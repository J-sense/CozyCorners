import React from 'react';
import logo from "../../assets/assets/button-icon.png"

const Loadmorebtn = ({ children }) => {
  return (
    <button className='flex items-center text-primary font-base font-bannerfont gap-3'>
      <span>{children}</span>
      <img src={logo} alt="load more icon" />
    </button>
  );
}

export default Loadmorebtn;
