import React, { useState, useEffect } from 'react';
import img from './assests/insu1.jpg'
import UserService from '../service/UserService';
import { Link, useParams, useHistory, NavLink } from 'react-router-dom';

export const Login = () => {
    let startValue = {
        email: "",
        password: "",
        userRole: ""
    }

    const [formValue, setForm] = useState(startValue)

    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }
    let history = useHistory();
    const login = async (e) => {
        e.preventDefault();
        let data = {
            email: formValue.email,
            password: formValue.password
        }
        console.log(data)
        if (formValue.email === "" && formValue.password === "" && formValue.userRole === "") {
            alert("Enter input all Fileds")
        }
        UserService.userLogin(data).then((response) => {
            let severity = response.data.message === "Login Successful..." ? "success" : "error";
            severity === "success" ? localStorage.setItem('UserId', response.data.data.userId) : localStorage.setItem('UserId', "null")
            severity === "success" ? localStorage.setItem('userRole', response.data.data.userRole) : localStorage.setItem('userRole', "null")
            severity === "success" ? localStorage.setItem('fullName', response.data.data.fullName) : localStorage.setItem('fullName', "null")
            console.log(response.data.data.userId)
            console.log(response.data.data.userRole)
            console.log(response.data.data.fullName)
            // console.log(response.headers)
            console.log(response);
            alert("Login Successfull", response)
            history.push("/home");
        })
    }
    return (
        <div>
            <head>
                <meta charset="ISO-8859-1" />
                <title>Login</title>
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

            </head>
            <body>
                <div class="jumbotron">
                    <h1 style={{ color: "maroon" }}>INSURANCE</h1>
                    <h2 style={{ textAlign: "left" }}>Claim Login System</h2>
                </div>
                <div class="container" style={{ marginTop: "90px" }}>

                    <div class="row">
                        <div class="col-lg-4 col-lg-5 col-md-5" style={{ marginLeft: "-100px" }}>
                            <img src={img} alt="insurance" />
                        </div>
                        <div class="col-lg-4 col-lg-5 col-md-5" style={{ marginLeft: "160px" }}>
                            <div class="card">
                                <h3 class="card-header alert alert-danger" style={{ color: "maroon" }}>Login</h3>
                                <div class="card-body">
                                    <form action="#" onSubmit={login}>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="email"
                                                placeholder="Enter Email Id" name="email"
                                                required onChange={onNameChange} value={formValue.email} />
                                            <span id="user_check" style={{ color: "red" }}></span>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Enter Password" name="password" required onChange={onNameChange}
                                                value={formValue.password} />
                                            <span id="user_pass" style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select" id="userRole" name="userRole" onChange={onNameChange} value={formValue.userRole}>
                                                <option selected>Choose Roles .....</option>
                                                <option value="Admin"> Admin </option>
                                                <option value="CLAIM HANDLER">CLAIM HANDLER</option>
                                                <option value="INSURED">INSURED</option>
                                            </select>
                                        </div>
                                        <input type="submit" value="Submit" class="btn btn-danger"
                                            onclick={login} />
                                        <NavLink to='/register' ><button type="submit" className="btn ">New User </button> </NavLink>
                                    </form>
                                </div>
                                <div >
                                    <h4 style={{ color: "red" }}></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Login;