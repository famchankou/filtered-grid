import React from 'react';
import FilterLabel from './FilterLabel';
import { FilterContainerStyled } from './FilterContainer.styled';

const FilterContainer = ({ caption, children }) => {
  return (
    <FilterContainerStyled>
      <FilterLabel caption={caption}/>
      {children}
    </FilterContainerStyled>
  );
};

export default FilterContainer;
