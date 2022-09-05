import React from 'react';
import Card2 from '../molecules/Card2';
import Card3 from '../molecules/Card3';
import Card4 from '../molecules/Card4';

function CardComponet2() {
  return (
    <div className="w-10/12 mx-auto flex gap-8">
      <Card2 title={'Website'} />
      <Card3 />
      <Card4 />
    </div>
  );
}

export default CardComponet2;
