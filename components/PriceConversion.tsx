// components/PriceConversion.tsx
import React from "react";

interface ConversionProps {
  [currency: string]: {
    pkr: number;
    pkr_24h_change: number;
    last_updated_at: number;
  };
}

const PriceConversion: React.FC<ConversionProps> = ({ conversions }) => {
  return (
    <div className="flex flex-col">
      {Object.entries(conversions).map(([currency, currencyData]) => (
        <div key={currency} className="flex flex-col">
          <span>The name of the coin is {currency}</span>
          <span>Its price in PKR is {currencyData.pkr}</span>
          <span>
            The change in price in the last 24 hours in PKR is{" "}
            {currencyData.pkr_24h_change}
          </span>
          <span>Its last price updated at {currencyData.last_updated_at}</span>
        </div>
      ))}
    </div>
  );
};

export default PriceConversion;
