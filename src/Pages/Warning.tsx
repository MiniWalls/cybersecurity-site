import { useEffect, useState } from "react";

const Warning = (): JSX.Element => {
  const [queryParam, setQueryParam] = useState<string>("");

  const submitClick = () => {
    const url = "http://localhost:3001/products/vulnerable?name=" + encodeURIComponent(queryParam);
    console.log(url);
  };


  useEffect(() => {
    const wO: WindowProxy = window.opener as WindowProxy;
    if(!wO) return; //If window opener doesnt exist, return
    console.log(window.opener);
    wO.open("http://localhost:3000/login", "_self");
  },[]);

  return(
    <>
      <h1 className="text-red-600 text-2xl">SQL Injection playground!!!</h1>
      <form className="mt-2" >
        <input type="text" className="border-2 border-red-100 p-1" value={queryParam} onChange={(e) => setQueryParam(e.target.value)}/>
        <button className="border-2 border-red-100 p-1 mx-2" type="button" onClick={() => submitClick()}>press</button>
        <div className="bg-gray-200 max-w-fit p-2 mt-2">
        58' OR 1 = 1; #<br/>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br/>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br/>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br/>
        </div>
      </form>
    </>
  );
};

export default Warning;