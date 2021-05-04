import React from 'react';
import { FilterLabelStyled } from './FilterLabel.styled';

const FilterLabel = ({ caption, htmlFor }) => {
  return (<FilterLabelStyled htmlFor={htmlFor}>{caption}</FilterLabelStyled>);
};

export default FilterLabel;
