import styled from "styled-components";
import plus from "../assets/plan_white.svg";
import user from "../assets/user.svg";

export default function Home() {
  return (
    <HomeContainer>
      <TopContainer>
        <img src={plus} alt="img" />
        <img src={user} alt="user" />
      </TopContainer>
      <h1>Olá, fulano</h1>
      <ButtonsContainer>
        <TopButtons>
          <button>Solicitar brindes</button>
          <button>Materiais bônus de web</button>
        </TopButtons>
        <BotButtons>
          <button>Mudar Plano</button>
          <button>Cancelar Plano</button>
        </BotButtons>
      </ButtonsContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 79.73%;
  height: 100%;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 53px;
  }
`;

const TopContainer = styled.div`
  position: relative;
  padding-top: 32px;
  img:first-child {
    width: 75px;
  }
  img:last-child {
    position: absolute;
    right: 0;
    top: 22px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 71.81%;
  justify-content: space-between;
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
    width: 100%;
  }

  button:active {
    background-color: #fb2d7f;
    font-size: 16px;
    font-weight: 700;
  }
`;

const TopButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BotButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button:last-child {
    background-color:#FF4747
  }
  button:last-child:active {
    background-color: #f82b2b;
    font-size: 16px;
    font-weight: 700;
  }
`;
