import React from 'react';
import Title from '../atoms/Title';

function IconTitle({ icon, titleClass, titleName }) {
  return (
    <div className="font-mono text-xl uppercase">
      <Title customClass={titleClass} title={titleName} />
    </div>
  );
}

export default IconTitle;
