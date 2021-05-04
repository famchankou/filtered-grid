import styled from 'styled-components';

export const GridPageStyled = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: .8rem;
  min-height: 35rem;

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    width: auto;
  }
`;

export const FiltersContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #f8fbfb;
  margin: 0 .3rem;
  height: min-content;
  padding: .5rem;

  @media only screen and (max-width: 970px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    width: auto;
  }
`;

export const FilterButtonStyled = styled.button`
  height: 2rem;
  color: #023e5a;
  border: none;
  background-color: #fbe9e9;
  cursor: pointer;
`;

export const GridContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 0 .3rem;

  @media only screen and (max-width: 970px) {
    width: auto;
  }
`;
