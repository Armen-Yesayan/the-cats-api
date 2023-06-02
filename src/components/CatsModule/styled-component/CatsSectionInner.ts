import styled from "styled-components";

const CatsSectionInner = styled("div")`
  padding: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 25px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export default CatsSectionInner;
