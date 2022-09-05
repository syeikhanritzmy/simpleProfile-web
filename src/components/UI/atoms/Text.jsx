import React from 'react';

function Text({ customClass, text }) {
  return <div className={`${customClass}`}>{text}</div>;
}

export default Text;
