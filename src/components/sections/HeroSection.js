import React from "react";
import styled, { keyframes } from "styled-components";
import MockupAnimationBest from "../animations/MockupAnimationBest";
import PurchaseButton from "../buttons/PurchaseButton";
import { H1, MediumText } from "../styles/TextStyles";

function HeroSection() {
  return (
    <Wrapper>
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

      <ContentWrapper>
        <TextWrapper>
          <Title>
            Hi, <br />
            I'm <span class="name">Igor</span>
            <br /> <span class="job">Front End Developer</span>
          </Title>
          <Description>
            Enthusiastic and creative with hands-on skills in a wide range of
            software, tools, and programming languages.
          </Description>
          <PurchaseButton title="CONTACT ME!" subtitle="..." />
        </TextWrapper>
        <MockupWrapper>
          <MockupAnimationBest />
        </MockupWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #f8f9fa;
  position: relative;

  svg {
    position: absolute;
    left: 0px;
    bottom: 0px;

    @media (max-width: 768px) {
      position: absolute;
      left: 0px;
      bottom: 0px;
      margin-top: 0.6rem;
    }
  }
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 70px 30px 340px;
  background-color: #f8f9fa;
  display: grid;
  grid-template-columns: 580px auto;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    /* padding: 40px 30px 380px; */
    margin-bottom: 17rem;
  }

  @media (max-width: 900px) {
    margin-bottom: 17rem;
  }

  @media (max-width: 420px) {
    padding: 10px 30px 96px;
  }
`;
const MockupWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  max-width: 380px;
  display: grid;
  gap: 15px;
  margin: 10px;

  > * {
    animation: ${animation} 1s 0.1s forwards;
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }

  @media (max-width: 1023px) {
    max-width: 100%;
    gap: 15px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const Title = styled(H1)`
  color: #24292d;
  .name {
    color: #4285f4;
  }
  .job {
    font-size: 35px;
  }
  .emoji {
    font-size: 20px;
  }
  @media (max-width: 1023px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 35px;

    .name {
      color: #4285f4;
    }
    .job {
      font-size: 18px;
    }
    .emoji {
      font-size: 20px;
    }
  }
`;

const Description = styled(MediumText)`
  color: #343a40;
  font-size: 14px;
  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (max-width: 1023px) {
    text-align: center;
  }
`;
