import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from '../../diory-axios';
import './AddNewStudentForm.css'
const AddNewStudentForm = (props) =>{
    const [nameValue, setNameValue] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    const [math, setMath] = useState(''); 
    const [history, setHistory] = useState('');
    const [russian, setRussian] = useState('');

    const addNewStudent = () => {
        const response = axios.post('school/classes/'+props.classID +'/students.json', {id: props.studentID, name: nameValue, date: date, marks: {math: math, history: history, russian: russian }, phone: phone})
        console.log(response);
    }
    
    return (

        <div className="AddForm">
            <h2 className='form_title'>Добавить нового ученика</h2>
            <button className='close_modal' onClick={props.closeHandler}>X</button>
            <form className='AddForm_form'>
                <input className='AddForm_input' type="text" placeholder='Имя' value = {nameValue} onChange={event => setNameValue(event.target.value)} />

                <input className='AddForm_input' type="tel" placeholder='Телефон' value = {phone} onChange={event => setPhone(event.target.value)}/>

                <input className='AddForm_input' type="date" placeholder='Дата рождения' value = {date} onChange={event => setDate(event.target.value)}/>

                <p>Оценки</p>

                <input className='AddForm_input' type="text" placeholder='история' value = {history} onChange={event => setHistory(event.target.value)}/>
                <input className='AddForm_input' type="text" placeholder='математика' value = {math} onChange={event => setMath(event.target.value)}/>
                <input className='AddForm_input' type="text" placeholder='русский язык' value = {russian} onChange={event => setRussian(event.target.value)}/>
                <Button className='addInfo_btn' variant='outline-success' onClick={(e)=>{
                    props.closeHandler();
                    addNewStudent();
                    props.fetch();
                    }} type="submit">Добавить</Button>
            </form>
        </div>
    )
}

export default AddNewStudentForm;