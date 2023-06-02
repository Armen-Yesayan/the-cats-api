import React, { FC, ReactNode, useEffect, useState } from "react";

import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import { getCategoriesEffect } from "../../store/effects/cat.effects";
import SidebarItems from "./components/SidebarItems";
import { Children } from "./styled-components/Children";
import SidebarBrand from "./styled-components/SidebarBrand";
import SidebarLogo from "./styled-components/SidebarLogo";
import SidebarLogoWrapper from "./styled-components/SidebarLogoWrapper";
import SidebarToggler from "./styled-components/SidebarToggler";
import SidebarWrapper from "./styled-components/SidebaWrapper";
import SidebarContainer from "./styled-components/SydebarContainer";

interface SidebarProps {
  children: ReactNode;
}

const MOBILE_VIEW = window.innerWidth < 468;

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const { categories, activeCategory } = useAppSelector(state => state.catReducer);

  useEffect(() => {
    dispatch(getCategoriesEffect());
  }, []);

  const [displaySidebar, setDisplaySidebar] = useState<boolean>(!MOBILE_VIEW);

  const handleSidebarDisplay = (e: any) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <div>
      <SidebarContainer displaySidebar={displaySidebar ? 1 : 0}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar ? 1 : 0}>
            <SidebarLogo to='/'>
              <SidebarBrand displaySidebar={displaySidebar ? 1 : 0} className='app__brand__text'>
                Cats Api
              </SidebarBrand>
            </SidebarLogo>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} categories={categories} activeCategory={activeCategory} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar ? 1 : 0}>
        <SidebarToggler onClick={handleSidebarDisplay}>
          <div className='outer__circle'>
            <div className='inner__circle' />
          </div>
        </SidebarToggler>
        {children}
      </Children>
    </div>
  );
};

export default Sidebar;
