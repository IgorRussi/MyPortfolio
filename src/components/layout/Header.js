import React from "react";
import styled from "styled-components";
import NavigationBar from "../sections/NavigationBar";

export default function Header() {
  return (
    <Wrapper>
      <NavigationBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f9fa;
  margin: 20px 40px 10px 40px;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    margin: 20px 10px 10px 10px;
  }
`;
