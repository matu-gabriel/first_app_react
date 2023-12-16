import styled from "styled-components";
import Background from "../assets/img/bg_image2.svg";

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

export const ContainerItens = styled.div`
  background-color: rgba(172, 115, 221, 0.7);
  height: 100%;
  border-radius: 61px 61px 0 0;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #fff;
`;

export const InputLabel = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #eee;
  margin-left: 25px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 14px;
  width: 342px;
  height: 58px;
  padding-left: 25px;
  outline: none;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 50px;
  background: rgba(255, 255, 255, 0.25);
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: none;
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
  margin: 30px 0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ListUser = styled.li`
  border: none;
  border-radius: 14px;
  width: 342px;
  height: 50px;
  padding-left: 25px;
  outline: none;
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.25);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    cursor: pointer;
  }
`;
