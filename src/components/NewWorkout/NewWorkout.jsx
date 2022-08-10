import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function NewWorkout(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
    const dispatch = useDispatch();
    const history = useHistory();
    // const exercises = useSelector((store) => store.exercises);
    // const editStudent = useSelector((store) => store.editStudent);
    const [heading, setHeading] = useState('New Workout');
    const [workTime, setWorkTime] = useState('');
    const [restTime, setRestTime] = useState('');
    const [numberSets, setNumberSets] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(()=>{
        // dispatch({type: 'FETCH_EXERCISES' });
        // dispatch({type: 'FETCH_GENRES', payload: id });
    },[])

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_WORK_TIME',
            payload: workTime
        });
        dispatch({
            type: 'ADD_REST_TIME',
            payload: restTime
        });
        dispatch({
            type: 'ADD_NUMBER_SETS',
            payload: numberSets
        });
        dispatch({
            type: 'ADD_DURATION',
            payload: duration
        });
        history.push('/current');
        setWorkTime('');
        setRestTime('');
        setNumberSets('');
        setDuration('');
    }
        // PUT REQUEST to /students/:id
    //     axios.post(`/students/${editStudent.id}`, editStudent)
    //         .then( response => {
    //             // clean up reducer data            
    //             dispatch({ type: 'EDIT_CLEAR' });

    //             // refresh will happen with useEffect on Home
    //             history.push('/current'); // back to list
    //         })
    //         .catch(error => {
    //             console.log('error in POSTing: ', error);
    //         })
        
    // };


    return (
        <div className="container">
            <h2>{heading}</h2>
            <Box 
            onSubmit={handleSubmit}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField
                    // variant="outlined"
                    id="outlined-number"
                    label="Work Time per Set (sec)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setWorkTime(event.target.value)}
                    placeholder='seconds'
                    value={workTime} // important
                />
                <TextField
                    id="outlined-number2"
                    label="Rest Time per Set (sec)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setRestTime(event.target.value)}
                    placeholder='seconds'
                    value={restTime} // important
                />
                <TextField
                    id="outlined-number3"
                    label="Number of Sets"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setNumberSets(event.target.value)}
                    placeholder='Number of Sets'
                    value={numberSets} // important
                />
                <TextField
                    id="outlined-number4"
                    label="Total Duration (min)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => setDuration(event.target.value)}
                    placeholder='minutes'
                    value={duration} // important
                />
                <Button 
                    variant="outlined"
                    type='submit'
                    disabled={( workTime.length === 0 || restTime.length === 0 || numberSets.length === 0 || duration.length === 0) ? true : false }
                >Workout!
                </Button>
            </Box>

        </div>
    );
}

export default NewWorkout;