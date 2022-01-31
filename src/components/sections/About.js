import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { H1 } from "../styles/TextStyles";
import DownloadButton from "../buttons/DownloadButton";

const About = () => {
  return (
    <Wrapper id="about">
      <ContentWrapper>
        <HeaderContainer>
          <Title>
            <h1> ABOUT</h1>
          </Title>
        </HeaderContainer>

        <BodyGrid>
          <GridTwo>
            <img src="/images/animations/ciborg.png" alt="" />
          </GridTwo>

          <GridTree>
            <Card1>
              <MockupOne />
              <MockupTwo />
              <MockupTree />
              <MockupFour />
              <MockupFive />
              <MockupSix />
            </Card1>
          </GridTree>

          <GridOne>
            <Fade left big>
              <Description>
                Energetic Front-End Developer with experience and passion for
                responsive website design. Proficient in HTML5, CSS3, jQuery,
                JavaScript and React; plus modern libraries and frameworks. I
                believe that great design is a result of the collaboration
                between designers, developers and stakeholders, whose combined
                experience and efforts come together to create great user
                experiences. As a developer, I aspire to be apart of a team that
                is oriented in this way, and look forward to share my knowledge
                and skill toward the concept and creation of sophisticated
                digital products.
              </Description>
            </Fade>
            <Icon>
              <img src="/images/animations/Terminal.svg" alt="" />
            </Icon>
            <Skills>
              <Fade left big>
                <SkillHtml>
                  <SkillTitle>Education</SkillTitle>
                  <SkillDescription>
                    Graduate<br></br>Network Systems <br></br>University
                    Paulista - São Paulo -Brasil
                  </SkillDescription>
                </SkillHtml>
              </Fade>
            </Skills>
            <Resume>
              <DownloadButton title="Download CV" subtitle="..." />
            </Resume>
          </GridOne>
        </BodyGrid>
      </ContentWrapper>
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

export default About;

const Wrapper = styled.div`
  overflow: hidden;

  svg {
    left: 0px;
    bottom: 0px;
    margin-bottom: -2px;
    margin-top: -148px;

    @media (max-width: 1022px) {
      left: 0px;
      bottom: 0px;
      margin-bottom: -2px;
      margin-top: 0px;
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  max-width: 92rem;
  padding: 0 4rem;
  margin: 40px auto;

  @media (max-width: 850px) {
    padding: 0;
    margin: 0;
  }
`;

const BodyGrid = styled.div`
  padding: 2rem 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    top: -19px;
    width: 87%;
    left: 41px;

    @media (max-width: 819px) {
      /* position: absolute;
      top: -83px;
      width: 129%; */

      position: absolute;
      top: -104px;
      left: -76px;
      width: 129%;
    }

    @media (max-width: 450px) {
      /* position: absolute;
      top: 37px;
      left: -76px;
      width: 129%; */
    }
  }
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    margin-bottom: 17rem;
  }

  @media (max-width: 1022px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
`;

const MockupOne = styled.div`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 27rem;
  top: 20rem;
  z-index: 3;

  background: url("/images/animations/mockup00.svg"),
    radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgb(5 185 239 / 2%) 0%,
      rgb(67 133 243 / 19%) 45.83%,
      rgb(153 236 255 / 60%) 100%
    );
  backdrop-filter: blur(10px);
  border: 0.273134px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  box-shadow: 0px 16.3881px 32.7761px rgb(149 208 249 / 18%);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;

  :hover {
    transform: scale(1.1);
    transition-delay: 0.1s;
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }

  @media (max-width: 1023px) {
    display: none;
    /* position: absolute;
    width: 183px;
    height: 120px;
    left: 1rem;
    top: 20rem;
    z-index: 3; */
  }
`;

const MockupTwo = styled.div`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 40rem;
  top: 29rem;
  z-index: 3;

  background: url("/images/animations/mockup002.svg"),
    radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgb(5 185 239 / 2%) 0%,
      rgb(67 133 243 / 19%) 45.83%,
      rgb(153 236 255 / 60%) 100%
    );
  backdrop-filter: blur(10px);
  border: 0.273134px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  box-shadow: 0px 16.3881px 32.7761px rgb(149 208 249 / 18%);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;

  :hover {
    transform: scale(1.1);
    transition-delay: 0.1s;
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }
  @media (max-width: 1023px) {
    display: none;
    /* position: absolute;
    width: 183px;
    height: 120px;
    left: 5rem;
    top: 29rem;
    z-index: 3; */
  }
`;

const MockupTree = styled.div`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 40rem;
  top: 20rem;
  z-index: 3;

  background: url("/images/animations/cardfigma.svg"),
    radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgb(5 185 239 / 2%) 0%,
      rgb(67 133 243 / 19%) 45.83%,
      rgb(153 236 255 / 60%) 100%
    );
  backdrop-filter: blur(10px);
  border: 0.273134px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  box-shadow: 0px 16.3881px 32.7761px rgb(149 208 249 / 18%);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
  :hover {
    transform: scale(1.1);
    transition-delay: 0.1s;
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }

  @media (max-width: 1023px) {
    display: none;
    /* position: absolute;
    width: 183px;
    height: 120px;
    left: 5rem;
    top: 20rem;
    z-index: 3; */
  }
  /* @media (max-width: 850px) {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 179px;
    top: 198px;
    transform: scale(0.8); */
`;

const MockupFour = styled.div`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 27rem;
  top: 29rem;
  z-index: 3;

  background: url("/images/animations/cardfigma.svg"),
    radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgb(5 185 239 / 2%) 0%,
      rgb(67 133 243 / 19%) 45.83%,
      rgb(153 236 255 / 60%) 100%
    );
  backdrop-filter: blur(10px);
  border: 0.273134px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  box-shadow: 0px 16.3881px 32.7761px rgb(149 208 249 / 18%);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
  :hover {
    transform: scale(1.1);
    transition-delay: 0.1s;
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }
  /* @media (max-width: 850px) {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 179px;
    top: 198px;
    transform: scale(0.8); */

  @media (max-width: 1023px) {
    display: none;
    /* position: absolute;
    width: 183px;
    height: 120px;
    left: 27rem;
    top: 29rem;
    z-index: 3; */
  }
`;

const MockupFive = styled.div`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 27rem;
  top: 38rem;
  z-index: 3;

  background: url("/images/animations/cardmongo.svg"),
    radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgb(5 185 239 / 2%) 0%,
      rgb(67 133 243 / 19%) 45.83%,
      rgb(153 236 255 / 60%) 100%
    );
  backdrop-filter: blur(10px);
  border: 0.273134px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  box-shadow: 0px 16.3881px 32.7761px rgb(149 208 249 / 18%);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
  :hover {
    transform: scale(1.1);
    transition-delay: 0.1s;
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }
  /* @media (max-width: 850px) {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 179px;
    top: 198px;
    transform: scale(0.8); */

  @media (max-width: 1023px) {
    display: none;
    /* position: absolute;
    width: 183px;
    height: 120px;
    left: 17rem;
    top: 38rem;
    z-index: 3; */
  }
`;

const MockupSix = styled.div`
  position: absolute;
  width: 183px;
  height: 120px;
  left: 40rem;
  top: 38rem;
  z-index: 3;

  background: url("/images/animations/cardmongo.svg"),
    radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgb(5 185 239 / 2%) 0%,
      rgb(67 133 243 / 19%) 45.83%,
      rgb(153 236 255 / 60%) 100%
    );
  backdrop-filter: blur(10px);
  border: 0.273134px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  box-shadow: 0px 16.3881px 32.7761px rgb(149 208 249 / 18%);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px;
  :hover {
    transform: scale(1.1);
    transition-delay: 0.1s;
    transition: 1s cubic-bezier(0.01, 0.01, 0.01, 1);
  }
  /* @media (max-width: 850px) {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 179px;
    top: 198px;
    transform: scale(0.8); */

  @media (max-width: 1023px) {
    display: none;
    /* position: absolute;
    width: 183px;
    height: 120px;
    left: 20rem;
    top: 38rem;
    z-index: 3; */
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Title = styled(H1)`
  color: #24292d;
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
  line-height: 1;
  /* font-size: 2.8rem; */
  margin-top: 10rem;
  font-size: 3rem;

  @media (max-width: 850px) {
    margin-top: 5rem;
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 13px;
  color: #7a7a7a;
  line-height: 1.6;
  text-align: center;
  margin: 20px 40px 20px 40px;
`;

const GridOne = styled.div`
  /* margin-right: 1.5rem; */
  color: white;

  @media (max-width: 850px) {
    align-items: center;
    margin-right: auto;
    text-align: center;
    margin-bottom: 2rem;

    h3 {
      margin-bottom: 2rem;
    }
  }

  p {
    /* font-size: 1.25rem;
    color: White;
    line-height: 1.6; */
  }

  h3 {
    color: #7a7a7a;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const GridTree = styled.div`
  display: flex;
`;

const GridTwo = styled.div`
  margin-right: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;

  img {
    width: 100%;
    height: auto;
    z-index: 2;

    @media (max-width: 850px) {
      width: 96%;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 850px) {
    img {
      width: 96%;
      margin-bottom: 1.5rem;
    }
    margin-right: 0rem;
  }

  @media (max-width: 450px) {
  }
`;

const Skills = styled.div`
  margin: 1.5rem 0 2.5rem 0;
`;

const SkillHtml = styled.div`
  margin: 1rem 0;
`;

const SkillTitle = styled.div`
  color: #555;
  font-weight: 600;
  margin-bottom: 0.3rem;
  text-align: center;
`;

const SkillDescription = styled.div`
  color: #555;
  font-weight: 300;
  margin-bottom: 0.3rem;
  text-align: center;
  font-size: 12px;
  line-height: 130%;
`;

const Icon = styled.div`
  position: absolute;
  top: 281px;
  left: 849px;
  z-index: 3;
  img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 850px) {
    left: 252px;
  }
`;

const Resume = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card1 = styled.div`
  /* position: relative;
  display: flex;
  align-items: center;
  justify-content: center; */
`;
