import React from "react";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import { Form } from "./Contact/Form";
import { About } from "./About/About";
import Header from "./Header/Header";
import { SocialIcons } from "./SocialMedia/SocialIcon";
import { Navbar } from "./Navbar/Navbar";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <SocialIcons />
        <Header />
        <Gallery />
        <About />
        <Form />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
