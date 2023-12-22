import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.btnBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border: ${(props) => (props.btnBack ? "1px solid #ffff" : "none")};
  width: 342px;
  height: 74px;
  border-radius: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  img {
    ${(props) =>
      props.btnBack &&
      `
    transform: rotateY(180deg)
  `}
  }
`;
