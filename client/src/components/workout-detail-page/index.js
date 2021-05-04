import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { useFetch } from '../../hooks';
import {
  WorkoutDetatilPageStyled,
  WorkoutDetailContainer,
  WorkoutDetailSidebar,
  WorkoutDetailItem,
  LinkStyled,
} from './WorkoutDetailPage.styled';

const WorkoutDetailPage = () => {
  const [executeFetchRequest] = useFetch();
  const [workout, setWorkout] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await executeFetchRequest(`${BASE_URL}/workouts/${id}`);
      if (data) {
        delete data.updatedAt;
        delete data.createdAt;
        setWorkout(data);
      }
    }
    fetchData();
  }, [id, executeFetchRequest])

  return (
    <WorkoutDetatilPageStyled>
      <WorkoutDetailSidebar>
        <LinkStyled to="/">Back</LinkStyled>
      </WorkoutDetailSidebar>
      {!workout && <span>Loading...</span>}
      {workout && <WorkoutDetailContainer>
        {Object.keys(workout).map(key =>
          <WorkoutDetailItem key={key}><strong>{key}</strong>: {workout[key]}</WorkoutDetailItem>)}
      </WorkoutDetailContainer>}
    </WorkoutDetatilPageStyled>
  );
};

export default WorkoutDetailPage;
