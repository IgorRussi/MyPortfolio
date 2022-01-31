import React from "react";
import data from "../../data/yourdata";
import styled from "styled-components";
import { H1 } from "../styles/TextStyles";

const Skills = () => {
  return (
    <Wrapper id="Skills">
      <ContentWrapper>
        <SkillWrapper>
          <Title>SKILLS</Title>
          <SkillGrid>
            {data.skills.map((skill, index) => (
              <Skill key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </Skill>
            ))}
          </SkillGrid>
        </SkillWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
  background-color: #67aaf9;
  position: relative;
`;

const ContentWrapper = styled.div`
  padding: 50px 30px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    padding: 20px 30px 20px;
  }
`;

const SkillWrapper = styled.div`
  width: 80vw;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3rem;
    line-height: 20px;
    gap: 10px;

    @media (max-width: 850px) {
      font-size: 2.25rem;
    }
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px;
  grid-gap: 60px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    height: 3rem;
    margin: 10px;
  }
  p {
    font-size: 14px;
    gap: 10px;
    color: #24292d;
  }

  @media (max-width: 450px) {
    gap: 20px;
  }
`;

const Title = styled(H1)`
  color: #24292d;
  gap: 10px;

  @media (max-width: 850px) {
    font-size: 2.25rem;
  }
`;
