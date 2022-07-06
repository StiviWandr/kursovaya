import React, {useState} from 'react';

import './StudentsTable.css'

const StudentsTable = (props) =>{

    

    

    
    return (
        <div className='StudentsTable'>
            {props.children}
        </div>
    )
}

export default StudentsTable;