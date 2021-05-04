import React from 'react';
import {
  FilterDateSelectStyled,
  FilterDateOptionStyled,
} from './FilterDateSelect.styled';

const FilterDateSelect = ({ id, name, options, selectedOption, onSelect }) => {
  return (
    <FilterDateSelectStyled name={name} id={id} value={selectedOption} onChange={e => onSelect(e.target.value)}>
      <FilterDateOptionStyled value='default' disabled>Select month</FilterDateOptionStyled>
      {options.map((option, i) => <FilterDateOptionStyled key={i} value={option.value}>{option.label}</FilterDateOptionStyled>)}
    </FilterDateSelectStyled>
  );
};

export default FilterDateSelect;
