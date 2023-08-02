import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height: 40px;
background-color: #272935;
color: white;
align-items: center;
font-size: 20px;

display: flex;
justify-content: center;
`
const Span = styled.span`
display: flex;
align-items: center;
padding: 10px;
`

const Announcement = () => {
  return (
  <Container>
    Free Shipping  <Span> <LocalShippingIcon/></Span> on the first order
  </Container>
  )
}

export default Announcement
