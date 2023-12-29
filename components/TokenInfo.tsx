import React from "react";
interface TokenInfoProps {
  amount: number;
}
const TokenInfo = ({ amount }: TokenInfoProps) => {
  return (
    <div className="">
      <h2>{amount}</h2>
    </div>
  );
};

export default TokenInfo;
