import React, { useEffect , useState} from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
padding: 100px;
`;

const Left = styled.div`
flex: 1;
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`;

const Image = styled.img`
height: 50vh;
width: 30vh;
`;

const Right = styled.div`
flex: 2;
display: flex;

justify-content:space-between;

padding: 20px;

`;

const Title = styled.h1``;

const Span = styled.span`
padding-right: 5px;
font-weight: 900;
`;
const Description = styled.div`
display: flex;
flex-direction: column;
gap:5px;
`;

const TDesc = styled.h3``;

const Desc = styled.p`
width: 80%;
`;

const Author = styled.p``;

const Info = styled.div`
display: flex;
flex-direction: column;
gap: 30px;

`;

const Buttion = styled.button`
width: 15%;
padding: 10px;
border: none;
background-color: #6d99ef;
color: white;
cursor: pointer;
user-select: none;

`;



const NewProduct = () => {

  const [product, setProduct] = useState({})

  const location = useLocation();

  const id = location.pathname.split("/")[2];
  console.log(id);

  useEffect(()=>{
    const getProduct = async () => {
      const res = await axios.get("http://localhost:8080/api/book/find/" + id);
      setProduct(res.data);
      console.log(res.data);
    }
    getProduct();
  },[id])

  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Container>
    <Wrapper>
      <Left>
        <ImageContainer>
          <Image src={product.image}/>
        </ImageContainer>
      </Left>
      <Right>
      <Info>
        <Title>{product.title}</Title>
        <Author><Span>Author:</Span>{product.author}</Author>
        <Author><Span>Genre:</Span>{product.genre}</Author>
        <Description>

        <TDesc><Span>Book Description:</Span></TDesc>
        <Desc>
        {product.description}
        </Desc>
        </Description>
        <Buttion>Add to Cart</Buttion>
        
      </Info>
      </Right>
    </Wrapper>
    </Container>
      <Footer/>
    </div>
  )
}

export default NewProduct
