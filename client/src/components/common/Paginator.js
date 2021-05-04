import React from 'react';
import ReactPaginate from 'react-paginate';
import {
  PaginatorStyled,
} from './Paginator.styled';

const Paginator = ({ limit, count, selectedPage, onPageSelect }) => {
  const pagesCount = Math.ceil(count / limit);
  const handlePageSelect = ({ selected }) => {
    onPageSelect(selected + 1);
  }

  return (
    <PaginatorStyled>
      <ReactPaginate
        breakLabel={'...'}
        pageCount={pagesCount}
        initialPage={selectedPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageSelect}
        containerClassName={'grid-paginator'}
        activeClassName={'grid-paginator__active'}
      />
    </PaginatorStyled>
  );
};

export default Paginator;
