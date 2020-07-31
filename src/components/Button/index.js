import styled from "styled-components";
// import { Link } from 'react-router-dom';

const Button = styled.button`
  color: var(--white);
  background: black;
  border: 2px solid #9ad5ff;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.85;
    background: #9ad5ff;
  }
`;

export default Button;
