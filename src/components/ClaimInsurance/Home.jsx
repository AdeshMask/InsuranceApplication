import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import img from './assests/insu2.jpg'
import './Home.css'

const InsuranceClaim = () => {
    let history = useHistory();
    let role = localStorage.getItem('userRole')
    const [isDisabled, setDisabled] = useState(true);

    console.log(role)
    const create = () => {
        if (role === 'Admin') {
            setDisabled(false);
            history.push("/create");
        }
        else {
            setDisabled(true);
            console.log("Ur not admin")
            history.push("/home");
        }
    }

    const logout = () => {
        history.push("/login");
        window.localStorage.clear();
    }
    const view = () => {
        history.push("/view");
    }
    const myFunction = () => {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    return (
        <div>
            <head>
                <meta charset="ISO-8859-1" />
                <title>Claim Adjuster(Admin)1</title>
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            </head>
            <body>
                <div class="jumbotron">
                    <h2 style={{ textAlign: "center", color: "maroon" }}>CLAIM ADJUSTER</h2>
                </div>
                <form action='#' onSubmit={logout}>
                    <div class="container">
                        <ul class="nav nav-pills nav-justified">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li style={{ color: "white" }}>
                                <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" href="" target="iframe_a">CREATE NEW PROFILE</a>
                            </li>
                            <li style={{ color: "white" }}>
                                <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="/create" onClick={create} disabled={isDisabled}>CREATE CLAIM</a>
                            </li>
                            <li style={{ color: "white" }}>
                                <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="/view" onClick={view}>VIEW CLAIM</a>
                            </li>
                            <li style={{ color: "white" }}>
                                <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" target="iframe_a" href="">GENERATE REPORT</a>
                            </li>
                            <li style={{ color: "white" }}>
                                <a style={{ color: "hsl(0, 60%, 50%)", fontWeight: "bold" }} class="nav-link" href="/login" onClick={logout}>LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                </form>
                <div>
                    <img src={img} height="550px" width="100%"
                        style={{ border: "none" }} name="iframe_a" />
                </div>
            </body>

        </div>
    )
}

export default InsuranceClaim