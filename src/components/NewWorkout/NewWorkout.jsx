import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
// import Button from '@mui/material/Button';

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
        <div>
            <h2>{heading}</h2>
            <form onSubmit={handleSubmit}>
                <input
                onChange={(event) => setWorkTime(event.target.value)}
                placeholder='Work Time per Set (sec)'
                value={workTime} // important
                type="number"
                />
                <input
                onChange={(event) => setRestTime(event.target.value)}
                placeholder='Rest Time per Set (sec)'
                value={restTime} // important
                type="number"
                />
                <input
                onChange={(event) => setNumberSets(event.target.value)}
                placeholder='Number of Sets'
                value={numberSets} // important
                type="number"
                />
                <input
                onChange={(event) => setDuration(event.target.value)}
                placeholder='Total Duration (min)'
                value={duration} // important
                type="number"
                />
                <button 
                type='submit'
                disabled={( workTime.length === 0 && restTime.length === 0 && numberSets.length === 0 && duration.length === 0) ? true : false }
                >Workout!</button>
            </form>
        </div>
    );
}

export default NewWorkout;