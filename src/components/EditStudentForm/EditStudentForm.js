import React, { useState } from 'react';
import axios from '../../diory-axios';
import './EditStudentForm.css'
import { Button } from 'react-bootstrap';
const EditStudentForm = (props) =>{
    const [nameValue, setNameValue] = useState(props.nameValue);
    const [phone, setPhone] = useState(props.phoneValue);
    const [date, setDate] = useState(props.dateValue);

    const [math, setMath] = useState(props.mathValue); 
    const [history, setHistory] = useState(props.historyValue);
    const [russian, setRussian] = useState(props.russianValue);

    const editStudentInfo = () => {
        const response = axios.put('school/classes/'+props.classID +'/students/'+ 
        
        props.studentID+'.json', 
        {id: props.studentID, 
            name: nameValue, 
            date: date, 
            marks: {math: math, history: history, russian: russian }, 
            phone: phone})
        console.log(response);
    }
    
    return (
        <div className="EditStudentForm">
            <h2 className="form_title">Добавить нового ученика</h2>
            <button className='close_modal' onClick={props.closeHandler}>X</button>
            <form className='EditStudentForm_form' onSubmit={()=>editStudentInfo()}>
                <p className='input_title'>Имя</p>
                <input className='EditStudentForm_input' type="text" placeholder='Имя' value = {nameValue} onChange={event => setNameValue(event.target.value)} />
                <p className='input_title'>Телефон</p>
                <input className='EditStudentForm_input' type="tel" placeholder='Телефон' value = {phone} onChange={event => setPhone(event.target.value)}/>
                <p className='input_title'>Дата рождения</p>
                <input className='EditStudentForm_input' type="date" placeholder='Дата рождения' value = {date} onChange={event => setDate(event.target.value)}/>

                <h4>Оценки</h4>
                <p className='input_title'>История</p>
                <input className='EditStudentForm_input' type="text" placeholder='история' value = {history} onChange={event => setHistory(event.target.value)}/>
                <p className='input_title'>Математика</p>
                <input className='EditStudentForm_input' type="text" placeholder='математика' value = {math} onChange={event => setMath(event.target.value)}/>
                <p className='input_title'>Русский язык</p>
                <input className='EditStudentForm_input' type="text" placeholder='русский язык' value = {russian} onChange={event => setRussian(event.target.value)}/>
                <Button className='editInfo_btn' variant='outline-success' onClick={()=>{
                    props.closeHandler();
                    editStudentInfo();}} type="submit">Изменить
                </Button>{''}
            </form>
            
        </div>
    )
}

export default EditStudentForm;