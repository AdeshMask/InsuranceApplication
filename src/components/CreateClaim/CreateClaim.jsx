import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';

const CreateClaim = () => {
    let history = useHistory();
    const logout = () => {
        history.push("/login");
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
                        <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="">VIEW CLAIM</a>
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
                                <th>Policy Number</th>
                                <th>Policy Type</th>
                                <th>Policy Premium</th>
                                <th>Account Number</th>
                                <th>CREATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1000</td>
                                <td>AUTOMOBILE</td>
                                <td>500000.0</td>
                                <td>1870011501</td>

                                <td><a class="btn btn-success" target="claim_a" >CREATE
                                    CLAIM</a></td>
                            </tr>
                            <tr>
                                <td>1003</td>
                                <td>AUTOMOBILE</td>
                                <td>800000.0</td>
                                <td>1870011504</td>
                                <td><a class="btn btn-success" target="claim_a">CREATE
                                    CLAIM</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
        </div>
    )
}
export default CreateClaim