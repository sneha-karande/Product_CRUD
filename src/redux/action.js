import axios from "axios";
import { PRODUCT_LIST } from "./constant";

export const fetchProduct = () => {
  return function (dispatch) {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        const products = response;
        // console.log("products", products);
        dispatch({ type: PRODUCT_LIST, payload: products });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
