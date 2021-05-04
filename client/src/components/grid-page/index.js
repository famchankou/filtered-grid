import React, { useState, useEffect } from 'react';
import { CATEGORY_OPTIONS, START_DATE_OPTIONS } from '../../constants';
import { getStartDate, getCategoriesString } from '../../services';
import {
  GridPageStyled,
  FiltersContainerStyled,
  GridContainerStyled,
} from './GridPage.styled';
import {
  FilterDateSelect,
  FilterCategory,
  FilterContainer,
  Paginator,
  Grid,
} from '../common';

const GridPage = ({ workouts, fetchItems, filters, setCategoriesFilter, setDateFilter }) => {
  const { categories, date } = filters;
  const { items, count, isLoading } = workouts;
  const categoryOptions = CATEGORY_OPTIONS;
  const startDateOptions = START_DATE_OPTIONS;

  const [limit] = useState(20);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchItems({
      page,
      limit,
      categories: getCategoriesString(categories, categoryOptions),
      startDate: getStartDate(parseInt(date)),
    });
  }, [fetchItems, date, categories, categoryOptions, page, limit])

  useEffect(() => {
    setPage(1);
  }, [date, categories])

  return (
    <GridPageStyled>
      <FiltersContainerStyled>
        <FilterContainer caption={'Category'} htmlFor={'filter-category'}>
          <FilterCategory
            id={'filter-category'}
            options={categoryOptions}
            selectedOptions={categories}
            onSelect={setCategoriesFilter}
          />
        </FilterContainer>
        <FilterContainer caption={'Start Date'} htmlFor={'filter-startdate'}>
          <FilterDateSelect
            id={'filter-startdate'}
            options={startDateOptions}
            selectedOption={date}
            onSelect={setDateFilter}
          />
        </FilterContainer>
      </FiltersContainerStyled>
      <GridContainerStyled>
        {isLoading && <span>Loading...</span>}
        {!isLoading && <Grid items={items} />}
        <Paginator
          limit={limit}
          count={count}
          selectedPage={page}
          onPageSelect={setPage}
        />
      </GridContainerStyled>
    </GridPageStyled>
  );
};

export default GridPage;
