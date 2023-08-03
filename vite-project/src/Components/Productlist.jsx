import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./ProductCard";
import axios from "axios";

const PContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 120px 20px 120px;
  gap: 20px;
`;

const Productlist = ({ ...props }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8080/api/book");
      console.log(res.data);
      setProducts(res.data);
    };
    getProducts();
  },[])

  
  return (
    <>
      <PContainer>
      {
        products.map((item) => (
          <Product key={item.id} item={item} />
        ))
      }
 
      </PContainer>
    </>
  );
};

export default Productlist;
