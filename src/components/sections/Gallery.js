import React from "react";
import Carousel from "react-grid-carousel";
import styled from "styled-components";

const Gallery = () => {
  return (
    <Wrapper>
      <WrapperContainer>
        <CarouselGroup>
          <Carousel cols={3} rows={1} gapleft={1} p={3} m={2} loop>
            <Carousel.Item>
              <Card2>
                <CardHeader>
                  <img
                    src="https://picsum.photos/800/600?random=1"
                    alt="rover"
                  />
                </CardHeader>

                <CardBody>
                  <span>Technology</span>
                  <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                  <p>An exploration into the truck's polarising design</p>
                  <User>
                    <img
                      src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="user"
                    />

                    <img
                      src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="user"
                    />
                    <UserInfo>
                      <h5>July Dec</h5>
                      <h5>2h ago</h5>
                    </UserInfo>
                  </User>
                </CardBody>
              </Card2>
            </Carousel.Item>

            <Carousel.Item>
              <Cards>
                <Card2>
                  <CardHeader>
                    <img
                      src="https://picsum.photos/800/600?random=2"
                      alt="rover"
                    />
                  </CardHeader>

                  <CardBody>
                    <span>Technology</span>
                    <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                    <p>An exploration into the truck's polarising design</p>
                    <User>
                      <img
                        src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                        alt="user"
                      />
                      <UserInfo>
                        <h5>July Dec</h5>
                        <h5>2h ago</h5>
                      </UserInfo>
                    </User>
                  </CardBody>
                </Card2>
              </Cards>
            </Carousel.Item>
            <Carousel.Item>
              <Cards>
                <Card2>
                  <CardHeader>
                    <img
                      src="https://picsum.photos/800/600?random=3"
                      alt="rover"
                    />
                  </CardHeader>

                  <CardBody>
                    <span>Technology</span>
                    <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                    <p>An exploration into the truck's polarising design</p>
                    <User>
                      <img
                        src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                        alt="user"
                      />
                      <UserInfo>
                        <h5>July Dec</h5>
                        <h5>2h ago</h5>
                      </UserInfo>
                    </User>
                  </CardBody>
                </Card2>
              </Cards>
            </Carousel.Item>
          </Carousel>
        </CarouselGroup>
      </WrapperContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const WrapperContainer = styled.div`
  margin: 20px;
  justify-content: center;
  position: relative;
`;

const CarouselGroup = styled.div`
  margin: 40px;
  justify-content: center;
  position: relative;
  display: flex;
`;

const Cards = styled.div`
  margin-left: 10px;
`;
const Card2 = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
  min-height: 250px;
  font-family: Roboto;

  @media (max-width: 1022px) {
    padding: 2px;
  }

  span {
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    margin: 10px 0px 10px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }

  p {
    font-size: 13px;
    margin: 23px 0px 13px 0px;
  }
`;

const User = styled.div`
  display: flex;
  margin-top: auto;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  h5 {
    font-size: 12px;
  }
`;

const UserInfo = styled.div``;

export default Gallery;
