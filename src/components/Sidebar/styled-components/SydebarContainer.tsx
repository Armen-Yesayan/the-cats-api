import styled from "styled-components";

const SidebarContainer = styled("div")<{ displaySidebar: number }>(({ displaySidebar }) => ({
  position: "fixed",
  left: 0,
  width: displaySidebar ? "15rem" : "0",
  height: "100vh",
  padding: displaySidebar ? "0.75rem" : "0",
  background: "#f3f4f4",
  transition: "width 350ms ease",
  borderRight: "1px solid #d4d8dd",
  overflowX: "hidden",
  ...(displaySidebar && { boxShadow: "8px 0px 12px 0px rgba(0,0,0,0.1)" }),

  ItemWrapper: {
    justifyContent: !displaySidebar ? "center" : "flex-start"
  },

  "::-webkit-scrollbar": {
    width: "4px",
    height: "3px"
  },
  "::-webkit-scrollbar-track": {
    borderRadius: "10px",
    backgroundColor: "transparent"
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    background: "#eaeced",
    "&:hover": {
      background: "#d5e0f3"
    }
  },

  "@media (max-width: 468px)": {
    width: "5rem"
  }
}));

export default SidebarContainer;
