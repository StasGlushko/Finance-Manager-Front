import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

import s from './Login.module.scss'
import { IUserLogin } from '@/types/UserAuth.interface'

interface IProps {
	formSubmit: (loginData: IUserLogin) => void
	register: UseFormRegister<{
		email: string
		password: string
	}>
	handleSubmit: UseFormHandleSubmit<
		{
			email: string
			password: string
		},
		undefined
	>
	errors: FieldErrors<{
		email: string
		password: string
	}>
}

export const LoginComponent: FC<IProps> = ({
	formSubmit,
	register,
	handleSubmit,
	errors,
}) => {
	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
	}

	return (
		<div className={s.container}>
			<form onSubmit={handleSubmit(formSubmit)}>
				<h2>Login</h2>
				<FormControl sx={{ mt: 1, width: '100%' }}>
					<TextField
						id='e-mail'
						required
						label='Email'
						error={Boolean(errors.email?.message)}
						helperText={errors.email?.message}
						{...register('email', {
							required: 'Вкажіть свою електронну пошту',
						})}
					/>
				</FormControl>
				<FormControl
					required
					error={Boolean(errors.password?.message)}
					sx={{ mt: 1, width: '100%' }}>
					<InputLabel required htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						{...register('password', {
							required: 'Не правильно уведений пароль',
						})}
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<div className={s.footer}>
					<Link to='/register'>
						<FormControl sx={{ mt: 2, width: '49%' }}>
							<Button variant='outlined'>Register</Button>
						</FormControl>
					</Link>
					<FormControl sx={{ mt: 2, ml: 1, width: '49%' }}>
						<Button
							type='submit'
							variant='contained'
							style={{ boxShadow: 'none' }}>
							Login
						</Button>
					</FormControl>
				</div>
			</form>
		</div>
	)
}
