import React from 'react';
import styled from 'styled-components';
import Maps from './Maps';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Footer from './footer';

const Container = styled.div`
padding: 20px;
`
const Wrapper = styled.div`
display: flex;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
border-right: 1px solid gray;
`
const Image = styled.img`
height:60vh;
width: 300px;
object-fit: cover;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 20px;
width: 80%;
`
const Title = styled.h1`
font-weight: 900;
margin-bottom: 10px;
`
const Author = styled.h4`
font-weight: 500;
`
const Desc = styled.p`
margin-top: 20px;
font-weight: 500;
`


const Top = styled.div`
flex: 1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%;

`
const H1 = styled.h1``

const Bottom = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%;

`
const Bname = styled.div`
display: flex;

align-items: center;
justify-content: center;

`
const Bcontact = styled.div`
display: flex;

align-items: center;
justify-content: center;
`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`




const Rental = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
      <Container>
        <Wrapper>
            <Left>
            
               <Image src='https://cdn01.sapnaonline.com/product_media/9780753555194/md_9780753555194.jpg'/>
               <Details>

               <Title>
               Zero to One
               </Title>
               <Author>
                <b>Author:</b> Peter Thiel
               </Author>
               <Desc>
                <b>Description:</b> The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.
               </Desc>
               </Details>
          
                </Left>
            <Right>
      
            <Top>
            <H1>
              Sellers Location
            </H1>
               <Maps/>
                 
                 </Top>
                 <Bottom>
                 <H1>
                    Seller's Details
                 </H1>
                 <Bname>
                  <b>Name :- </b> Khush Patel 
                 </Bname>
                 <Bcontact>
                <b>
                    <Icon>
                    <LocalPhoneIcon/>:-
                    </Icon>
                </b>
                +91 8160293185
                 </Bcontact>
                 </Bottom>
            </Right>
        </Wrapper>

      </Container>
      <Footer/>
    </div>
  )
}

export default Rental
