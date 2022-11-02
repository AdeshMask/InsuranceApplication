import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import InsuranceCategory from '../service/InsuranceCategory';

const CreateClaim = () => {
    let history = useHistory();
    const [Insurance, SetInsurancce] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        InsuranceCategory.getAllInsurance().then((response) => {
            SetInsurancce(response.data.data);
        })
    };
    console.log(Insurance);

    const logout = () => {
        history.push("/login");
        window.localStorage.clear();
    }
    const view = () => {
        history.push("/view");
    }
    return (
        <div>
            <head>
                <meta charset="ISO-8859-1" />
                <title>Claim Adjuster(Admin)1</title>
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            </head>


            <div class="jumbotron">
                <h2 style={{ textAlign: "center", color: "maroon" }}>CLAIM ADJUSTER</h2>
            </div>
            <div class="container">
                <ul class="nav nav-pills nav-justified">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li style={{ color: "white" }}>
                        <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" href="" target="iframe_a">CREATE NEW PROFILE</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="">CREATE CLAIM</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="/view" onClick={view}>VIEW CLAIM</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="">GENERATE REPORT</a>
                    </li>
                    <li style={{ color: "white" }}>
                        <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" href="/login" onClick={{ logout }}>LOGOUT</a>
                    </li>
                </ul>
            </div>

            <body>
                <div class="container" style={{ marginTop: "50px" }}>

                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Insurance Code</th>
                                <th>Insurance Name</th>
                                <th>Scheme</th>
                                <th>Insurance Status</th>
                                <th>CREATE</th>
                            </tr>
                        </thead>
                        {Insurance.map((insurance) =>
                            <tbody>
                                <tr>
                                    <td>{insurance.insurance_code}</td>
                                    <td>{insurance.insuranceName}</td>
                                    <td>{insurance.insurance_Scheme}</td>
                                    <td>{insurance.insuranceStatus}</td>

                                    <td><a class="btn btn-success" target="claim_a" >CREATE
                                        CLAIM</a>
                                    </td>
                                </tr>
                            </tbody>)}
                    </table>
                </div>
            </body>
        </div>
    )
}
export default CreateClaim