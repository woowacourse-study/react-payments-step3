import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 16px 0;
`;

export const FlexWrapper = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "unset"};
  align-items: ${(props) => props.alignItems || "unset"};
  gap: ${(props) => props.gap || "unset"};
`;