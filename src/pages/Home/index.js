import { Container, Image, InputLabel, Input, Button } from "./style";

import Peoples from "../../assets/img/peoples.svg";
import Arrow from "../../assets/img/arrow.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/Container";

import { useState, useRef } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const name = useRef();
  const age = useRef();

  // Enviando dados ao back-end
  const getUser = async () => {
    const { data: newUser } = await axios.post("http://localhost:3333/users", {
      name: name.current.value,
      age: age.current.value,
    });

    setUsers([...users, newUser]);
    navigate("/users");
  };

  return (
    <Container>
      <Image src={Peoples} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={name} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={age} placeholder="Age" />

        <Button onClick={getUser}>
          Cadastrar <img src={Arrow} alt="Arrow" />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
