import { Container, Image, Button, ListUser } from "./style";

import Avatars from "../../assets/img/avatars.svg";
import Arrow from "../../assets/img/arrow.svg";
import Trash from "../../assets/img/trash.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/Container";

import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Recebendo dados do back-end
  useEffect(() => {
    const fetchUsers = async () => {
      const { data: getUsers } = await axios.get("http://localhost:3333/users");

      setUsers(getUsers);
    };

    fetchUsers();
  }, []);

  // Deletando no front e no back-end
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3333/users/${id}`);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Image src={Avatars} />
      <ContainerItens>
        <H1>Usuários</H1>

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
        <Button onClick={goToHome}>
          <img src={Arrow} alt="Arrow" /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default User;
