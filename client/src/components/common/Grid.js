import React from 'react';
import {
  GridContainerStyled,
  GridHeaderRowStyled,
  GridHeaderStyled,
  GridBodyStyled,
  GridRowStyled,
  GridCellStyled,
  GridLinkStyled,
} from './Grid.styled';

const Grid = ({ items }) => {
  return (
    <GridContainerStyled>
      <GridHeaderStyled>
        <GridHeaderRowStyled>
          <GridCellStyled>#</GridCellStyled>
          <GridCellStyled>Category</GridCellStyled>
          <GridCellStyled>Name</GridCellStyled>
          <GridCellStyled>Start Date</GridCellStyled>
        </GridHeaderRowStyled>
      </GridHeaderStyled>
      <GridBodyStyled>
      {!items.length && <span><strong>No Items found</strong></span>}
      {items.map(item => {
        return (<GridRowStyled key={item.id}>
          <GridCellStyled>{item.num}</GridCellStyled>
          <GridCellStyled>{item.category}</GridCellStyled>
          <GridCellStyled>
            <GridLinkStyled to={`/workout/${item.id}`}>
              {item.name}
            </GridLinkStyled>
          </GridCellStyled>
          <GridCellStyled>{new Date(item.startDate).toDateString()}</GridCellStyled>
        </GridRowStyled>);
      })}
      </GridBodyStyled>
    </GridContainerStyled>
  );
};

export default Grid;
