import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/action";

const AddProduct = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props?.productList?.data?.products);
  }, [props?.productList]);
  console.log(products);
  return (
    <>
      <button onClick={props.fetchProduct}>Display Prouduct </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>thumbnail </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p, idx) => {
            return (
              <tr key={idx}>
                <th>{p.id}</th>
                <th>{p.title}</th>
                <th>{p.description}</th>
                <th>{p.price}</th>
                <th>
                  <img src={p.thumbnail} height="300" width="300" />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct())
  };
};
const mapStateToProps = (state) => {
  return {
    productList: state.productsList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
