import React from "react";
import styled from "styled-components";

export default function MockupAnimation2() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup6" />
      <div className="mockup7" />
      <div className="mockup8" />
      <div className="mockup9" />
      <div className="mockup10" />
      <div className="mockup11" />
      <div className="mockup12" />
      <div className="mockup13" />
      <div className="mockup14" />
      <div className="mockup3" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  /* perspective: 5000;
  perspective-origin: top left; */

  @media (max-width: 768px) {
    transform: scale(0.8);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.6);
  }
  div {
    /* transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left; */
  }

  * {
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }

  :hover div {
    &.mockup1 {
      transform: translate(-30px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup2 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup3 {
      /* transform: translate(0, 0px); */
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
      transition-delay: 0.1s;
      position: absolute;
      width: 400px;
      height: 527px;
      left: 371px;
      top: -53px;
      filter: brightness(105%) saturate(110%);

      background: url("/images/animations/igorhome2.png");
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: 450px) {
        left: 30px;
        top: 40px;
      }

      /* border: 0.342305px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(27.3844px);
      Note: backdrop-filter has minimal browser support
      border-radius: 6.8461px; */
    }
    &.mockup4 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup5 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup6 {
      transform: translate(-30px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &.mockup7 {
      transform: translate(-10px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup8 {
      transform: translate(-30px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup9 {
      transform: translate(-30px, -30px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup10 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup11 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup12 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup13 {
      transform: translate(30px, -15px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
    &.mockup14 {
      transform: translate(30px, -20px);
      transition-delay: 0.1s;
      transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
    }
  }
  .mockup1 {
    position: absolute;
    width: 121px;
    height: 87px;
    left: 250px;
    top: 120px;

    background: url("/images/animations/react.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support

    border-radius: 16px;
  }

  .mockup2 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 214px;
    top: 0px;

    background: url("/images/animations/mockup2.svg"),
      linear-gradient(
        198.85deg,
        #4316db 12.72%,
        #9076e7 54.49%,
        #a2eeff 100.01%
      );
    border: 0.27304px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
    @media (max-width: 450px) {
      left: -65px;
      top: 17px;
    }
  }

  .mockup3 {
    position: absolute;
    width: 400px;
    height: 527px;
    left: 371px;
    top: -53px;

    background: url("/images/animations/igorhome3.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* border: 0.342305px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px); */
    /* Note: backdrop-filter has minimal browser support */
    /* border-radius: 6.8461px; */
    @media (max-width: 450px) {
      left: 30px;
      top: 40px;
    }

    @media (max-width: 1023px) {
      left: 293px;
    }
  }

  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    left: 194px;
    top: 262px;

    background: url("/images/animations/mockup4.svg"), rgba(39, 20, 62, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 274px;
    left: 616px;
    top: 262px;

    background: url("/images/animations/mockup5.svg"), rgba(39, 20, 62, 0.2);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 14px;
  }
  .mockup6 {
    position: absolute;
    width: 73px;
    height: 57px;
    left: 292px;
    top: 248px;

    background: url("/images/animations/javascript.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: -47px;
      top: 261px;
    }
  }

  .mockup7 {
    position: absolute;
    width: 115px;
    height: 78px;
    left: 300px;
    top: 10px;

    background: url("/images/animations/github.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    /* background-position: center center; */
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: -59px;
      top: 140px;
    }
  }

  .mockup8 {
    position: absolute;
    width: 64px;
    height: 67px;
    left: 338px;
    top: 350px;

    background: url("/images/animations/css.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: center center; */
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    /* border-radius: 16px; */

    @media (max-width: 450px) {
      left: -20px;
      top: 370px;
    }
  }

  .mockup9 {
    position: absolute;
    width: 95px;
    height: 92px;
    left: 412px;
    top: 437px;

    background: url("/images/animations/htmllogo.svg");
    background-size: 70% 90%;
    background-repeat: no-repeat;
    /* background-position: center center; */
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    /* border-radius: 16px; */

    @media (max-width: 450px) {
      left: 42px;
      top: 462px;
    }
  }

  .mockup10 {
    position: absolute;
    width: 99px;
    height: 78px;
    left: 604px;
    top: 445px;

    background: url("/images/animations/Gatsby_Monogram.png");
    background-size: 70% 90%;
    background-repeat: no-repeat;
    /* background-position: center center; */
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: 346px;
      top: 455px;
    }
  }

  .mockup11 {
    position: absolute;
    width: 70px;
    height: 75px;
    left: 719px;
    top: 355px;

    background: url("/images/animations/figma.png");
    background-size: 70% 90%;
    background-repeat: no-repeat;
    /* background-position: center center; */
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: 418px;
      top: 371px;
    }
  }

  .mockup12 {
    position: absolute;
    width: 75px;
    height: 66px;
    left: 768px;
    top: 248px;

    background: url("/images/animations/next-js.svg");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: 428px;
      top: 269px;
    }
  }

  .mockup13 {
    position: absolute;
    width: 123px;
    height: 71px;
    left: 765px;
    top: 145px;

    background: url("/images/animations/node.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: 371px;
      top: 42px;
    }
  }
  .mockup14 {
    position: absolute;
    width: 73px;
    height: 59px;
    left: 735px;
    top: 21px;

    background: url("/images/animations/express.png");
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    /* border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;

    @media (max-width: 450px) {
      left: 400px;
      top: 161px;
    }
  }
`;
