import React from "react";
import styled from "styled-components";
import { H1 } from "../styles/TextStyles";

const Services = () => {
  return (
    <Wrapper id="services">
      <HeaderContainer>
        <Title>
          <h1> SERVICES</h1>
        </Title>
      </HeaderContainer>

      <ContainerCards>
        <Box>
          <ImgBox>
            <img src="/images/animations/103.svg" alt=""></img>
          </ImgBox>
          <Content>
            <h2>
              Web Design
              <br></br>
              <span>Responsive Design</span>
            </h2>
          </Content>
        </Box>
        <Box>
          <ImgBox>
            <img src="/images/animations/22.svg" alt=""></img>
          </ImgBox>
          <Content>
            <h2>
              Web Dev
              <br></br>
              <span>React - JavaScript</span>
            </h2>
          </Content>
        </Box>
        <Box>
          <ImgBox>
            <img src="/images/animations/84.svg" alt=""></img>
          </ImgBox>
          <Content>
            <h2>
              App Dev
              <br></br>
              <span>IOS - Android</span>
            </h2>
          </Content>
        </Box>
        <Box>
          <ImgBox>
            <img src="/images/animations/97.svg" alt=""></img>
          </ImgBox>
          <Content>
            <h2>
              UI//UX Design
              <br></br>
              <span>Figma</span>
            </h2>
          </Content>
        </Box>
      </ContainerCards>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#67aaf9">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values="
            M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,250.7C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            M0,32L80,58.7C160,85,320,139,480,181.3C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            M0,64L80,101.3C160,139,320,213,480,250.7C640,288,800,288,960,245.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
            
"
          />
        </path>
      </svg>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  position: relative;
  background-color: #67aaf9;
  padding: 1rem 0;

  svg {
    transform: rotate(180deg);
    position: absolute;
    top: 467px;
    bottom: 0;
    @media (max-width: 850px) {
      top: inherit;
      bottom: inherit;
      margin-top: 0.6rem;
    }
  }
`;

// cards

const ContainerCards = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px;
`;
const Box = styled.div`
  position: relative;
  width: 14rem;
  height: 16rem;
  margin: 1rem;

  :hover img {
    transform: translate(0rem, -3rem);
    transition: all 0.5s ease-in-out;
  }
`;
const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  z-index: 2;
  transition: all 0.5s ease-in-out;

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    resize: both;
    border-radius: 0.5rem;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 107%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  background-color: #fff;
  z-index: 1;
  align-items: flex-end;
  text-align: center;
  transition: 0.5s ease-in-out;
  border-radius: 0.5rem;
  opacity: 42%;

  h2 {
    display: block;
    font-size: 16px;
    color: #111;
    font-weight: 500;
    line-height: 2rem;
  }

  span {
    color: #555;
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
  }
`;

const Title = styled(H1)`
  color: #24292d;
  position: relative;
  display: inline-block;
  line-height: 1;
  font-size: 3rem;
  @media (max-width: 850px) {
    font-size: 2.25rem;
  }
`;
const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;
