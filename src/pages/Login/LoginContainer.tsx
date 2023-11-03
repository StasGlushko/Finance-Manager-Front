import { Navigate, useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { LoginComponent } from './LoginComponent'
import { useActions } from '@hooks/useActions'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { IUserLogin } from '@/types/UserAuth.interface'

export const Login: FC = () => {
	const { fetchLogin } = useActions()
	const { isAuth } = useTypedSelector(state => state.auth)
	const navigate = useNavigate()

	const formSubmit = (loginData: IUserLogin) => {
		const fetch = async () => {
			await fetchLogin(loginData)
			if (token || isAuth) {
				navigate('/')
			}
		}

		fetch()
	}
	const token = window.localStorage.getItem('token')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'all',
	})

	
	if (isAuth || token) {
		return <Navigate to='/' />
	}


	return (
		<LoginComponent
			formSubmit={formSubmit}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
		/>
	)
}
