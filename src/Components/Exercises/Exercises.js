import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ExerciseCard from './../ExerciseCard/ExerciseCard';
import Pagination from '@mui/material/Pagination';
import fetchData, { exerciseOptions } from '../../utils/fetchData';
import Loader from '../Loader/Loader';

const Exercises = ({exercises,setExercises,bodyPart}) => {
    const[currentPage,setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);
    
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
    

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  if (!currentExercises.length) return <Loader/>;
    return (
        <Box id={exercises}
        sx={{mt:{lg:'110px'}}}
        mt="50px"
        p="20px"
        >
            <Typography variant="h3" mb="30px">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, idx) => (
                <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="error"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
        </Box>
    );
};

export default Exercises;