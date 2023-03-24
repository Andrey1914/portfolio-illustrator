import React from "react";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
// import Header from "./Header/Header";
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
        {/* <Header /> */}
        <Gallery />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
