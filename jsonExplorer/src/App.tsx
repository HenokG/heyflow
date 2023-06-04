import React from "react";
import "./App.css";
import JSONExplorer from "./components/JSONExplorer";
import { mockData } from "./__tests__/mockData";
import { styled } from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

function App() {
  return (
    <StyledFlex>
      <JSONExplorer value={mockData} />
    </StyledFlex>
  );
}

export default App;
