import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Timer from '../Timer/Timer'


import './CurrentWorkout.css';

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
        // getRandom(); // async and promises
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
        <div className="container">
            <h2>{heading}</h2>

            <h6>Work Time: {workTime}</h6>
            <h6>Rest Time: {restTime}</h6>
            <h6>Number of Sets: {numberSets}</h6>
            <h6>Duration: {duration}</h6>

            <Timer duration={duration}/>

            <h3>Exercises</h3>
                {results?.map((result, i)=>{
                    return(
                        <div key={i}>
                            <Card 
                            className='exerciseCard'
                            sx={{ maxWidth: 345}}>
                                <CardMedia
                                    className='exerciseGif'
                                    component="img"
                                    height="140"
                                    image={result?.gifUrl}
                                    alt={result?.name}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                    {result?.name}
                                </Typography>
                                </CardContent>
                            </Card>
                            {/* <h4>{result?.name}</h4>
                            <img  className="gifs" src={result?.gifUrl} alt={result?.name}/> */}
                        </div>
                    )
                })}


            <Button 
                variant="outlined" 
                size="large"
                onClick={getRandom}
                >Get New Exercises!
            </Button>
        </div>
    );
}

export default CurrentWorkout;





