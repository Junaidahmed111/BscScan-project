import React from "react";
type TokenInfoProps = {
  name: string;
  price: number;
};
const TokenInfo = ({ name, price }: TokenInfoProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default TokenInfo;
