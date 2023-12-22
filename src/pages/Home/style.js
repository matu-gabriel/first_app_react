import styled from "styled-components";
import Background from "../../assets/img/bg_image2.svg";

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
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.25);
`;
