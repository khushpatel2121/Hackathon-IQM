import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import { Slide } from '@mui/material';
import Slider from '../Components/Slider';
import Categories from '../Components/categories';
import Footer from '../Components/footer';
import NewsLatter from '../Components/NewsLatter';
import Productlist from '../Components/Productlist';


const Container = styled.div`
overflow-x: hidden;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
.iqhISW {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f0eee2;
}
background-color: "#ofeee2";
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 100px 20px 100px;
`

const Home = () => {
  return (
    <div>
    <Container>

      <Announcement/>
      <Navbar/>
        <Slider/>
        <Productlist/>
 <Categories/>

 <NewsLatter/>
 <Footer/>
    </Container>
    </div>
  )
}

export default Home
