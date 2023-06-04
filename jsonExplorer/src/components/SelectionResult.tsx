import React, { Component, FunctionComponent } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: royalblue;
`;

const SelectionResult: FunctionComponent<{
  selectedKey: string;
  selectedValue: string;
}> = ({ selectedKey, selectedValue }) => (
  <div>
    <span>selected: </span>
    <StyledSpan>{selectedKey}</StyledSpan> with value of{" "}
    <StyledSpan>{String(selectedValue)}</StyledSpan>
  </div>
);

export default SelectionResult;
