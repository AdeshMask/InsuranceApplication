import { Link, useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import InsuranceClaim from '../service/CreateInsuranceClaim'


const ViewClaim = () => {
    let history = useHistory();
    const create = () => {
        history.push("/create");
    }
    const login = () => {
        history.push("/login");
        window.localStorage.clear();
    }
    const [claim, setClaim] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        InsuranceClaim.getUserById().then((response) => {
            setClaim(response.data.data);
        })
    };
    console.log(claim)

    return (
        <div>
            <head>
                <meta charset="ISO-8859-1" />
                <title>View Claim Adjuster 4</title>
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            </head>
            <body>
                <div class="jumbotron">
                    <h2 style={{textAlign: "center", color: "maroon"}}>CLAIM ADJUSTER</h2>
                </div>
                <div class="container">
                    <ul class="nav nav-pills nav-justified">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" href="" target="iframe_a">CREATE NEW PROFILE</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="/create" onClick={create}>CREATE CLAIM</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="">VIEW CLAIM</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="">GENERATE REPORT</a>
                        </li>
                        <li style={{ color: "white" }}>
                            <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" href="/login" onClick={login}>LOGOUT</a>
                        </li>
                    </ul>
                </div>



                <div class="container" style={{marginTop: "50px"}}>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Claim Number</th>
                                <th>Claim Reason</th>
                                <th>Street Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Pin Code</th>
                                <th>Claim Type</th>
                                <th>Policy Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5121</td>
                                <td>Crashed</td>
                                <td>Sipcot</td>
                                <td>Chennai</td>
                                <td>Tamilnadu</td>
                                <td>600119</td>
                                <td>AUTOMOBILE</td>
                                <td>10003</td>
                            </tr>

                            <tr>
                                <td>5122</td>
                                <td>Accident</td>
                                <td>HSR Layout</td>
                                <td>Banglore</td>
                                <td>Karnataka</td>
                                <td>895542</td>
                                <td>AUTOMOBILE</td>
                                <td>10021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </body>


        </div>
    )
}

export default ViewClaim