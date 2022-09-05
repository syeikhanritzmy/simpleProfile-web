import React from 'react';
import Title from '../atoms/Title';

function LineTitle() {
  return (
    <div className=" my-10 w-11/12 mx-auto h-8">
      <div className=" w-11/12 mx-auto flex justify-start gap-x-2 border-b-2 border-slate-400 relative">
        <Title
          title={'Profile'}
          customClass={`border-blue-400 border-b-4  w-20 font-mono font-bold text-slate-500 `}
        />
        <Title
          title={'cv/resume'}
          customClass={`border-blue-400 w-2/12 font-mono font-bold text-slate-500 `}
        />
      </div>
    </div>
  );
}

export default LineTitle;
