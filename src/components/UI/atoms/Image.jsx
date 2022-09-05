import React from 'react';

function Image({ src, customClass }) {
  return (
    <div>
      <img src={`${src}`} alt="nothing" className={`${customClass}`} />
    </div>
  );
}

export default Image;
