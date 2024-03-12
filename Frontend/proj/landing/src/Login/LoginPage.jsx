import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../Navbar';
import './LoginPagestyles.css';
const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
                alert('Login successful!')
                navigate('/home');
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <>
        <Nav/>
            <div className="login_container">
                <div className="login_form_container">
                <div className="right">
                    <form className='form_container' onSubmit={handleSubmit}>
                    <h1>Login</h1>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="input" 
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
                                required
                            />
                        <button type="submit" className="green_btn">Login</button>
                        <p className='container my-2'>Don&apos;t have an account?</p>
                    <Link to='/Sign' className="white_btn">SignUp</Link>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;