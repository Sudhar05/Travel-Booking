import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Signstyles.css";
import Nav from '../Navbar';
const Sign = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/LoginPage');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/LoginPage');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <>
        <Nav/>
            <div className="signup_container">
                <div className="signup_form_container">
                    <div className="left">
                    <form className='form_container' onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="input " 
                                id="exampleInputname" 
                                onChange={(event) => setName(event.target.value)}
                                required
                            /> 
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="input " 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="input" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required/>
                        <button type="submit" className="green_btn">Register</button>
                        <p>Already have an account ?</p>
                    <Link to='/LoginPage' className="white_btn ">Login</Link>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Sign;