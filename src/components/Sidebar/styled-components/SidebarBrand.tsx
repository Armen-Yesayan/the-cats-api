import styled from "styled-components";

const SidebarBrand = styled("span")<{ displaySidebar: number }>`
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export default SidebarBrand;
