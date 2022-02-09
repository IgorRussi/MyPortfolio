import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function MenuButton(props) {
  const { item } = props;
  return (
    <Link to={item.link}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  );
}

const MenuItem = styled.div`
  color: #6c757d;
  display: grid;
  grid-template-columns: 80px auto;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;
  background-color: white;

  :hover {
    color: black;
  }
`;
