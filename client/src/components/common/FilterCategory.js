import React from 'react';
import {
  FilterCategoryStyled,
  FilterOptionStyled,
} from './FilterCategory.styled';

const FilterCategory = ({ id, options, selectedOptions, onSelect }) => {
  const handleChange = event => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    onSelect(selected);
  }

  return (
    <FilterCategoryStyled id={id} multiple={true} value={selectedOptions} onChange={handleChange}>
      {options.map((option, i) => <FilterOptionStyled key={i} value={i}>{`Category ${option.toUpperCase()}`}</FilterOptionStyled>)}
    </FilterCategoryStyled>
  );
};

export default FilterCategory;
