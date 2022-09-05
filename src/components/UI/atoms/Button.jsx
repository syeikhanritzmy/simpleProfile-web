import React from 'react';

function Button({ buttonClass, buttonName }) {
  return (
    <div>
      <button className={`${buttonClass}`}>{buttonName}</button>
    </div>
  );
}

export default Button;
