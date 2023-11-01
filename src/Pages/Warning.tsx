import { useEffect, useState } from "react";
import axios from "axios";
import ClipboardCopy from "../components/ClipboardCopy";

const Warning = (): JSX.Element => {
  const [queryParam, setQueryParam] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  const submitClick = () => {
    setData([]);
    const url = "http://localhost:3001/products/vulnerable?name=" + encodeURIComponent(queryParam);
    console.log(url);

    axios.get(url)
    .then((res: { data: { name: string }[] }) => {
      console.log(res);
      setData(prevData => {
        if (Array.isArray(prevData)) {
          return [...prevData, ...res.data.map((item) => item?.name ?? '')];
        }
        return [] as string[];
      });
    }).catch((err: Error) => {
      console.log(err);
    });
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
        <input type="text" className="border-2 border-red-100 p-1 rounded-md" value={queryParam} onChange={(e) => setQueryParam(e.target.value)}/>
        <button className="border-2 border-red-100 p-1 mx-2 rounded-md" type="button" onClick={() => submitClick()}>press</button>
        <div className="bg-gray-200 max-w-fit p-2 mt-2">
        <ClipboardCopy copyText="apple" />
        <ClipboardCopy copyText="apple' OR 1 = 1; #" />
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br/>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br/>
        </div>
      </form>
      {data.map((item) => (
        <div className="bg-gray-200 max-w-fit p-2 mt-2">
          <p>{item}</p>
        </div>
      ))}
    </>
  );
};

export default Warning;