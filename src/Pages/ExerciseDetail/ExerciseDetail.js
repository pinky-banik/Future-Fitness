import React, { useEffect, useState } from 'react';
import {useParams}  from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from './../../Components/Detail/Detail';
import ExerciseVideos from './../../Components/ExcerciseVideos/ExerciseVideos';
import SimilarExercises from './../../Components/SimilarExercises/SimilarExercises';
import fetchData, { exerciseOptions } from '../../utils/fetchData';

const ExerciseDetail = () => {

    const [exerciseDetail,setExerciseDetail] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        const fetchExercisesData = async() =>{
    const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    setExerciseDetail(exerciseDetailData);

        }
        fetchExercisesData();
    },[id]);
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos/>
            <SimilarExercises/>
        </Box>
    );
};

export default ExerciseDetail;