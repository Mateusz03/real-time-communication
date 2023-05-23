import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Lobby from "../lobby/Lobby";
import Communicator from "../communicator/Communicator";

interface MainContainerSettings {
  uuID: string | undefined;
}

interface ContainerProps {
  location: string;
}

const Container = styled.div<ContainerProps>`
  width: 60%;
  height: 80%;
  background-color: #9ba4b5;
  border-radius: 20px;
  box-shadow: 5px 5px 20px 1px #212a3e;
  padding: ${(p) => (p.location === "/communicator" ? "" : "64px 64px")};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const MainContainer: React.FC<MainContainerSettings> = ({ uuID }) => {
  const location = useLocation();
  console.log(uuID);
  return (
    <>
      <Container location={location.pathname}>
        <Routes>
          {uuID !== undefined ? (
            <>
              <Route />
              <Route path="/" element={<Navigate to={`/${uuID}`} />} />
              <Route path={`/${uuID}`} element={<Lobby />} />
            </>
          ) : (
            ""
          )}

          <Route path="/communicator" element={<Communicator />} />
        </Routes>
      </Container>
    </>
  );
};

export default MainContainer;
