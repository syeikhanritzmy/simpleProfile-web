import React from 'react';
import IconTitle from '../molecules/IconTitle';
import NavPagination from '../molecules/NavPagination';

function Navbar() {
  return (
    <div className=" h-16 flex  items-center bg-white drop-shadow-md ">
      <div className="w-11/12 flex items-center justify-between  mx-auto">
        <div className="flex items-center w-3/12 justify-start ">
          <IconTitle titleName={`chinez`} titleClass={`font-black`} />
        </div>
        <div className="items-center flex w-6/12 justify-around ">
          <NavPagination
            namePath={`how it works`}
            path={`/about`}
            customClass={`text-slate-500`}
          />
          <NavPagination
            namePath={`browse`}
            path={`/about`}
            customClass={`text-slate-500`}
          />
          <NavPagination
            namePath={`search`}
            path={`/about`}
            customClass={`text-slate-500`}
          />
          <NavPagination
            namePath={`start a profile`}
            path={`/about`}
            customClass={`text-blue-500 font-bold`}
          />
          <NavPagination
            namePath={`add your agency`}
            path={`/about`}
            customClass={`text-blue-500 font-bold`}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
