"use client";
import { useEffect, useState } from "react";
import TokenInfo from "@/components/TokenInfo";
import { fetchTheTokenInfo } from "@/utils/secondAPI";
import { fetchConversionApi } from "@/utils/priceConAPI";
import PriceConversion from "@/components/PriceConversion";
import { Result } from "postcss";

export default function Home() {
  const [tokenInfo, setTokenInfo] = useState([]);
  const [priceConversion, setPriceConversion] = useState(null);

  useEffect(() => {
    const fetchConversion = async () => {
      const theData = await fetchConversionApi();
      console.log(theData);
      console.log("good data");
      if (theData) {
        setPriceConversion(theData);
      }
    };
    fetchConversion();
  }, []);

  // useEffect for token info
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
          Here is the latest information about top 21 validators on BNB Smart
          Chain
        </h2>
      </div>

      <div className="flex justify-center">
        <TokenInfo validators={tokenInfo} />
      </div>
      <div className="flex ">
        <PriceConversion conversions={priceConversion} />
      </div>
    </main>
  );
}
