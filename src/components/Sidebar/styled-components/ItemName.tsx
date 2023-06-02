import styled from "styled-components";

const ItemName = styled("span")<{ displaySidebar: number }>(({ displaySidebar }) => ({
  marginLeft: displaySidebar ? "0.5rem" : "0",
  display: displaySidebar ? "block" : "none",
  textTransform: "capitalize",
  "@media (max-width: 468px)": {
    display: "block",
    textSize: "14px"
  }
}));

export default ItemName;
