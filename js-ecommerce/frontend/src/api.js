import axios from "axios";
import { APIURL } from "./config.js";

export const getProduct = async (id) => {
  try {
    const response = await axios({
      //url: `${APIURL}/products/${id}`,
      url: `${APIURL}/products/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return {error:err.response.data.message || err.message };
  }
};
