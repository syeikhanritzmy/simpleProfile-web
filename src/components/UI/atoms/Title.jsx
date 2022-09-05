import React from 'react';

function Title({ customClass, title }) {
  return <div className={`${customClass}`}>{title}</div>;
}

export default Title;
