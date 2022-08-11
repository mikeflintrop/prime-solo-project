import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import { format, compareAsc } from 'date-fns'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Swal from 'sweetalert2'

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
    console.log('editHistory', editHistory);

    let itemDate = item.date;

    // flip pics function
    // const handleRendering = () => {
    //     if (isEditting) {
    //         setIsEditting(false);
    //     } else {
    //         setIsEditting(true);
    //     }
    // };

    const handleEditClick = (item) => {
        // dispatch student info to redux store
        setIsEditting(!isEditting);

        dispatch ({ type: 'SET_EDIT_HISTORY', payload: item });
        console.log('item in handleEditClick', item);
        // route useer to Edit form
        // history.push('/edit');
    }

    function handleChange(event, property) {
        dispatch({ 
            type: 'EDIT_ONCHANGE', 
            payload: { property: property, value: event.target.value }
        });
    }

      // Called when the submit button is pressed
    function handleSubmit(event) {
        event.preventDefault();
        console.log('editHistory in handleSubmit', editHistory);

        setIsEditting(false);

        // PUT REQUEST to /students/:id
        axios.put(`/api/history/${editHistory.id}`, editHistory)
            .then( response => {
                // clean up reducer data            
                dispatch({ type: 'EDIT_CLEAR' });

                // refresh will happen with useEffect on Home
                history.push('/history'); // back to list
                // setIsEditting(isEditting)
                
                dispatch({ type: "FETCH_HISTORY", payload: user.id });


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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Removed!',
                'Your workout has been removed.',
                'success'
                )
                dispatch({
                type: 'DELETE_HISTORY_ITEM',
                payload: item.id
                });
            } 
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
        }); 
    };

    // const handleEditting = (event) => {
    //     event.preventDefault();

    //     console.log("start of editTheItem");
    //     // console.log('this is item.notes', item.notes);
    //     dispatch({
    //         type: 'UPDATE_HISTORY_ITEM',
    //         payload: event.target.value
    //     });
    //     dispatch({ type: "FETCH_HISTORY", payload: user.id });
    // };


    return (
        <TableRow key={item.id}>
            <TableCell component="th" scope="row" align="center" sx={{width: '20%'}}>
            {format(new Date(itemDate), 'MM/dd/yyyy')}
            </TableCell>
            <TableCell align="center" sx={{width: '20%'}}>{item.duration} (mins)</TableCell>
            <TableCell align="right" sx={{width: '30%'}}>{item.notes}</TableCell>
            <TableCell align="center" sx={{width: '15%'}}>            
                {!isEditting ? (
                    <EditIcon 
                    color="primary"
                    onClick={() => handleEditClick(item)}
                    />
                    ) : (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Edit Notes" 
                            variant="outlined"
                            onChange={(event) => handleChange(event, 'notes')}
                            placeholder='update notes'
                            value={editHistory.notes} // important
                        />
                        <Button 
                            variant="outlined"
                            type='submit'
                        >Submit
                        </Button>
                    </form>
                )}
            </TableCell>
            <TableCell align="center" sx={{width: '15%'}}>            
                <DeleteForeverTwoToneIcon
                color="error"
                onClick={() => deleteHistoryItem(item)}
                />
            </TableCell>
        </TableRow>
    );
}

export default WorkoutHistoryItem;