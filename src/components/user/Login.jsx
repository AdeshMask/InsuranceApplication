import React, {useState, useEffect} from 'react';
import img from './assests/insu1.jpg'
import UserService from '../service/UserService';

export const Login = () => {
    let startValue = {
        email: "",
        password: ""
    }
    const [formValue, setForm] = useState(startValue)

    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }
    const login = async (e) => {
        e.preventDefault();
        let data ={
            email: formValue.email,
            password: formValue.password
        }
        console.log(data)
        UserService.userLogin(data).then((res) => {
            console.log(res);
            alert("Login Successfull",res)
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
                    <h2>Claim Registration System</h2>
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
                                                required onChange={onNameChange} value={formValue.email} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
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
                                                <option value="CLAIM HANDLER">CLAIM HANDLER</option>
                                                <option value="INSURED">INSURED</option>
                                            </select>
                                        </div>
                                        <input type="submit" value="Submit" class="btn btn-danger"
                                            onclick={login} />
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