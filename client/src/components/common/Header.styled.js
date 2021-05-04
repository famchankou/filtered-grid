import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  min-height: 4rem;
  width: 100%;
  background-color: #e4ebec;
  align-items: center;
  justify-content: space-between;
  padding: .3rem 1rem;
  box-sizing: border-box;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  >svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

export const StyledLogo = styled.div`
  color: #023e5a;
  margin: .1rem .7rem;
  font-size: 1.5rem;
`;
