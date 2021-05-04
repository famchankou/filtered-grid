import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridLinkStyled = styled(Link)`
  color: #00529a;
`;

export const GridContainerStyled = styled.table`
  border: 1px solid #e8e8e8;
  color: #023e5a;
`;

export const GridHeaderRowStyled = styled.tr`
  height: 3rem;
  background-color: #f5f5f5;
`;

export const GridHeaderStyled = styled.thead`

`;

export const GridBodyStyled  =styled.tbody`

`;

export const GridRowStyled = styled.tr`
  height: 2.3rem;

  &:hover {
    background-color: #f2f4f9;
  }
`;

export const GridCellStyled = styled.th`

`;
