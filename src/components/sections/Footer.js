import React from "react";
import styled from "styled-components";
import data from "../../data/yourdata";

const Footer = () => {
  return (
    <Wraper>
      <Container>
        <Grid4>
          <Grid4About>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              officiis quo officia quia?
            </p>
          </Grid4About>

          <Grid4links>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#work">Projects</a>
              </li>
            </ul>
          </Grid4links>

          <Grid4links>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#services">Web Design</a>
              </li>
              <li>
                <a href="#services">Web Dev</a>
              </li>
              <li>
                <a href="#services">App Design</a>
              </li>
              <li>
                <a href="#services">Marketing</a>
              </li>
              <li>
                <a href="#services">UI Design</a>
              </li>
            </ul>
          </Grid4links>
          <Grid4links>
            <SocialIcons>
              <h3>Follow Me</h3>
              {data.social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.img} alt="icons"></img>
                </a>
              ))}
            </SocialIcons>
          </Grid4links>
        </Grid4>

        <Bottomfooter>
          <Copyright>
            <p>Copyright&copy;2022</p>
            <p>Made by Igor</p>
          </Copyright>
        </Bottomfooter>
      </Container>
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
    </Wraper>
  );
};

export default Footer;

const Wraper = styled.div`
  background-color: #67aaf9;
  padding: 0.3rem 0;
  position: relative;

  svg {
    position: absolute;
    bottom: 287px;

    @media (min-width: 727px) and (max-width: 857px) {
      position: absolute;
      top: -10rem;
    }

    @media (max-width: 727px) {
      position: absolute;
      top: -8rem;
    }

    @media (max-width: 570px) {
      position: absolute;
      top: -5rem;
    }
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 5;
  max-width: 77rem;
  padding: 0 4rem;
  margin: 30px auto;
`;

const Grid4 = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 2fr 2fr 3fr;

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;

const Grid4About = styled.div`
  padding: 0;
  color: #24292d;

  h3 {
    margin-bottom: 0.9rem;
    font-weight: 400;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.6;
  }

  @media (max-width: 850px) {
    grid-column: 1 / 3;
    margin-bottom: 2rem;
  }
`;

const Grid4links = styled.div`
  padding: 0 1.7rem;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 0.4rem;
  transition: 0.3s;
  color: #24292d;

  h3 {
    margin-bottom: 0.9rem;
    font-weight: 400;
    font-size: 1.1rem;
  }

  a {
    font-size: 12px;
    margin-bottom: 0.4rem;
    font-weight: 400;
  }

  li {
    margin-bottom: 0.75rem;
    color: #24292d;
  }

  img {
    height: 2rem;
    margin: 2px;
  }

  @media (max-width: 850px) {
    grid-column: 1 / 3;
    margin-bottom: 1.1rem;
  }
`;

const Bottomfooter = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 2fr 2fr 3fr;
  margin-top: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 500px;
    margin: 37px -10px 10px -17px;
    text-align: center;
  }
`;

const Copyright = styled.div`
  p {
    color: #24292d;
    font-size: 1rem;
    display: inline-block;
    text-align: center;
    margin: 0.5rem;
  }
  span {
    color: #24292d;
    cursor: pointer;
    font-weight: 500;
  }

  @media (max-width: 850px) {
    text-align: center;
  }
`;

const Followme = styled.div`
  display: flex;
  align-items: center;
  color: #24292d;

  h3 {
    color: black;
    font-weight: 500;
    font-size: 1.3rem;
  }

  span {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 1.2rem;
    display: inline-block;
    color: #24292d;
  }
`;

const SocialIcons = styled.div`
  height: 2rem;
  margin: 2px;

  @media (max-width: 850px) {
    img {
      height: 2rem;
      margin: 2px;
    }
  }
`;
