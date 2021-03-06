import React from "react";
import styled from "styled-components";
import { tooltipData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";

function MenuToolTip(props) {
  const { isOpen } = props;
  /* States hooks (permite criar estados sem precisar criar uma classe): 
 1 Declarar uma variavel State (neste caso isOpen): const [isOpen, setIsOpen] = useState(false)
 2 Sintaxe basica : const [nomeState, setNomeState] = useState(pode ser boleano, 0)
 3 Manipulando o State
 {isOpen ? "Open" : "Closed"}
*/

  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton key={index} item={item} />
      ))}
    </Wrapper>
  );
}

export default MenuToolTip;

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  color: #ffffff;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`;
