import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import SendImg from "../image/send.png";

interface ButtonSettings {
  type: string;
}

interface ContainerProps {
  click: boolean;
  type: string;
}

const Container = styled.div<ContainerProps>`
  transition: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 48px;
  border-radius: 5px;
  font-size: 1.15rem;
  font-weight: 500;
  user-select: none;
  cursor: pointer;

  background-color: ${(p) =>
    p.click === true && p.type === "URL"
      ? "#5CB25D"
      : p.click === true && p.type === "Ready"
      ? "rgba(241, 246, 249, 0.2)"
      : "rgba(241, 246, 249, 0.7)"};

  box-shadow: 1px 1px 10px 0px
    ${(p) =>
      p.click === true && p.type === "URL"
        ? "rgba(241, 246, 249,0.8)"
        : p.click === true && p.type === "Ready"
        ? "rgba(33, 42, 62,0.2)"
        : "#212a3e"};

  color: ${(p) =>
    p.click === true && p.type === "URL"
      ? "rgba(241, 246, 249,0.8)"
      : p.click === true && p.type === "Ready"
      ? "rgba(33, 42, 62,0.3)"
      : "#212a3e"};

  &:hover {
    transform: ${(p) =>
      p.click === true && p.type === "URL"
        ? ""
        : p.click === true && p.type === "Ready"
        ? ""
        : "scale(1.1)"};
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9ba4b5;
  height: 32px;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 1.15rem;
  height: 1.15rem;
`;

const Button: React.FC<ButtonSettings> = ({ type }) => {
  const [click, setClick] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (click === true) {
      console.log({ click: true });
    }
  }, [click]);

  const HandleClick = (e: { target: any & { innerText: string } }) => {
    setClick(true);
    if (type === "URL") {
      e.target.innerText = "Copied";
      console.log("copy"); //Here is URL cpy
    } else if (type === "Ready" && click === false) {
      navigate("/communicator");
      console.log("ready"); //Here is declaration to be ready to starting message
    }
  };

  return (
    <>
      {type === "Send" ? (
        <ImgContainer>
          <Img src={SendImg} />
        </ImgContainer>
      ) : (
        <Container click={click} type={type} onClick={HandleClick}>
          {type === "URL"
            ? "Copy URL"
            : type === "Ready"
            ? "Ready"
            : type === "Exit"
            ? "Quit room"
            : ""}
        </Container>
      )}
    </>
  );
};

export default Button;
