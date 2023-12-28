const API_URL = "";
export const fetchTokenInfo = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: "Bearer " + "",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};
