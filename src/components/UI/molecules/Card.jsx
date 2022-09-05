import React from 'react';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaDribbble,
  FaStackOverflow,
} from 'react-icons/fa';
function Card({
  imageClass,
  src,
  title,
  textClass,
  text,
  icon,
  text2,
  text2Class,
  titleClass,
}) {
  return (
    <div className="w-11/12 h-52 bg-white grid grid-cols-12 pl-5 mx-auto drop-shadow-md">
      <div className="  grid grid-cols-12 items-center  col-span-7  mx-auto  ">
        <div className="col-span-4 ">
          <Image customClass={`${imageClass}`} src={src} />
        </div>
        <div className=" flex  col-span-6  h-5/6 flex-col items-start gap-y-2 justify-center">
          <div>
            <Title title={title} customClass={titleClass} />
          </div>
          <div>
            <Text text={text} customClass={textClass} />
            <div className="flex items-center text-blue-400 gap-x-2">
              {icon}
              <Text text={text2} customClass={text2Class} />
            </div>
          </div>
          <div className="flex items-center w-11/12  pt-3 gap-x-2 ">
            <Button
              buttonClass={`h-12 w-28  bg-green-400 text-white rounded-lg font-semibold drop-shadow-lg font-mono`}
              buttonName={`contact`}
            />
            <Button
              buttonClass={`h-12 w-28 border-2 border-blue-400 rounded-lg font-semibold font-mono text-blue-400`}
              buttonName={`resume`}
            />
          </div>
        </div>
        <div className=" h-5/6 pt-3 font-semibold text-slate-400 text-lg ">
          $44/hr
        </div>
      </div>
      <div className=" col-span-5 ">
        <div className="flex items-center h-full ">
          <div className="border-l-2 border-slate-400 h-5/6 rounded-full"></div>
          <div className="grid grid-rows-6 grid-cols-2  w-full">
            <div className="flex justify-start pl-6">
              {/* ---------------- */}
              <Title
                title={`Check avalibility :`}
                customClass={`font-base font-semibold font-sans `}
              />
            </div>
            <div className="flex justify-start items-center">
              <Text
                text={`Full-time(40hr/wk) `}
                customClass={`font-sans text-sm text-slate-400 font-semibold `}
                // --------------------
              />
            </div>
            <div className="flex justify-start pl-6">
              {/* ---------------- */}
              <Title
                title={`Age :`}
                customClass={`font-base font-semibold font-sans`}
              />
            </div>
            <div className="flex justify-start items-center">
              <Text
                text={`21 `}
                customClass={`font-sans text-sm text-slate-400 font-semibold`}
                // --------------------
              />
            </div>
            <div className="flex justify-start pl-6">
              {/* ---------------- */}
              <Title
                title={`Location :`}
                customClass={`font-base font-semibold font-sans`}
              />
            </div>
            <div className="flex justify-start items-center">
              <Text
                text={`Palu, Sulawesi-tengah `}
                customClass={`font-sans text-sm text-slate-400 font-semibold`}
                // --------------------
              />
            </div>
            <div className="flex justify-start pl-6">
              {/* ---------------- */}
              <Title
                title={`Years Experience :`}
                customClass={`font-base font-semibold font-sans`}
              />
            </div>
            <div className="flex justify-start items-center">
              <Text
                text={`Not Yet `}
                customClass={`font-sans text-sm text-slate-400 font-semibold`}
                // --------------------
              />
            </div>
            <div className="col-span-2  row-span-2 w-11/12 mx-auto gap-8 items-end flex ">
              <FaGithub size={28} className={'fill-sky-500'} />
              <FaTwitter size={28} className={'fill-sky-500'} />
              <FaFacebook size={28} className={'fill-sky-500'} />
              <FaLinkedin size={28} className={'fill-sky-500'} />
              <FaDribbble size={28} className={'fill-sky-500'} />
              <FaStackOverflow size={28} className={'fill-sky-500'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
