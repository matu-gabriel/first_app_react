import { ContainerItens } from "./style";

function Container({ children, ...props }) {
  return <ContainerItens {...props}>{children}</ContainerItens>;
}

export default Container;
