import styled from "styled-components";

export const StyledButton = styled.button<{ bc: string }>`
  background-color: #5196F8;
  border:none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  margin-right: 1em;
  padding: 0.75em 1.5em;
  border-radius: 3px;
`;
