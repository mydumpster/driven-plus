import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import drivenPlus from "../api/drivenPlus";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Update() {
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    newPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    drivenPlus.alterarUsuario({}, user.token);
  }

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  }

  return (
    <UpdateContainer>
      <img src={arrow} alt="" />
      <Form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={handleForm}
          placeholder="Fulano"
        />
        <input
          name="cpf"
          type="text"
          onChange={handleForm}
          placeholder="111.111.111-11"
          disabled
        />
        <input
          name="email"
          type="text"
          onChange={handleForm}
          placeholder="fulano@email.com"
        />
        <input
          name="password"
          type="text"
          onChange={handleForm}
          placeholder="Senha atual"
        />
        <input
          name="newPassword"
          type="text"
          onChange={handleForm}
          placeholder="Nova senha"
        />
        <button>SALVAR</button>
      </Form>
    </UpdateContainer>
  );
}

const UpdateContainer = styled.div`
  max-width: 375px;
  width: 79%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 138px;
  img {
    position: absolute;
    top: 22px;
    left: 22px;
  }
`;

const Form = styled.form`
  width: 100%;
  input {
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    padding-left: 14px;
    ::placeholder {
      font-size: 14px;
      line-height: 16px;
      color: #7e7e7e;
    }
  }

  input {
    width: 100%;
    margin-bottom: 16px;
  }

  button {
    width: 100%;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;
