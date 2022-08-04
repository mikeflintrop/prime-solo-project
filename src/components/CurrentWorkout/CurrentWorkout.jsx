import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
// import Button from '@mui/material/Button';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CurrentWorkout(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
    const dispatch = useDispatch();
    const history = useHistory();
    const exercises = useSelector((store) => store.exercises);
    const workTime = useSelector((store) => store.workTime);
    const restTime = useSelector((store) => store.restTime);
    const numberSets = useSelector((store) => store.numberSets);
    const duration = useSelector((store) => store.duration);
    const [heading, setHeading] = useState('Current Workout');

    const returnToNewWorkout = () => {
        history.push('/new');
    }

    useEffect(()=>{
        // dispatch({type: 'FETCH_EXERCISES' });
        // dispatch({type: 'FETCH_GENRES', payload: id });
    },[])


    return (
        <div>
            <h2>{heading}</h2>
            <h6>Work Time: {workTime}</h6>
            <h6>Rest Time: {restTime}</h6>
            <h6>Number of Sets: {numberSets}</h6>
            <h6>Duration: {duration}</h6>
            <h4>Exercises</h4>
                {/* {exercises.map((exercise, i)=>{
                    return(
                        <div>
                            <h5 key={i}>{exercise.name}</h5>
                            <img src={exercise.gifUrl} alt={exercise.name}/>
                        </div>
                    )
                })} */}

            {/* <Button 
                variant="outlined" 
                size="medium"
                onClick={returnToNewWorkout}
                >Return to New Workout
            </Button> */}
        </div>
    );
}

export default CurrentWorkout;





