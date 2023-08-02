import LoginImg from "../assets/undraw_books_re_8gea.svg";
import React from "react";
import styled from "styled-components";

const Register = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
`;
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
`;
const Title = styled.h1`
  font-weight: 300;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
const Input = styled.input`
  border: 1px solid gray;
  outline: none;
  padding: 10px;
  font-size: 18px;
  width: 20vw;
`;

const Send = styled.button`
  border: none;
  background-color: #6d99ef;
  color: white;
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
`;

const Hr = styled.hr`
  width: 100%;
`;
const Img = styled.img`
height:50vh;
width:50vw;
  z-index: 9999;
`;

const login = () => {
  const OTP = true;
  return (
    <div>
      <Register>
        <Wrapper>
          <Left>
            <Img src={LoginImg} />
          </Left>
          <Right>
            <Title>Login</Title>
            <Input placeholder="Username" />
   
            <Input placeholder="Password" type="password" />
            <Send>Submit</Send>
          </Right>
        </Wrapper>
      </Register>
    </div>
  );
};

export default login;
