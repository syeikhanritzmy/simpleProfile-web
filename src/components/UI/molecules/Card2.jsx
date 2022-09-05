import React from 'react';
import TextLink from '../atoms/TextLink';
import Title from '../atoms/Title';
import { FaReadme } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { IoMdPaper } from 'react-icons/io';

function Card2({ title }) {
  return (
    <div className=" w-3/12 h-40 ">
      <div className="flex flex-col bg-white  drop-shadow-lg items-start px-5 py-4 h-full">
        <Title
          title={title}
          customClass={`font-mono font-bold text-lg pb-3 uppercase`}
        />
        <div className="flex items-center  gap-2 font-mono">
          <GiWorld />
          <TextLink path={`/blog`} namePath={`Website`} />
        </div>
        <div className="flex items-center  gap-2 font-mono">
          <FaReadme />
          <TextLink path={`/blog`} namePath={`Blog`} />
        </div>
        <div className="flex items-center  gap-2 font-mono">
          <IoMdPaper />
          <TextLink path={`/portfolio`} namePath={`Portfolio`} />
        </div>
      </div>
    </div>
  );
}

export default Card2;
