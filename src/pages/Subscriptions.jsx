import styled from "styled-components";
import plus from "../assets/plan_white.svg";
import gold from "../assets/plan_yellow.svg";
import platinum from "../assets/plan_green.svg";

export default function Subscriptions() {
  return (
    <SubscriptionsContainer>
      <h1>Escolha seu Plano</h1>
      <Cards>
        <Card>
          <img src={plus} alt="" />
          <p>R$ 39,99</p>
        </Card>
        <Card>
          <img src={gold} alt="" />
          <p>R$ 69,99</p>
        </Card>
        <Card>
          <img src={platinum} alt="" />
          <p>R$ 99,99</p>
        </Card>
      </Cards>
    </SubscriptionsContainer>
  );
}

const SubscriptionsContainer = styled.div`
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 24px;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 42px 16px;
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
`;
