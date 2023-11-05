import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../header";


function Forms() {
    const navigate = useNavigate();

    const pageStyle = {
        backgroundColor: "#33ccff",
        height: "92.3vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const formStyle = {
        padding: "5em",
        backgroundColor: "white",
    };

    const input = {
        padding: "1em 5em"
    }

    const label = {
        fontWeight: "bold"
    }

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    });


    const loginCredentials = [
        { username: "user1",email: "user1@gmail.com", password: "Password@1" },
        { username: "user2",email: "user2@gmail.com", password: "Password@2" },
        { username: "user3",email: "user3@gmail.com", password: "Password@3" },
        { username: "user4",email: "user4@gmail.com", password: "Password@4" },
        { username: "user5",email: "user5@gmail.com", password: "Password@5" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate user authentication (replace this with your actual authentication logic)
        const { username, password } = values;
        const isValidUser = loginCredentials.some(
        (cred) => cred.username === username && cred.password === password
        );

        if (isValidUser) {
        navigate('/counter');
        } else {
        alert("Invalid credentials. Please try again.");
        }
    };


    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    const headerStyle = {
        textAlign: 'center',
        padding: '10px'
    };

  return (
    <div style={pageStyle}>
        <div className="app" style={formStyle}>
        <Form onSubmit={handleSubmit}>
            <Header name="Login Page" style={headerStyle}/>
            <Form.Group className="mb-3" controlId="formGridUsername">
            <Form.Label style={label}>Username</Form.Label>
            <Form.Control
                style={input}
                type="text"
                name="username"
                value={values.username}
                onChange={onChange}
                placeholder="Enter username"
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label style={label}>Email</Form.Label>
            <Form.Control
                style={input}
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Enter email"
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label style={label}>Password</Form.Label>
            <Form.Control
                style={input}
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                placeholder="Enter password"
                required
            />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    </div>
  );
}

export default Forms;

