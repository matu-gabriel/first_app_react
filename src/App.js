import {
  Container,
  Image,
  ContainerItens,
  Title,
  InputLabel,
  Input,
  Button,
  ListUser,
} from "./styles/style";

import Peoples from "./assets/img/peoples.svg";
import Arrow from "./assets/img/arrow.svg";
import Trash from "./assets/img/trash.svg";

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const getUser = () => {
    setUsers([...users, { id: Math.random(), name, age }]);
    console.log(users);
  };

  return (
    <Container>
      <Image src={Peoples} />
      <ContainerItens>
        <Title>Olá</Title>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />

        <InputLabel>Age</InputLabel>
        <Input placeholder="Age" onChange={(e) => setAge(e.target.value)} />

        <Button onClick={getUser}>
          Cadastrar <img src={Arrow} alt="Arrow" />
        </Button>

        <ul>
          {users.map((user) => (
            <ListUser key={user.id}>
              {user.name} {user.age} <img src={Trash} alt="Trash" />
            </ListUser>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
