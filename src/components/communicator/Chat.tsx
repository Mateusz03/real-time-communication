import React from "react";
import { styled } from "styled-components";

interface ChatSettings {}

const Container = styled.div`
  width: 100%;
  height: 90%;
`;

const Chat: React.FC<ChatSettings> = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default Chat;
