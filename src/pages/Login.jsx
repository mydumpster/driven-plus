import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import drivenPlus from "../api/drivenPlus";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    drivenPlus.fazerLogin({ email, password })
    .then((response) => {console.log(response.data)})
    .catch((error) => {window.alert(error.response.data.message)});
  }

  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <form onSubmit={login}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          type="email"
          value={email}
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          value={password}
          required
        />
        <button type="submit">ENTRAR</button>
      </form>
      <StyledLink to="/sign-up">
        <p>Não possuí uma conta? Cadastre-se</p>
      </StyledLink>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 79.73%;
  img {
    margin-bottom: 100px;
    width: 100%;
  }
  form {
    width: 100%;
    input {
      border-radius: 8px;
      border: none;
      color: #000;
      font-family: "Roboto";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      height: 52px;
      line-height: 16px;
      padding-left: 14px;
      width: 100%;
      &::placeholder {
        color: #7e7e7e;
      }
      &:focus {
        outline: 2px solid #ff47917f;
      }
    }

    input[type="email"] {
      margin-bottom: 16px;
    }
    button {
      background-color: #ff4791;
      border-radius: 8px;
      border: none;
      color: #fff;
      font-family: "Roboto";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      height: 52px;
      line-height: 16px;
      margin: 24px 0;
      width: 100%;
    }
    button:active {
      background-color: #fb2d7f;
      font-size: 16px;
      font-weight: 700;
    }
  }
  @media (min-width: 500px) {
    width: 50%;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration-line: underline;
`;
