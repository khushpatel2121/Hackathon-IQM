import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 50vh;
width: 50vw;
padding: 30px;
flex: 1;
margin: 3px;
position: relative;

`
const Img =styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
color:black;
margin-bottom: 20px;
background-color: #f0eee2;
padding: 10px;
`
const Button = styled.button`
border: none;
padding: 10px;
font-size:20px ;
cursor: pointer;
font-weight: 600;
`
const RLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const CategoriesItem = ({item}) => {
  return (
   <Container>
   <Img
    src={item.img}
   />
   <Info>
    <Title>
    {item.title}
    </Title>
<RLink to='/productlist'>

    <Button>
    {item.Button}
    </Button>
</RLink>
   </Info>
   </Container>
  )
}

export default CategoriesItem