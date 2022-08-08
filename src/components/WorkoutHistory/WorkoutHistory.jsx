import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import WorkoutHistoryItem from '../WorkoutHistoryItem/WorkoutHistoryItem';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function WorkoutHistory(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    console.log('user', user)
    const history = useSelector(store => store.history);
    const [heading, setHeading] = useState('Workout History');


    // const editHistory = useSelector((store) => store.editHistory);

    // function handleChange(event, property) {
    //     dispatch({ 
    //         type: 'EDIT_ONCHANGE', 
    //         payload: { property: property, value: event.target.value }
    //     });
    // }

      // Called when the submit button is pressed
    // function handleSubmit(event) {
    //     event.preventDefault();

    //     // PUT REQUEST to /students/:id
    //     axios.put(`/history/${editStudent.id}`, editHistory)
    //         .then( response => {
    //             // clean up reducer data            
    //             dispatch({ type: 'EDIT_CLEAR' });

    //             // refresh will happen with useEffect on Home
    //             // history.push('/'); // back to list
    //         })
    //         .catch(error => {
    //             console.log('error on PUT: ', error);
    //         })   
    // };

    console.log('this is user id', user.id);


    useEffect(() => {
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
    }, []);

    // const deleteHistoryItem = (item) => {
    //     console.log("start of deleteTheItem");
    //     console.log('this is item.id', item.id);
    //     dispatch({
    //         type: 'DELETE_HISTORY_ITEM',
    //         payload: item.id
    //     });
    //     dispatch({ type: "FETCH_HISTORY", payload: user.id });
    // };

    // const editHistoryItem = (item) => {
    //     console.log("start of editTheItem");
    //     console.log('this is item.id', item.id);
    //     dispatch({
    //         type: 'EDIT_HISTORY_ITEM',
    //         payload: item.notes
    //     });
    //     dispatch({ type: "FETCH_HISTORY", payload: user.id });
    // };


    return (
        <div>
            <h2>{heading}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 10, maxWidth: 20}} aria-label="caption table">
                    <caption>* Remove Workout by clicking the red 'Remove' Icon
                        < br />
                        * Edit Workout Notes by clicking the blue 'Edit' Icon
                    </caption>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Duration</TableCell>
                        <TableCell align="center">Notes</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {history?.map((item) => {
                            return (
                                <WorkoutHistoryItem item={item} key={item.id}/>
                            )
                        })}
                    </TableBody>   
                </Table>
            </TableContainer>    
        </div>
    );
}

export default WorkoutHistory;