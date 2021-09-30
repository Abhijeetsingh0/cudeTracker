import React, { useState,useEffect } from 'react';
import './sing.css';
import axios from 'axios';

function SingUp() {
    // const [sData , setsData ] = useState(null);
    
    var firstName = '';
    var lastName = '';
    var email = '';
    var password = '';


    const firstNameHandler = (e) =>{
        firstName = e.target.value;
    }

    const lastNameHandler = (e) =>{
        lastName = e.target.value;
    }

    const emailHandler = (e) =>{
        email = e.target.value;
    }

    const passwordHandler = (e) => {
        password = e.target.value;
    }

    const signUpHandler = () =>{
        const formData = {
            fName:firstName,
            lName:lastName,
            uEmail:email,
            uPassword:password
        }
        console.log(formData);
    }
    
    return (
        <div>
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" onChange={(e)=>firstNameHandler(e)} placeholder='first name'/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" onChange={(e)=>lastNameHandler(e)} placeholder='last name' />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>emailHandler(e)} placeholder='email' />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=> passwordHandler(e)} placeholder='password' />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={signUpHandler}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default SingUp
