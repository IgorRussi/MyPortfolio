import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <NavbarWrapper>
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#services")}>Services</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#Skills")}>Skills</button>
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </NavbarWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  height: auto;
  overflow: hidden;
  z-index: 3;
  background-color: #fcfcfd;
`;

const ContentWrapper = styled.div`
  padding: 10px 30px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    padding: 10px 0px 10px 0px;
  }
`;

const NavbarWrapper = styled.div`
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
  width: 85%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name {
    font-weight: 600;
  }
  .links-wrapper {
    button {
      text-decoration: none;
      padding: 10px;
      font-family: "Open Sans";
      opacity: 0.6;
      transition: all 0.2s ease-in-out;
      font-size: 12px;
      background-color: transparent;
      outline: none;
      border: 0px;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
    .active {
      color: black;
    }
  }
`;
