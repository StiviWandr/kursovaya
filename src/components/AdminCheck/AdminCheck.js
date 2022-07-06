import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './AdminCheck.css'
const AdminCheck = (props) =>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [trueLogin, setTrueLogin] = useState(props.trueLogin);
    const [truePassword, setTruePassword] = useState(props.truePassword);
    const [admin, setAdmin] = useState(true)
    const checkData = () =>{
        if (truePassword === password && trueLogin === login){
            setAdmin(false);
            alert('Вход выполнен!')
        }else{
            alert("Неверные данные админа")
        }
        console.log(login, password)
        console.log(trueLogin, truePassword);
        console.log(truePassword === password, trueLogin === login);
    }
    return (
        <>
        {admin?
        
            <div className="AdminCheck">
                    <form className="AdminCheck_form">
                        <label>
                            <p className="input_title">Login</p>
                            <input className='input' type="text" value={login} onChange={(e)=>{setLogin(e.target.value);}}/>
                        </label>

                        <label>
                            <p className="input_title">Password</p>
                            <input className='input' type="password" value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
                        </label>

                    </form>
                    <Button variant="outline-success" onClick={()=>{
                            checkData();
                        }} type="sumbit">Log In</Button>

            </div>:null
        
        }
            
        
        </>
        
        
    )
}

export default AdminCheck;