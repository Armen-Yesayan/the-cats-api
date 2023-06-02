import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { useAppSelector } from "../common/hooks/useAppSelector";
import CatsModule from "../components/CatsModule/CatsModule";
import { getCatsEffect } from "../store/effects/cat.effects";

const CatsPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { cats, activePage, loadingCats } = useAppSelector(state => state.catReducer);

  useEffect(() => {
    dispatch(getCatsEffect(activePage, 10, id ? +id : undefined));
  }, [id]);

  return <CatsModule cats={cats} loadingCats={loadingCats} />;
};

export default CatsPage;
