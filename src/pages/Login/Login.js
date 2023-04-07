
import React, { useState } from "react";
import './Login.css';
import logo from '../../assets/logoadv.png';
import { InputText } from "../../components/Input/Input";
import { Box, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        //con esta funcion valido los datos que me ingresan en el login
    };

    return (
        <body className="body-login">
            <div className="login-container">
                <img src={logo} alt="logo"  className="logo-login"/>
                <form onSubmit={handleLogin} className="login-form">
                    <Box marginBottom="50px">
                        <InputText
                            label="Usuario"
                            input={{
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                            }}
                        />
                    </Box>
                    <Box marginBottom="50px">
                        <InputText
                            label="Password"
                            input={{
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                            }}
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit" endIcon={<ArrowForwardIcon/>}>
                        INICIAR
                    </Button>
                </form>
            </div>
        </body>
    );
}

export default Login;