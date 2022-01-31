import React from "react";
import styled from "styled-components";

export default function MockupAnimationBest() {
  return (
    <Wrapper>
      <div className="ContentWrapper">
        <div className="Logo1" />
        <div className="Logo2" />
        <div className="Logo3" />
        <div className="Logo4" />
        <div className="Logo5" />
        <div className="Logo6" />
        <div className="Logo7" />
        <div className="Logo8" />
        <div className="Logo9" />
        <div className="Logo11" />
        <div className="Logo12" />
        <div className="Logo13" />
        <div className="Logo14" />
        <div className="Logo15" />
        <div className="Logo16" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  * {
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }

  .ContentWrapper {
    position: absolute;
    width: 400px;
    height: 527px;
    background: url("/images/animations/igorhome3.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  :hover div {
    &.ContentWrapper {
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
      position: absolute;
      width: 400px;
      height: 527px;
      background: url("/images/animations/igorhome2.png");
      filter: brightness(104%) saturate(110%);
      background-size: cover;
      background-repeat: no-repeat;
    }
    &.Logo1 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo2 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo3 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo4 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo5 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo6 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &.Logo7 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo8 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo9 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo11 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo12 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo13 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo14 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo15 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.Logo16 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
  }
  .Logo1 {
    position: absolute;
    width: 121px;
    height: 87px;
    left: -114px;
    top: 120px;
    background: url("/images/animations/react.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .Logo2 {
    position: absolute;
    width: 73px;
    height: 57px;
    left: -90px;
    top: 248px;
    background: url("/images/animations/javascript.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo3 {
    position: absolute;
    width: 115px;
    height: 78px;
    left: -66px;
    top: 10px;
    background: url("/images/animations/github.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
  }

  .Logo4 {
    position: absolute;
    width: 64px;
    height: 67px;
    left: -63px;
    top: 350px;
    background: url("/images/animations/css.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .Logo5 {
    position: absolute;
    width: 95px;
    height: 92px;
    left: 14px;
    top: 437px;
    background: url("/images/animations/htmllogo.svg");
    background-size: 70% 90%;
    background-repeat: no-repeat;
  }

  .Logo6 {
    position: absolute;
    width: 99px;
    height: 78px;
    left: 301px;
    top: 437px;
    background: url("/images/animations/Gatsby_Monogram.png");
    background-size: 70% 90%;
    background-repeat: no-repeat;
  }

  .Logo7 {
    position: absolute;
    width: 70px;
    height: 75px;
    left: 395px;
    top: 350px;
    background: url("/images/animations/figma.png");
    background-size: 70% 90%;
    background-repeat: no-repeat;
  }

  .Logo8 {
    position: absolute;
    width: 75px;
    height: 66px;
    left: 404px;
    top: 248px;
    background: url("/images/animations/next-js.svg");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo9 {
    position: absolute;
    width: 123px;
    height: 71px;
    left: 372px;
    top: 120px;
    background: url("/images/animations/node.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo11 {
    position: absolute;
    width: 73px;
    height: 59px;
    left: 354px;
    top: 10px;
    background: url("/images/animations/express.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo12 {
    position: absolute;
    width: 80px;
    height: 51px;
    right: -12rem;
    top: 16rem;
    background: url("/images/animations/Bootstrap.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo13 {
    position: absolute;
    width: 90px;
    height: 51px;
    right: 528px;
    top: 252px;
    background: url("/images/animations/tailwind.svg");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo14 {
    position: absolute;
    width: 74px;
    height: 60px;
    right: 31rem;
    top: 35px;
    background: url("/images/animations/Python.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo15 {
    position: absolute;
    width: 69px;
    height: 57px;
    right: -8rem;
    top: 35px;
    background: url("/images/animations/vscode.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Logo16 {
    position: absolute;
    width: 115px;
    height: 115px;
    right: 27rem;
    top: 413px;
    background: url("/images/animations/Mongo.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (max-width: 768px) {
    transform: scale(0.9);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.6);
  }
`;
