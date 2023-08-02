import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'

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
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Container>
    <Wrapper>
      <Left>
        <ImageContainer>
          <Image src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9798887620237/bhagavad-gita-9798887620237_hr.jpg"/>
        </ImageContainer>
      </Left>
      <Right>
      <Info>
        <Title>The Bhagvat Geeta</Title>
        <Author><Span>Author:</Span>Vyasa</Author>
        <Author><Span>Genre:</Span>Religious Scripture</Author>
        <Description>

        <TDesc><Span>Book Description:</Span></TDesc>
        <Desc>Bhagavadgita, (Sanskrit: “Song of God”) an episode recorded in the great Sanskrit poem of the Hindus, the Mahabharata. It occupies chapters 23 to 40 of Book VI of the Mahabharata and is composed in the form of a dialogue between Prince Arjuna and Krishna, an avatar (incarnation) of the god Vishnu.</Desc>
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
