import React from 'react'
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import styled from '@emotion/styled';
import Productlist from '../Components/Productlist';

const Container = styled.div`
display: flex;
gap: 20px;
padding: 20px;
background-color: white;
position: sticky;
top: 0;
z-index: 100;

`

const Filter = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: black;
gap: 10px;
font-size: 20px;
font-weight: 600;
`

const Select = styled.select`
border: 1px solid lightgray;
outline: none;
padding: 5px;
`

const Option = styled.option``

const FilterText = styled.span``  



const List = () => {
  return (
    <>
 <Announcement/>
      <Navbar/>
    <div>
    <Container>
        <Filter>
          <FilterText>Filter Genre:</FilterText>
          <Select>
            <Option disabled selected>
              Genre
            </Option>
            <Option>Romance</Option>
            <Option> Mystery</Option>
            <Option> Fantasy</Option>
            <Option>Thrillers</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>

    </Container>
     <Productlist/>
      <Footer/>
    </div>
    </>
  )
}

export default List
