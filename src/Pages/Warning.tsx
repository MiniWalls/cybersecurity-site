import { useEffect } from "react";

const Warning = (): JSX.Element => {
  
  useEffect(() => {
    const wO: WindowProxy = window.opener as WindowProxy;
    console.log(window.opener);
    wO.open("http://localhost:3000/login", "_self");
  },[]);

  return(
    <>
      <h1 className="text-red-600 text-2xl">VIRUS!!!</h1>
    </>
  );
};

export default Warning;