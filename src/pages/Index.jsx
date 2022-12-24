import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Subscriptions from "./Subscriptions";
import Home from "./Home";
import Plan from "./Plan";
import Update from "./Update";
import User from "./User";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function Index() {
  const [user, setUser] = useState(undefined);
  return (
    <>
      <GlobalStyle />
      <IndexContainer>
        <UserContext.Provider value={{user, setUser}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/subscriptions/plan" element={<Plan />} />
              <Route path="/home" element={<Home />} />
              <Route path="/update" element={<Update />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </IndexContainer>
    </>
  );
}

const IndexContainer = styled.div`
  align-items: center;
  background-color: #0e0e13;
  color: #fff;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  height: 100vh;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
`;