import React from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Title from '../atoms/Title';

function Card3() {
  return (
    <div className="w-6/12 bg-white h-full p-5 drop-shadow-lg mb-8">
      <div className=" p-3 flex flex-col justify-start gap-5">
        <Title
          title={'about'}
          customClass={`uppercase text-left font-semibold`}
        />
        <Text
          customClass={`text-left`}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, provident quas assumenda porro inventore sapiente enim, animi ratione rerum id asperiores quibusdam quod quisquam delectus ex sed eveniet iure dicta?`}
        />

        <span className="border-b-2"></span>
      </div>
      <div className=" p-3 flex flex-col justify-start gap-5 ">
        <Title
          title={'Skills'}
          customClass={`uppercase text-left font-semibold`}
        />
        <div className="flex flex-wrap justify-around gap-2 ">
          <Button
            buttonName={`UI`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Android`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`IOS`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Python`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Javascript`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Sketch`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Photoshop`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`C#`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Illustrator`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`PHP`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`Linux`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
          <Button
            buttonName={`UX`}
            buttonClass={`border-slate-400 border-2  px-4 rounded-full `}
          />
        </div>
        <span className="border-b-2"></span>
      </div>
      <div className=" p-3 flex flex-col justify-start gap-5">
        <Title
          title={'languages'}
          customClass={`uppercase text-left font-semibold`}
        />
        <div className="flex gap-8 font-mono font-semibold">
          <Text text={'Indonesian'} />
          <Text text={'English'} />
          <Text text={'Arabic'} />
          <Text text={'Bugis'} />
        </div>
      </div>
    </div>
  );
}

export default Card3;
