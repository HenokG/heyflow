import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { JSONObjectProp, theme } from "./shared";
import ReactJson, { OnSelectProps } from "@henok_g_d/react-json-view";
import { readableNamespace } from "./helpers";
import SelectionResult from "./SelectionResult";

const StyledDiv = styled.div`
  border: 1px solid darkcyan;
  height: fit-content;
  align-self: center;
  padding: 25px;
  width: 80%;
`;

const JsonExplorer: FunctionComponent<JSONObjectProp> = ({ value }) => {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<any>("");

  const onSelect = ({ namespace, name, value }: OnSelectProps) => {
    setSelectedKey(`${readableNamespace(namespace)}.${name}`);
    setSelectedValue(value);
  };

  return (
    <StyledDiv>
      <ReactJson
        src={value}
        name={false}
        quotesOnKeys={false}
        enableClipboard={false}
        iconStyle={"circle"}
        displayDataTypes={false}
        displayObjectSize={false}
        onSelect={onSelect}
        theme={theme}
      />

      {selectedKey && (
        <SelectionResult
          selectedKey={selectedKey}
          selectedValue={selectedValue}
        />
      )}
    </StyledDiv>
  );
};

export default JsonExplorer;
