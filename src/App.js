import React from "react";
import {
  Container,
} from "./styles";

import Header from './components/Header'
import Timer from './components/Timer'
import Footer from './components/Footer'

const App = () => {

  return (
    <Container>
      <Header />
      <Timer />
      <Footer />
    </Container>
  )
}

export default App;
