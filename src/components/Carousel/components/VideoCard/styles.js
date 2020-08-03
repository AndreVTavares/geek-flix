import styled from "styled-components";

export const VideoCardSpan = styled.span`
  width: 100%;
  height: 60px;
  color: #ffffff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transform: translateY(60px);
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  transition: transform 200ms linear 0s;
`;

export const VideoCardContainer = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover,
  &:focus {
    ${VideoCardSpan} {
      transform: translateY(0px);
      opacity: 0.85;
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
