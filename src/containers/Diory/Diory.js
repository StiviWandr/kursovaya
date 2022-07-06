import axios from '../../diory-axios'
import React, { useEffect, useState } from "react";
import './Diory.css'
import StudentsTable from '../../components/StudentsTable/StudentsTable';

const Diory = (props) => {

    // Для получения данных о всех классах
    const [allClasses, setAllClasses] = useState([])
    // для получения данных о студентов, учащихся в данном классе
    const [currentStudents, setCurrentStudents] = useState([])
    //при нажатии на кнопку какого-то класса
    const [currentClass, setCurrentClass] = useState();
    const [addButtonShow, setAddButtonShow] = useState(false)
    //при нажатии на кнопку просмотреть оценки
    const [showmarks, setShowmarks] = useState(false);  
    const [currentMarks, setCurrentMarks] = useState(true);
    const [lastID, setLastID] = useState();




    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    //при загрузке страницы получение информации о существующих классах
    useEffect(() => {
        const fetchClassesData = async () =>{
            const response = await axios.get('school/classes.json');
            let allCl = Object.keys(response.data).map(id =>{
                return {...response.data[id], id}
            })

            setAllClasses(allCl)
        }
        fetchClassesData();
    }, [])


    //функция для просмотра данных об оценках ученика
    const showStudentMarks = async (studentId)=>{
        const response = await axios.get('school/classes/' + currentClass+ '/students/'+ studentId+'.json')

        let currentStudentsMarks;
            if(response.data !==null || response.data !==undefined){
                currentStudentsMarks = Object.keys(response.data.marks).map(name => {
                    return {...response.data.marks[name], name}
                })
            }

        setCurrentMarks(currentStudentsMarks)
        
    }

   
    const showStudents = async (id) =>{
        const response = await axios.get('school/classes/' + id+ '/students.json')
        let students=[];
        
        setCurrentClass(id);
        setAddButtonShow(true)
        const res =Object.keys(response.data).map(id =>{
            return{...response.data[id], id}
        })
        setCurrentStudents(res);

        setLastID(res[res.length - 1].id);
    }

    return(
        <div className="Admin">
            <div className="classList">
                {allClasses.map(classInfo => {
                    return (
                        <button onClick={()=>{showStudents(classInfo.id); setCurrentClass(classInfo.id)}} key={classInfo.id} className="className">{classInfo.id}</button>
                    )
                })}
            </div>
            
                
            <StudentsTable>
                
                <div className='StudentsTable_row'>
                    <div className='StudentsTable_column'>ФИО</div>
                    <div className='StudentsTable_column'>Дата рождения</div>
                    <div className='StudentsTable_column'>Phone</div>
                    <div className='StudentsTable_column'>Marks</div>
                </div>
                {currentStudents.map(student =>{
                    
                    
                    
                    return(
                        <div key={student.name} className='StudentsTable_row'>
                            <div className='StudentsTable_column'>{student.name}</div>
                            <div className='StudentsTable_column'>{student.date}</div>
                            <div className='StudentsTable_column'>{student.phone}</div>
                            <div className='StudentsTable_column'>
                                <button onClick={async ()=>{
                                        
                                        await showStudentMarks(student.id); 
                                        await setShowmarks(true) 
                                    }} className='showmarks_btn'>Просмотреть оценки</button>
                            </div>
                        
                        {showmarks?<div className='studentmarks_modal'>
                        <h2>Средние оценки ученика(-цы)</h2>
                        <button className='close_modal' onClick={()=>setShowmarks(false)}>X</button>
                            {currentMarks.map(markID => {
                                return( 

                                        <div key={getRandomInt(1, 1000)} className='marksInfo'>
                                            <div className='marksInfo_subjectname'>{markID.name}</div>
                                            <div className='marksInfo_subjectmark'>{markID[0]}</div>
                                        </div> 
                                    )
                            })}
                        </div>: null}
                        </div>
                    )
                    
                })}

            
            </StudentsTable>
        </div>
    )
}

export default Diory;