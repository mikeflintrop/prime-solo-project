import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

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

    const [results, setResults] = useState([]);

    let randomArray = [];
    

    const returnToNewWorkout = () => {
        history.push('/new');
    }

    useEffect(()=>{
        dispatch({type: 'FETCH_EXERCISES' });
        getRandom();
    },[])

    function getRandom(array, n) {
        // console.log('exercises:', exercises);
        // console.log('numberSets:', numberSets);
        let randomNumber = numberSets;

        randomArray = new Array(randomNumber);
        console.log('results', randomArray);
        let len = (exercises.length);
        let taken = new Array(len);
        if (randomNumber > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (randomNumber--) {
            let x = Math.floor(Math.random() * len);
            randomArray[randomNumber] = exercises[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return setResults(randomArray);
    }


    return (
        <div>
            <h2>{heading}</h2>
            <h6>Work Time: {workTime}</h6>
            <h6>Rest Time: {restTime}</h6>
            <h6>Number of Sets: {numberSets}</h6>
            <h6>Duration: {duration}</h6>
            <h4>Exercises</h4>
                {results?.map((result)=>{
                    return(
                        <div key={result?.name}>
                            <h5>{result?.name}</h5>
                            <img src={result?.gifUrl} alt={result?.name}/>
                        </div>
                    )
                })}

            <Button 
                variant="outlined" 
                size="medium"
                onClick={getRandom}
                >New Workouts!
            </Button>
        </div>
    );
}

export default CurrentWorkout;





