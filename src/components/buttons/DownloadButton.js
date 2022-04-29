import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Caption2 } from "../styles/TextStyles";

export default function DownloadButton(props) {
  const { title } = props;
  return (
    <StyledLink href="/Files/Resume Igor Front End Developer 2022.pdf" download>
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/download.svg" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
        </TextWrapper>
      </Wrapper>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  transition: all 0.3s ease 0s;
  @media (max-width: 850px) {
    margin: auto;
  }
`;

const Wrapper = styled.div`
  width: 227px;
  height: 70px;
  padding: 12px;
  background: #4285f4;
  border-radius: 20px;
  border: 1px solid #4285f4;

  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(126, 209, 252, 0.1),
      0px 30px 60px rgba(126, 209, 252, 0.5),
      inset 0px 0px 0px 0.5px rgba(126, 209, 252 0.5);

    transform: translateY(-3px);
    transform: scale(1.02);

    .icon {
      transform: scale(1.1);
    }
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)`
  color: white;
  font-size: 15px;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.1) translate(1px, 1px);
  }
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg);
  }
`;
