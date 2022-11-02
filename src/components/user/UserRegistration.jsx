import React, { useState, useEffect } from 'react';
import './User.css';
import { Link, useParams, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../../components/service/UserService';

const UserRegistration = (props) => {
    let startValue = {
        fullName: "",
        password: "",
        email: "",
        mobileNumber: "",
        permanentAddress: "",
        temporaryAddress: "",
        age: "",
        occupation: "",
        familyBackground: "",
        KYC_File: "",
        healthCondition: "",
        vehicledata: "",
        registerddate: "",
        updateddate: "",
        userRole: "",
    }
    const [formValue, setForm] = useState(startValue)

    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    let history = useHistory();
    const submit = async (event) => {
        event.preventDefault();
        let object = {
            id: formValue.id,
            fullName: formValue.fullName,
            password: formValue.password,
            mobileNumber: formValue.mobileNumber,
            email: formValue.email,
            permanentAddress: formValue.permanentAddress,
            temporaryAddress: formValue.temporaryAddress,
            age: formValue.age,
            occupation: formValue.occupation,
            familyBackground: formValue.familyBackground,
            KYC_File: formValue.KYC_File,
            healthCondition: formValue.healthCondition,
            registerddate: formValue.registerddate,
            updateddate: formValue.updateddate,
            userRole: formValue.userRole,
        };

        console.log(object);
        UserService.addUser(object).then((res) => {
            console.log(res);
            alert("Data Added!!", res)
            history.push("/login");
        })
    }
    const login = () => {
        history.push("/login");
    }
    return (
        <div>
            <head>
                <title>Create Profile Adjuster</title>
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            </head>


            <body>
                <div className="jumbotron">
                    <h2 style={{ textAlign: "center", color: "maroon" }}>CLAIM ADJUSTER</h2>
                </div>
                <div className="container">
                    <ul className="nav nav-pills nav-justified">
                        <li style={{ color: "white" }} >
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} className="nav-link" href="" target="iframe_a"> </a>
                        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} className="nav-link" href="" target="iframe_a">CREATE NEW PROFILE</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} className="nav-link" target="iframe_a" href="">CREATE CLAIM</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} className="nav-link" target="iframe_a" href="">VIEW CLAIM</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} className="nav-link" target="iframe_a" href="">GENERATE REPORT</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} className="nav-link" href="/login" onclick={login}>LOGIN</a>
                        </li>
                    </ul>
                </div>


                <div className="container" style={{ marginTop: "90px" }}>
                    <div className="row">
                        <div className="col-lg-4 col-lg-5 col-md-5 offset-sm-3 center">
                            <div className="card">
                                <h3 className="card-header alert alert-danger" style={{ color: "maroon" }}>Create
                                    Profile</h3>
                                <div className="card-body">
                                    <form name="loginForm" action="#" onSubmit={submit}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="fullName"
                                                placeholder="Enter fullName" name="fullName" value={formValue.fullName}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="email"
                                                placeholder="Enter email" name="email" value={formValue.email}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="mobileNumber"
                                                placeholder="Enter mobileNumber" name="mobileNumber" value={formValue.mobileNumber}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="permanentAddress"
                                                placeholder="Enter permanentAddress" name="permanentAddress" value={formValue.permanentAddress}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="temporaryAddress"
                                                placeholder="Enter temporaryAddress" name="temporaryAddress" value={formValue.temporaryAddress}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="age"
                                                placeholder="Enter age" name="age" value={formValue.age}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="occupation"
                                                placeholder="Enter occupation" name="occupation" value={formValue.occupation}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="familyBackground"
                                                placeholder="Enter familyBackground" name="familyBackground" value={formValue.familyBackground}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="KYC_File"
                                                placeholder="Enter KYC_File" name="KYC_File" value={formValue.KYC_File}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="healthCondition"
                                                placeholder="Enter healthCondition" name="healthCondition" value={formValue.healthCondition}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="vehicledata"
                                                placeholder="Enter vehicledata" name="vehicledata" value={formValue.vehicledata}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="registerddate"
                                                placeholder="Enter registerddate" name="registerddate" value={formValue.registerddate}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="updateddate"
                                                placeholder="Enter updateddate" name="updateddate" value={formValue.updateddate}
                                                required onChange={onNameChange} /> <span id="user_check"
                                                    style={{ color: "red" }}></span>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" id="password"
                                                placeholder="Enter password" name="password" required onChange={onNameChange} value={formValue.password} />
                                            <span id="password" style={{ color: "red" }}></span>
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select" id="userRole" name="userRole" onChange={onNameChange} value={formValue.userRole}>
                                                <option selected>Choose Roles .....</option>
                                                <option value="CLAIM HANDLER">CLAIM HANDLER</option>
                                                <option value="INSURED">INSURED</option>

                                            </select>
                                        </div>

                                        <input type="submit" value="Submit" className="btn btn-danger"
                                            onclick={submit} />
                                    </form>
                                    <h4 style={{ color: "green" }}></h4>
                                    <h4 style={{ color: "red" }}></h4>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default UserRegistration;