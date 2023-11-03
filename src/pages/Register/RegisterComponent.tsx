import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import * as React from 'react'
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

import s from './Register.module.scss'
import { IUserReg } from '@/types/UserAuth.interface'

interface IProps {
	formSubmit: (user: IUserReg) => void
	register: UseFormRegister<{
		userName: string
		email: string
		password: string
	}>
	handleSubmit: UseFormHandleSubmit<
		{
			userName: string
			email: string
			password: string
		},
		undefined
	>
	errors: FieldErrors<{
		userName: string
		email: string
		password: string
	}>
}

export const RegisterComponent: FC<IProps> = ({
	formSubmit,
	register,
	handleSubmit,
	errors,
}) => {
	// Password set show
	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword(show => !show)
	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault()
	}

	return (
		<div className={s.container}>
			<form onSubmit={handleSubmit(formSubmit)}>
				<h2>Register</h2>
				<FormControl sx={{ mt: 1, width: '100%' }}>
					<TextField
						id='user-name'
						required
						label='Username'
						error={Boolean(errors.userName?.message)}
						helperText={errors.userName?.message}
						{...register('userName', {
							required: 'Вкажіть свій нікнейм',
						})}
					/>
				</FormControl>
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
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						{...register('password', {
							required: 'Не правильно уведений пароль',
						})}
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
					<Link to='/login'>
						<FormControl sx={{ mt: 2, width: '49%' }}>
							<Button variant='outlined'>Login</Button>
						</FormControl>
					</Link>
					<FormControl sx={{ mt: 2, ml: 1, width: '49%' }}>
						<Button
							type='submit'
							variant='contained'
							style={{ boxShadow: 'none' }}>
							Register
						</Button>
					</FormControl>
				</div>
			</form>
		</div>
	)
}
