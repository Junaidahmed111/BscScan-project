import React from "react";

interface ConversionProps {
  conversions: {
    ids: string;
    vs_currency: string;
    include_24hr_change: string;
    include_last_updated_at: string;
  }[];
}

const PriceConversion = ({ conversions }: ConversionProps) => {
  return (
    <div className="flex flex-col">
      {conversions.map((exchangeCoin, index) => (
        <div key={index} className="flex flex-col">
          <span>The name of the coin is {exchangeCoin.ids}</span>
          <span>Its price in PKR is {exchangeCoin.vs_currency}</span>
          <span>
            The chnage in price in last 24 hours in PKR is{" "}
            {exchangeCoin.include_24hr_change}{" "}
          </span>
          <span>
            Its last price updated at {exchangeCoin.include_last_updated_at}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PriceConversion;
