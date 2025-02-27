import React, { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    Input,
    Checkbox,
    FormControlLabel,
    Button,
    FormGroup
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { fb_signup } from '../firebase/functions';

export default function SignUpscreen() {
    const navigation = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSignUpButton = async () => {
        const check = await fb_signup(Email, Password);
        if (check) {
            console.log("signup");
        } else console.log("false");
    };

    const handleLoginButton = () => {
        navigation('/');
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  
    return (
        <Box sx={{
            maxWidth: 300,
            mx: 'auto',
            my: 5
        }}>
            <Typography 
                fontWeight={"bold"}
                fontSize={20}
            >
                サインアップ
            </Typography>

            <TextField
                sx={{ m: 1, width: '25ch'}}
                id="standard-basic"
                label="メールアドレス"
                variant="standard"
                onChange={text => {setEmail(text.target.value)}}
            />

            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={text => {setPassword(text.target.value)}}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Button
                variant="contained"
                sx={{mt: 2, width: 250}}
                onClick={handleSignUpButton}
            >
                サインアップ
            </Button>

            <Button
                variant="text" 
                sx={{mt: 2}}
                onClick={handleLoginButton}
            >
                アカウントをお持ちの場合
            </Button>
        </Box>
    );
}