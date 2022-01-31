import React from "react";
import styled from "styled-components";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <WrappCard
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <WrappContent className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </WrappContent>
    </WrappCard>
  );
};

export default Card;

const WrappCard = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const WrappContent = styled.div`
  font-family: "Open Sans";
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: all 500ms ease-in-out;
  transform: translate(0, 20px);
  cursor: pointer;
  h1 {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 20px;
  }
  p {
    font-size: 10px;
    color: white;
    margin-bottom: 20px;
  }

  .btn {
    background-color: black;
    color: white;
    padding: 10px;
    text-decoration: none;
  }
  &:hover {
    opacity: 1;
    transform: translate(0, 0px);
  }
`;
