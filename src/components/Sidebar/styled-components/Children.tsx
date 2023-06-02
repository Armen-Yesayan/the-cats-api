import styled from "styled-components";

export const Children = styled("div")<{ displaySidebar: number }>(({ displaySidebar }) => ({
  width: displaySidebar ? "calc(100% - 15rem)" : "100%",
  height: "100%",
  marginLeft: displaySidebar ? "15rem" : "0",
  transition: "margin 300ms",
  "@media (max-width: 468px)": {
    marginLeft: "5rem"
  }
}));
