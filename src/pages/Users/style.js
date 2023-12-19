import styled from "styled-components";
import Background from "../../assets/img/bg_image1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  /* justify-content: center; */
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
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
  margin-top: 20px;

  img {
    transform: rotateY(180deg);
  }
`;

export const ListUser = styled.li`
  border: none;
  border-radius: 14px;
  width: 342px;
  height: 50px;
  padding: 0 25px;
  outline: none;
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.25);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
