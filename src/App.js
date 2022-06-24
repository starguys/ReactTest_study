import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterBox = styled.div``;

const MathBox = styled.div``;

const MinuseBox = styled.div``;

const PlusBox = styled.div``;

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <Container>
      <CounterBox>
        <h3 data-testid="counter">{counter}</h3>
      </CounterBox>
      <MathBox></MathBox>
    </Container>
  );
}

export default App;
