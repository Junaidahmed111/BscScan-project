import React from "react";
interface TokenInfoProps {
  validators: {
    validatorAddress: string;
    validatingVotingPower: number;
  }[];
}
const TokenInfo = ({ validators }: TokenInfoProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {validators.map((validator, index) => (
        <div key={index} className="flex flex-col">
          <span> Validator Address: {validator.validatorAddress}</span>
          <span> Voting Power{validator.validatingVotingPower}</span>
        </div>
      ))}
    </div>
  );
};

export default TokenInfo;
