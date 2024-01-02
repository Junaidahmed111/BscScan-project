const API_key = "GAKCIFR9K49DMZNEHKXUT8MTQPII2XQ7NT";
const API_URL =
  "https://api.bscscan.com/api?module=stats&action=validators&apikey" + API_key;

API_key;
export const fetchTheTokenInfo = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};
