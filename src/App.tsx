import React, { useEffect, useState, useCallback } from "react";
import GlobalStyle from "./globalStyle";
import MainContainer from "./components/main container/MainContainer";
import { styled } from "styled-components";
import Uuid_interface from "./interfaces/uuid.interface";

interface AppSettings {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC<AppSettings> = () => {
  const [uuID, setUuID] = useState<string | undefined>(undefined);

  useEffect(() => {
    // if (uuID === undefined) {
    (async () => {
      const data = await Uuid_interface();
      setUuID(data.uuIDv4);
    })();
    // } else return;
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <MainContainer uuID={uuID} />
    </Container>
  );
};

export default App;
