import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";

const Paper = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 32px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  transition: background-color 150ms ease-in-out;
  position: relative;

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 12px;
  }

  &:hover {
    background-color: #00cf77; /* Yeşil renk üzerine gelindiğinde */
  }
`;

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px clamp(24px, 5%, 96px);
  box-sizing: border-box;
  background: linear-gradient(to bottom, #20202090, #20202020);
  backdrop-filter: blur(8px);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 6px clamp(12px, 5%, 96px);
  }
`;

const Logo = styled.img`
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  max-height: 70px !important;

  @media (max-width: 768px) {
    max-height: 44px !important;
  }
`;

const List = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const ListItem = styled.a`
  display: block;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline 1px white;
  }
`;

const ListItem2 = styled.a`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline 1px white;
  }

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none !important;
  }
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

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const currentAccount = await signer.getAddress();
        setAccount(currentAccount);

        const balance = await provider.getBalance(currentAccount);
        setBalance(ethers.utils.formatEther(balance));
      } else {
        console.log("MetaMask not detected.");
      }
    } catch (error) {
      console.error("MetaMask connection error:", error);
    }
  };

  return (
    <div style={{ zIndex: "1000" }}>
      <Container>
        <a className="flex w-fit h-full " href="/" >
          <img className="h-16 md:h-20 " src="./img/logo.svg" />
        </a>

        <List className="gap-6 md:gap-12 flex justify-end md:justify-between w-2/3">
          <ListItem>
            <a href="https://qr.page/g/9kkbyDsTMe" target="_blank">
              <Paper>Litepaper</Paper>
            </a>
          </ListItem>

          <ListItem>
            <a href="https://qr.page/g/1SKuSTAhsDB" target="_blank">
              <Paper>Onepager</Paper>
            </a>
          </ListItem>

          <ListItem2>
            <a href={"#home"}>Home</a>
          </ListItem2>
          <ListItem2>
            <a href={"#team"}>Team</a>
          </ListItem2>
          <ListItem2>
            <a href={"#participate"}>Participate</a>
          </ListItem2>
          <ListItem2>
            <a href={"#works"}>Works</a>
          </ListItem2>
          <ListItem2>
            <a href={"#roadmap"}>Roadmap</a>
          </ListItem2>
          <ListItem2>
            <a href={"#contact"}>Contact</a>
          </ListItem2>
        </List>
        <Icons>
          <Button style={{ opacity: 0, cursor: "default" }}>
            Connect Wallet
          </Button>
        </Icons>
      </Container>
    </div>
  );
};

export default Navbar;
