import React from "react";
import { HeaderSection, HeaderContainer } from "../LayoutStyled";
import { HeaderStyled, Title } from "./Header.styled";

// import logo from "../../jpg/photo_2021-12-08_22-34-32.jpg";

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderSection id="home">
        <HeaderContainer>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Title>Illustrator Tania Proskurnia.</Title>
        </HeaderContainer>
      </HeaderSection>
    </HeaderStyled>
  );
}
