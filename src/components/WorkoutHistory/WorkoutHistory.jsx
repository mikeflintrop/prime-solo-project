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
    // console.log('user', user)
    const history = useSelector(store => store.history);
    const [heading, setHeading] = useState('Workout History');

    // console.log('this is user id', user.id);

    useEffect(() => {
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
    }, []);

    return (
        <div className="container">
            <h2>{heading}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 15, maxWidth: 15}} aria-label="caption table">
                    <caption>* Remove Workout by clicking the red 'Remove' Icon
                        < br />
                        * Edit Workout Notes by clicking the blue 'Edit' Icon
                    </caption>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{width: '20%'}}>Date</TableCell>
                        <TableCell align="center" sx={{width: '20%'}}>Duration</TableCell>
                        <TableCell align="center" sx={{width: '30%'}}>Notes</TableCell>
                        <TableCell align="center" sx={{width: '15%'}}></TableCell>
                        <TableCell align="center" sx={{width: '15%'}}></TableCell>
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