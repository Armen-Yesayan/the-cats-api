import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 468px) {
    display: none;
  }
`;

export default SidebarLogo;
