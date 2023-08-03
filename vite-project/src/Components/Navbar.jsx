import React from "react";
import styled from "styled-components";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: #f0eee2;
  height: 60px;
  user-select: none;
  z-index: 100;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
`;

const Span = styled.div``;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  background-color: transparent;
  width: 80%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 900;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const MenuItem = styled.div`
 
  cursor: pointer;
  margin-left: 10px;
`;

const RLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
`;

const Navbar = () => {
  // const quantity  = useSelector(state=>state.cart.quantity)
  const {currentUser} = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Left>
          <RLink to="/">
            <Logo>SERIES STORE.</Logo>
          </RLink>
        </Left>
        <Center>
          <Span></Span>
          <SearchContainer style={{ fontWeight: "200", color: "gray" }}>
            <SearchOutlined />
            <Input />
          </SearchContainer>
        </Center>
        <Right>
          {currentUser ? (
            <>
            <MenuItem>

              <RLink to="/profile">
                <AccountCircleIcon />
              </RLink>
            </MenuItem>
              <RLink to="/cart">
                <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </MenuItem>
              </RLink>
            </>
          ) : (
            <>
              <RLink to="/register">
                <MenuItem>Register</MenuItem>
              </RLink>
              <RLink to="/login">
                <MenuItem>Sign In</MenuItem>
              </RLink>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
