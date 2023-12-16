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

import { useState, useRef } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const name = useRef();
  const age = useRef();

  const getUser = () => {
    setUsers([
      ...users,
      { id: Math.random(), name: name.current.value, age: age.current.value },
    ]);
    console.log(users);
  };

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <Container>
      <Image src={Peoples} />
      <ContainerItens>
        <Title>Olá</Title>

        <InputLabel>Name</InputLabel>
        <Input ref={name} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={age} placeholder="Age" />

        <Button onClick={getUser}>
          Cadastrar <img src={Arrow} alt="Arrow" />
        </Button>

        <ul>
          {users.map((user) => (
            <ListUser key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Trash" />
              </button>
            </ListUser>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
