import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./ProductCard";

const PContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 120px 20px 120px;
  gap: 20px;
`;

const Productlist = ({ ...props }) => {
  return (
    <>
      <PContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </PContainer>
    </>
  );
};

export default Productlist;
