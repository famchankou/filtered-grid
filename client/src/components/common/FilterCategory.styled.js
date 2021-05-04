import styled from 'styled-components';

export const FilterCategoryStyled = styled.select`
  color: #023e5a;
  border: none;
  min-height: 8rem;

  &:focus {
    outline-width: 0;
  }
`;

export const FilterOptionStyled = styled.option`
  height: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: .2rem;
  font-size: 1rem;
`;
