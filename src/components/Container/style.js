import styled from "styled-components";

export const ContainerItens = styled.div`
  background-color: rgba(172, 115, 221, 0.7);
  height: 100%;
  border-radius: 61px 61px 0 0;
  padding: 3rem 3.6rem;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isBlur &&
    `
    backdrop-filter: blur(40px);
    min-height: calc(100vh - 10rem);
  `}
`;
