import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function WorkoutHistory(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const history = useSelector(store => store.history);
    const [heading, setHeading] = useState('Workout History');

    // let {id} = useParams();

    console.log('this is user id', user.id);


    useEffect(() => {
        dispatch({ type: "FETCH_HISTORY", payload: user.id });
    }, []);

    return (
        <div>
            <h2>{heading}</h2>
                {history?.map((item) => {
                    return (
                        <div key={item.id} >
                            <h3>Workout Date: {item.date}</h3>
                            <h3>Workout Duration: {item.duration}</h3>
                            <h3>Workout Notes: {item.notes}</h3>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    );
                })}

        </div>
    );
}

export default WorkoutHistory;