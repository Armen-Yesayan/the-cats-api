import styled from "styled-components";

const ItemContainer = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background: #eaeced;
  }
  &.active {
    background-color: #dbe4f3;
  }
`;

export default ItemContainer;
