import React from "react";
import styled from "styled-components";

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px clamp(24px, 5%, 96px);
  box-sizing: border-box;
  background: linear-gradient(to bottom, #20202090, #20202020);
  backdrop-filter: blur(8px);
`;

const Logo = styled.img`
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  max-height: 64px;
`;

const List = styled.nav`
  display: flex;
  gap: 20px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline 1px white;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 32px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: #ffa500;
  }
`;

const Navbar = () => {
  return (
    <div style={{ zIndex: "1000" }}>
      <Container>
        <Logo src="./img/logo_textmark.svg" />
        <List>
          <ListItem>
            <a href={"#home"}>Home</a>
          </ListItem>
          <ListItem>
            <a href={"#about"}>About</a>
          </ListItem>
          <ListItem>
            <a href={"#participate"}>Participate</a>
          </ListItem>
          <ListItem>
            <a href={"#works"}>Works</a>
          </ListItem>
          <ListItem>
            <a href={"#timeline"}>Timeline</a>
          </ListItem>
          <ListItem>
            <a href={"#contact"}>Contact</a>
          </ListItem>
        </List>
        <Icons>
          <Button>Connect Wallet</Button>
        </Icons>
      </Container>
    </div>
  );
};

export default Navbar;