import styled from "styled-components";
import arrow from "../assets/arrow.svg";

export default function Update() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <UpdateContainer>
      <img src={arrow} alt="" />
      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="Fulano" />
        <input type="text" placeholder="111.111.111-11" />
        <input type="text" placeholder="fulano@email.com" />
        <input type="text" placeholder="Senha atual" />
        <input type="text" placeholder="Nova senha" />
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
