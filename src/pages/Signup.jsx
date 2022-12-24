import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import drivenPlus from "../api/drivenPlus";
import styled from "styled-components";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
  });

  function login(event) {
    event.preventDefault();
    drivenPlus
      .fazerCadastro(form)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        window.alert(error.response.data.message);
      });
  }

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <SignupContainer>
      <form onSubmit={login}>
        <input
          name="name"
          onChange={handleForm}
          placeholder="Nome"
          type="text"
          value={form.name}
          required
        />
        <input
          name="cpf"
          onChange={handleForm}
          placeholder="CPF"
          type="text"
          value={form.cpf}
          required
        />
        <input
          name="email"
          onChange={handleForm}
          placeholder="E-mail"
          type="email"
          value={form.email}
          required
        />
        <input
          name="password"
          onChange={handleForm}
          placeholder="Senha"
          type="password"
          value={form.password}
          required
        />
        <button type="submit">CADASTRAR</button>
      </form>
      <Link to={"/"}>
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 80%;
    input {
      width: 100%;
      height: 52px;
      background: #ffffff;
      border-radius: 8px;
      padding-left: 14px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000;
      border: none;
      ::placeholder {
        color: #7e7e7e;
      }
      :focus {
        outline: 2px solid #ff47917f;
      }
    }
    button {
      height: 52px;
      margin-top: 8px;
      margin-bottom: 24px;
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
    }

    button:active {
      background-color: #fb2d7f;
      font-size: 16px;
      font-weight: 700;
    }
  }

  a {
    color: #fff;
    text-decoration-line: underline;
  }

  @media (min-width: 500px) {
    width: 50%;
  }
`;
