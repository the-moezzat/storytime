import styled from "styled-components";

const Raw = styled.div<{ variant?: "vertical" | "horizontal"; gap?: string }>`
  display: flex;
  flex-direction: ${(props) =>
    props.variant === "vertical" ? "column" : "row"};
  gap: ${(props) => props.gap || "0"};
`;

export default Raw;
