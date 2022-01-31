import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const { title, subtitle } = props;
  return (
    <Hireme>
      <a href="#" class="btn">
        CONTACT ME!
      </a>
    </Hireme>
  );
}

const Hireme = styled.div`
  a {
    display: inline-block;
    padding: 0.85rem 2rem;
    background-color: #4285f4;
    color: #fff;
    border-radius: 0.5rem;
    font-size: 1.05rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.3s;

    @media (max-width: 850px) {
      margin: auto;
    }
  }
`;
