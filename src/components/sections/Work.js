import React from "react";
import styled from "styled-components";
import { H1 } from "../styles/TextStyles";

const Work = () => {
  return (
    <Wrapper id="work">
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

      <WrapperContainer>
        <WrapperWork>
          <Title>PROJECTS</Title>
          <div className="grid">
            <Card2>
              <CardHeader>
                <img src="https://picsum.photos/800/600?random=1" alt="rover" />
              </CardHeader>

              <CardBody>
                <span>Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <User>
                  <img src="/images/animations/htmllogo.svg" alt="user" />
                  <img src="/images/animations/css.png" alt="user" />
                  <img src="/images/animations/javascript.png" alt="user" />
                  <UserInfo>
                    <h5>July Dec</h5>
                    <h5>2h ago</h5>
                  </UserInfo>
                </User>
              </CardBody>
            </Card2>
            <Card2>
              <CardHeader>
                <img src="https://picsum.photos/800/600?random=2" alt="rover" />
              </CardHeader>

              <CardBody>
                <span>Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <User>
                  <img src="/images/animations/htmllogo.svg" alt="user" />
                  <img src="/images/animations/css.png" alt="user" />
                  <img src="/images/animations/javascript.png" alt="user" />
                  <UserInfo>
                    <h5>July Dec</h5>
                    <h5>2h ago</h5>
                  </UserInfo>
                </User>
              </CardBody>
            </Card2>
            <Card2>
              <CardHeader>
                <img src="https://picsum.photos/800/600?random=3" alt="rover" />
              </CardHeader>

              <CardBody>
                <span>Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <User>
                  <img src="/images/animations/htmllogo.svg" alt="user" />
                  <img src="/images/animations/css.png" alt="user" />
                  <img src="/images/animations/javascript.png" alt="user" />
                  <UserInfo>
                    <h5>July Dec</h5>
                    <h5>2h ago</h5>
                  </UserInfo>
                </User>
              </CardBody>
            </Card2>
            <Card2>
              <CardHeader>
                <img src="https://picsum.photos/800/600?random=4" alt="rover" />
              </CardHeader>

              <CardBody>
                <span>Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <User>
                  <img src="/images/animations/htmllogo.svg" alt="user" />
                  <img src="/images/animations/css.png" alt="user" />
                  <img src="/images/animations/javascript.png" alt="user" />
                  <UserInfo>
                    <h5>July Dec</h5>
                    <h5>2h ago</h5>
                  </UserInfo>
                </User>
              </CardBody>
            </Card2>
            <Card2>
              <CardHeader>
                <img src="https://picsum.photos/800/600?random=5" alt="rover" />
              </CardHeader>

              <CardBody>
                <span>Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <User>
                  <img src="/images/animations/htmllogo.svg" alt="user" />
                  <img src="/images/animations/css.png" alt="user" />
                  <img src="/images/animations/javascript.png" alt="user" />
                  <UserInfo>
                    <h5>July Dec</h5>
                    <h5>2h ago</h5>
                  </UserInfo>
                </User>
              </CardBody>
            </Card2>
            <Card2>
              <CardHeader>
                <img src="https://picsum.photos/800/600?random=6" alt="rover" />
              </CardHeader>

              <CardBody>
                <span>Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <User>
                  <img src="/images/animations/htmllogo.svg" alt="user" />
                  <img src="/images/animations/css.png" alt="user" />
                  <img src="/images/animations/javascript.png" alt="user" />

                  <UserInfo>
                    <h5>July Dec</h5>
                    <h5>2h ago</h5>
                  </UserInfo>
                </User>
              </CardBody>
            </Card2>
          </div>
        </WrapperWork>
      </WrapperContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;

  svg {
    transform: rotate(180deg);

    top: 467px;
    bottom: 0;
    @media (max-width: 850px) {
      top: inherit;
      bottom: inherit;
      margin-top: -3px;
    }
  }
`;

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const WrapperWork = styled.div`
  width: 80vw;
  margin-bottom: 23vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1022px) {
    margin-bottom: 17vh;
  }

  h1 {
    font-size: 3rem;
    line-height: 20px;
    @media (max-width: 850px) {
      font-size: 2.25rem;
    }
  }
  .grid {
    display: grid;
    margin-top: 40px;
    margin-bottom: 200px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20px;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Title = styled(H1)`
  color: #24292d;
  gap: 10px;
`;

const Card2 = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  align-self: center;
  justify-self: center;
`;

const CardHeader = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 200px;
  font-family: Roboto;

  span {
    background: #67aaf9;
    border-radius: 50px;
    font-size: 12px;
    margin: 10px 0px 10px;
    color: #fff;
    padding: 3px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }

  p {
    color: #343a40;
    font-weight: normal;
    font-size: 12px;
    line-height: 130%;
    margin: 10px 0px 10px 0px;
  }

  h4 {
    color: #343a40;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
  }
`;

const User = styled.div`
  display: flex;
  margin-top: auto;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  h5 {
    font-size: 12px;
  }
`;

const UserInfo = styled.div``;

export default Work;
