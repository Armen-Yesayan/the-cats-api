import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { ICategories } from "../../../store/types/cat.types";
import ItemContainer from "../styled-components/ItemContainer";
import ItemName from "../styled-components/ItemName";
import ItemsList from "../styled-components/ItemsList";
import ItemWrapper from "../styled-components/ItemWrapper";

interface SidebarItemsProps {
  categories: Array<ICategories>;
  displaySidebar: boolean;
  activeCategory: number;
}

const SidebarItems: FC<SidebarItemsProps> = ({ categories, displaySidebar, activeCategory }) => {
  return (
    <ItemsList>
      {categories.map((itemData, index) => (
        <NavLink to={`${itemData.id}`} key={index}>
          <ItemContainer className={itemData.id === activeCategory ? "active" : ""}>
            <ItemWrapper>
              <ItemName displaySidebar={displaySidebar ? 1 : 0}>{itemData.name}</ItemName>
            </ItemWrapper>
          </ItemContainer>
        </NavLink>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;
