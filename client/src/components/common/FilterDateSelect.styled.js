import styled from 'styled-components';

export const FilterDateSelectStyled = styled.select`
  color: #023e5a;
  border: none;
  height: 1.5rem;
  font-size: 1rem;

  &:focus {
    outline-width: 0;
  }
`;

export const FilterDateOptionStyled = styled.option`
  display: flex;
  align-items: center;
  padding-left: .2rem;
`;
