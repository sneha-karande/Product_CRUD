import { PRODUCT_LIST } from "./constant";

const initialState = {
  productList: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        productsList: action.payload
      };
    default:
      return { ...state };
  }
};
