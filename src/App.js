import AddProduct from "./Product/AddProduct";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const [isDisplay, setDisplay] = useState(false);

  const handleDisplayProduct = () => {
    setDisplay(!isDisplay);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <AddProduct />
        <button> Add product</button>
        <button> Update product</button>
        <button> Delete product</button>
      </div>
    </Provider>
  );
}
