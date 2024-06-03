'use client'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FC, useState } from "react"
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC = (props: LoginFormProps) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleClickShowPassword = () => setIsShowPassword(!isShowPassword);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
  };


    return (
        <Box
        component="form"
        sx={{
            'MuiBox-root': {
                width: '100%',
            },
          '& .MuiTextField-root': { m: 1, width: '100%', margin: '0' },
          '& button': {
            float: 'right',
            background: '#7f977f'
        }
        }}
        noValidate
        autoComplete="off"
      >
        <div className={cls.loginForm}>
        <Typography variant="h4" component="h4" color={'#dee8cf'}>
            h1. Heading
        </Typography>
            <TextField
                required
                id="outlined-required"
                label="Логин"
                placeholder="Введите логин"
            />
            <TextField
                id="outlined-adornment-password"
                type={isShowPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }}
                label="Password"
                placeholder="Пароль"
            />
            <Button className={cls.loginFormButton} variant="contained">Войти</Button>
        </div>
      </Box>
        
    )
}