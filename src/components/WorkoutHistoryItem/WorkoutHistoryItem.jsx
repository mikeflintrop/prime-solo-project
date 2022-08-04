import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function WorkoutHistoryItem({item}) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const history = useSelector(store => store.history);
    const [heading, setHeading] = useState('Workout History');
    const [isEditting, setIsEditting] = useState(false);
    const [notes, setNotes] = useState('');

    const editHistory = useSelector((store) => store.editHistory);

    // flip pics function
    const handleRendering = () => {
        if (isEditting) {
            setIsEditting(false);
        } else {
            setIsEditting(true);
        }
    };

    function handleChange(event, property) {
        dispatch({ 
            type: 'EDIT_ONCHANGE', 
            payload: { property: property, value: event.target.value }
        });
    }

      // Called when the submit button is pressed
    function handleSubmit(event) {
        event.preventDefault();

        // PUT REQUEST to /students/:id
        axios.put(`/history/${editStudent.id}`, editHistory)
            .then( response => {
                // clean up reducer data            
                dispatch({ type: 'EDIT_CLEAR' });

                // refresh will happen with useEffect on Home
                // history.push('/'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })   
    };

    console.log('this is user id', user.id);


    useEffect(() => {
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
    }, []);

    const deleteHistoryItem = (item) => {
        console.log("start of deleteTheItem");
        console.log('this is item.id', item.id);
        dispatch({
            type: 'DELETE_HISTORY_ITEM',
            payload: item.id
        });
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
    };

    const handleEditting = (event) => {
        event.preventDefault();

        console.log("start of editTheItem");
        // console.log('this is item.notes', item.notes);
        dispatch({
            type: 'UPDATE_HISTORY_ITEM',
            payload: event.target.value
        });
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
    };


    return (
        <div key={item.id} >
            <h6>Workout Date: {item.date}</h6>
            <h6>Workout Duration: {item.duration}</h6>
            <h6>Workout Notes: {item.notes}</h6>
            {!isEditting ? (
                <button onClick={(event) => setIsEditting(!isEditting)}>Edit</button>
                ) : (
                <form onSubmit={handleEditting}>
                    <input 
                    onChange={(event) => setNotes(event.target.value)}
                    type="text" 
                    placeholder='update notes' 
                    value={item.notes || ''}
                    />
                    <button type='submit'>Submit</button>
                </form>
            )}
            <button onClick={(event) => deleteHistoryItem(item)}>Delete</button>
        </div>
    );
}

export default WorkoutHistoryItem;