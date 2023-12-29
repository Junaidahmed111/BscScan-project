const API_key = "GAKCIFR9K49DMZNEHKXUT8MTQPII2XQ7NT";
const API_URL =
  "https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&apikey=" +
  API_key;
export const fetchTokenInfo = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};
