"use client";
import TokenInfo from "@/components/TokenInfo";
// import { fetchTokenInfo } from "@/utils/api";
import { fetchTheTokenInfo } from "@/utils/secondAPI";
import { useEffect, useState } from "react";

export default function Home() {
  const [tokenInfo, setTokenInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTheTokenInfo();
      console.log(data);
      console.log("ok");
      if (data) {
        setTokenInfo(data.result);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center bg-pink-500">
      <div className="flex flex-col  mx-8">
        <h1 className="flex justify-center items-center content-center  my-4 font-bold font-sans text-2xl">
          Welcome!
        </h1>
        <h2 className="flex justify-center items-center content-center  my-4 font-bold font-sans text-2xl">
          Here is the latest information about current circulating price of a
          BEP-20 token
        </h2>
      </div>
      {/* <div className="border-2 p-5 shadow-2xl border-yellow-950 bg-slate-300">
        {tokenInfo && <TokenInfo amount={tokenInfo} />}
      </div> */}

      <div className="flex justify-center">
        {<TokenInfo validators={tokenInfo} />}
      </div>
    </main>
  );
}
