import React, { useState } from 'react';

const SideBar = (): JSX.Element => {
  const [enabled, setEnabled] = useState<boolean>(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25">
      {enabled === true && (
        <div className="bg-slate-50 pr-8 text-2xl absolute left-0 mt-16 h-full pl-20
        ">
          <h1 className="mb-10 text-4xl">
            Categories
          </h1>
          <li className="[&>*]:mb-4 [&>*]:p-1 [&>*]:border-b-2 [&>*]:w-full [&>*]:text-left
          [&>*]:hover:opacity-70 list-none">
            <button className="hover:bg-zinc-100">ABC</button>
            <button className="hover:bg-zinc-100">DEF</button>
            <button className="hover:bg-zinc-100">GHI</button>
          </li>
        </div>
      )}
    </div>
  );
};

export default SideBar;