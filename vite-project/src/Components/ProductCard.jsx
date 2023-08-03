import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`;

const ImageContainer = styled.div`
padding: 20px 20px 5px 20px;

`;

const Image = styled.img`
height: 50vh;
width: 30vh;
`;

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

gap: 10px;
`;

const Title = styled.h1`
font-size: 100%;
width: 220px;
text-align: center;
`;

const Span = styled.span` 
font-weight: 900;
padding-right: 5px;
`;

const Author = styled.p``;



const Price = styled.span`
text-align: center;

`;

const Button = styled.button`
border: none;
background-color: #6d99ef;
color: white;
padding: 15px;
cursor: pointer;
user-select: none;
`
const Rlink = styled(Link)`
text-decoration: none;
color: inherit;
`



const Product = ({item}) => {
  const id= location.pathname.split("/")[2];

  return (
    <>
    <Rlink to={`/product/${item._id}`}>
  <Container>
    <ImageContainer>
      <Image src={item.image}/>
    </ImageContainer>
    <Info>

      <Title>
      {item.title}
      </Title>
      <Author><Span>Author:</Span>{item.author}</Author>
      
      <Price>₹ {item.price}</Price>
      <Button>Shop Now</Button>
    </Info>
    </Container>
  </Rlink>
    </>
  );
};

export default   Product;