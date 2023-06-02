import React, { FC } from "react";

import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import { getCatsEffect } from "../../store/effects/cat.effects";
import { ICats } from "../../store/types/cat.types";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
import CatsSection from "./styled-component/CatsSection";
import CatsSectionInner from "./styled-component/CatsSectionInner";
import CatsWrapper from "./styled-component/CatsWrapper";
import LoadMore from "./styled-component/LoadMore";

interface CatsModuleProps {
  cats: Array<ICats>;
  loadingCats: boolean;
}

const LIMIT = 10;

const CatsModule: FC<CatsModuleProps> = ({ cats, loadingCats }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { activePage, activeCategory } = useAppSelector(state => state.catReducer);

  const handleLoadMore = () => {
    dispatch(getCatsEffect(activePage, LIMIT + 10, activeCategory, true));
  };

  return (
    <CatsWrapper>
      <CatsSection>
        <CatsSectionInner>
          {cats.map(({ id, url }, index: number) => (
            <Cards key={id + index} image={url} />
          ))}
        </CatsSectionInner>
      </CatsSection>
      {loadingCats && <Loading />}
      <LoadMore onClick={handleLoadMore}>LoadMore</LoadMore>
    </CatsWrapper>
  );
};

export default CatsModule;
