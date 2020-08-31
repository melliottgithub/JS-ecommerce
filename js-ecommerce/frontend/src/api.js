import axios from "axios";
import { APIURL } from "./config.js";

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${APIURL}${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.results[0]);
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};
