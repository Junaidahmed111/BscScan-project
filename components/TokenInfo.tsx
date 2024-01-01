import React from "react";
interface TokenInfoProps {
  amount: number;
}
const TokenInfo = ({ amount }: TokenInfoProps) => {
  return (
    <div>
      <h2>{amount}</h2>
    </div>
  );
};

export default TokenInfo;
