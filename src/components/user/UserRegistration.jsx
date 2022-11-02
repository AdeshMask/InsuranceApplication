import React, { useState, useEffect } from 'react';
import './User.css';
import { Link, useParams, useHistory, NavLink } from 'react-router-dom';
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
        Kyc_File: "",
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
            Kyc_File: formValue.Kyc_File,
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

            <div>

                <body>
                    <div class="jumbotron">
                        <h1 style={{ color: "maroon" }}>INSURANCE</h1>
                        <h2 style={{ textAlign: "left" }}>Claim Registration System</h2>
                    </div>

                    <div className="container" style={{ marginTop: "90px" }}>
                        <div className="row">
                            <div className="col-lg-4 col-lg-5 col-md-5 offset-sm-3 center" width="100%" >
                                <div className="card" style={{ width: "800px", alignContent: "left" }}>
                                    <h3 className="card-header alert alert-danger" style={{ color: "maroon"}}>User Registration Form</h3>
                                    <div className="card-body">
                                        <form name="loginForm" action="#" onSubmit={submit}>

                                            <div className="row-content">
                                                <label htmlFor="fullName" className="label text"><b>Full Name :</b></label>
                                                <input type="text" className="input" id="fullName" name="fullName" value={formValue.fullName}
                                                    placeholder="Enter fullName" required onChange={onNameChange} />
                                                <error-output className="text-error" htmlFor="name"></error-output>
                                            </div>


                                            <div className="row-content">
                                                <label htmlFor="email" className="label text"><b>Email Id :</b></label>
                                                <input type="text" className="form-control" id="email"
                                                    placeholder="Enter email" name="email" value={formValue.email}
                                                    required onChange={onNameChange} />
                                            </div>

                                            <div className="row-content">
                                                <label htmlFor="mobileNumber" className="label text"><b>Mobile Number :</b></label>
                                                <input type="text" className="form-control" id="mobileNumber"
                                                    placeholder="Enter mobileNumber" name="mobileNumber" value={formValue.mobileNumber}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="permanentAddress" className="label text"><b>Permanent Address:</b></label>
                                                <input type="text" className="form-control" id="permanentAddress"
                                                    placeholder="Enter permanentAddress" name="permanentAddress" value={formValue.permanentAddress}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="temporaryAddress" className="label text"><b>Temporary Address:</b></label>
                                                <input type="text" className="form-control" id="temporaryAddress"
                                                    placeholder="Enter temporaryAddress" name="temporaryAddress" value={formValue.temporaryAddress}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="age" className="label text"><b>Age :</b></label>
                                                <input type="text" className="form-control" id="age"
                                                    placeholder="Enter age" name="age" value={formValue.age}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="occupation" className="label text"><b>Occupation :</b></label>
                                                <input type="text" className="form-control" id="occupation"
                                                    placeholder="Enter occupation" name="occupation" value={formValue.occupation}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="occupation" className="label text"><b>Occupation :</b></label>
                                                <input type="text" className="form-control" id="familyBackground"
                                                    placeholder="Enter familyBackground" name="familyBackground" value={formValue.familyBackground}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="occupation" className="label text"><b>Occupation :</b></label>
                                                <input type="text" className="form-control" id="Kyc_File"
                                                    placeholder="Enter Kyc_File" name="Kyc_File" value={formValue.Kyc_File}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="ealthCondition" className="label text"><b>HealthCondition :</b></label>
                                                <input type="text" className="form-control" id="healthCondition"
                                                    placeholder="Enter healthCondition" name="healthCondition" value={formValue.healthCondition}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="vehicledata" className="label text"><b>Vehicledata :</b></label>
                                                <input type="text" className="form-control" id="vehicledata"
                                                    placeholder="Enter vehicledata" name="vehicledata" value={formValue.vehicledata}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="registerddate" className="label text"><b>Registerddate :</b></label>
                                                <input type="text" className="form-control" id="registerddate"
                                                    placeholder="Enter registerddate" name="registerddate" value={formValue.registerddate}
                                                    required onChange={onNameChange} />
                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="updateddate" className="label text"><b>Updateddate :</b></label>
                                                <input type="text" className="form-control" id="updateddate"
                                                    placeholder="Enter updateddate" name="updateddate" value={formValue.updateddate}
                                                    required onChange={onNameChange} />
                                            </div>

                                            <div className="row-content">
                                                <label htmlFor="password" className="label text"><b>Password :</b></label>
                                                <input type="password" className="form-control" id="password"
                                                    placeholder="Enter password" name="password" required onChange={onNameChange} value={formValue.password} />

                                            </div>
                                            <div className="row-content">
                                                <label htmlFor="userRole" className="label text"><b>UserRole :</b></label>
                                                <select className="custom-select" id="userRole" name="userRole" onChange={onNameChange} value={formValue.userRole}>
                                                    <option selected>Choose Roles .....</option>
                                                    <option value="CLAIM HANDLER">CLAIM HANDLER</option>
                                                    <option value="INSURED">INSURED</option>

                                                </select>
                                            </div>

                                            <input type="submit" value="Submit" className="btn btn-danger"
                                                onclick={submit} />
                                            <NavLink to='/login' ><button type="submit" className="btn ">Already User </button> </NavLink>
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
        </div>


    )
}

export default UserRegistration;