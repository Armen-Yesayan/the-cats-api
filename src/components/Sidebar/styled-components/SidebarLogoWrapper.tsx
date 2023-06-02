import styled from "styled-components";

const SidebarLogoWrapper = styled("div")<{ displaySidebar: number }>(({ displaySidebar }) => ({
  padding: "0.5rem 1rem",
  marginBottom: "1rem",
  display: "flex",
  justifyContent: displaySidebar ? "space-between" : "center",
  alignItems: "center",
  "@media (max-width: 468px)": {
    justifyContent: "center"
  }
}));

export default SidebarLogoWrapper;
