import React from 'react';
import { FcNfcSign } from 'react-icons/fc';
import { BsBuilding } from 'react-icons/bs';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import TextLink from '../atoms/TextLink';
import Image from '../atoms/Image';
function Card4() {
  return (
    <div className="grid grid-rows-6  w-3/12 ">
      <div className="bg-white row-span-2 drop-shadow-lg flex pt-4 pb-5 items-center flex-col">
        <FcNfcSign size={84} />
        <Title
          title={`Track time on Chinez`}
          customClass={`font-semibold text-xl`}
        />
        <Text
          text={`Pay only for the hours worked`}
          customClass={`text-sm text-slate-400 pb-4`}
        />
        <Button
          buttonClass={`bg-blue-400 px-10 py-2 text-white font-semibold text-md mb-2`}
          buttonName={`Sign Up`}
        />
        <TextLink
          namePath={`learn more...`}
          path={`/more`}
          customClass={`text-blue-400`}
        />
      </div>
      <div className="  w-full row-span-4 mt-10 ">
        <Title
          title={`similar profiles`}
          customClass={`uppercase font-semibold text-slate-600 text-left`}
        />
        <div className="border-b-2 border-slate-300 py-2"> </div>
        <div className="h-auto mt-4">
          <div className="flex items-center mb-5">
            <div className="pr-4">
              <Image
                customClass={` h-14 w-14 object-cover rounded-full`}
                src={`https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80`}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <Title title={`Paul Jason`} customClass={'font-semibold'} />
              <Text
                text={`UI/UX designer`}
                customClass={`text-xs text-slate-400`}
              />
              <div className="flex items-center gap-1 text-blue-400 font-semibold">
                <BsBuilding className="fill-blue-400" />
                <Title title={`Epic Coders`} customClass={`text-xs`} />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-5">
            <div className="pr-4">
              <Image
                customClass={` h-14 w-14 object-cover rounded-full`}
                src={`https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80`}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <Title title={`Andrei Marian `} customClass={'font-semibold'} />
              <Text
                text={`ruby on rails developer`}
                customClass={`text-xs text-slate-400`}
              />
              <div className="flex items-center gap-1 text-blue-400 font-semibold">
                <BsBuilding className="fill-blue-400" />
                <Title title={`Visual madness`} customClass={`text-xs`} />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-5">
            <div className="pr-4">
              <Image
                customClass={` h-14 w-14 object-cover rounded-full`}
                src={`https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80`}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <Title title={`Sandra Matache`} customClass={'font-semibold'} />
              <Text
                text={`UI/UX designer`}
                customClass={`text-xs text-slate-400`}
              />
              <div className="flex items-center gap-1 text-green-400 font-semibold">
                <BsBuilding className="fill-green-400" />
                <Title title={`Mobile Developer`} customClass={`text-xs`} />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-5">
            <div className="pr-4">
              <Image
                customClass={` h-14 w-14 object-cover rounded-full`}
                src={`https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80`}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <Title title={`Siti Aisyah`} customClass={'font-semibold'} />
              <Text
                text={`UI/UX designer`}
                customClass={`text-xs text-slate-400`}
              />
              <div className="flex items-center gap-1 text-green-400 font-semibold">
                <BsBuilding className="fill-green-400" />
                <Title title={`Freelancer`} customClass={`text-xs`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
