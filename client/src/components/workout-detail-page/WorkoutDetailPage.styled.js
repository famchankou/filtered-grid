import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  color: #00529a;
`;

export const WorkoutDetailContainer = styled.div`
  width: 70%;
`;

export const WorkoutDetailSidebar = styled.div`
  width: 20%;
`;

export const WorkoutDetailItem = styled.div`
  color: #023e5a;
  margin: .5rem 0;
  border-bottom: 1px solid #e5e7ec;
  overflow-wrap: break-word;
`;

export const WorkoutDetatilPageStyled = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: .8rem;
  min-height: 35rem;
`;