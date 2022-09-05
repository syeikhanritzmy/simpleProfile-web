import React from 'react';
import Card from '../molecules/Card';
import ProfileImage from '../../../assets/image/profile.jpg';

import { FaBuilding } from 'react-icons/fa';
function CardComponent1() {
  return (
    <div className="mt-20 w-11/12 mx-auto ">
      <Card
        src={`${ProfileImage}`}
        imageClass={`w-40 h-40 shadow-black  shadow-md object-cover  rounded-full`}
        icon={<FaBuilding />}
        text={`Full stack web developer`}
        textClass={'font-mono'}
        title={`Syeikhan Ritzmy `}
        text2={`Epic Coders`}
        text2Class={'text-sm font-Poppins font-medium'}
        titleClass={`text-2xl font-bold font-Poppins`}
      />
    </div>
  );
}

export default CardComponent1;
