import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Navigate } from 'react-router-dom'

import { RegisterComponent } from './RegisterComponent'
import { IUserReg } from '@/types/UserAuth.interface'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export const Register: FC = () => {
	const { fetchRegister } = useActions()
	const { isAuth } = useTypedSelector(state => state.auth)
	const navigate = useNavigate()
	const token = window.localStorage.getItem('token')

	const formSubmit = (value: IUserReg) => {
		const fetch = async () => {
			await fetchRegister(value)
			if (token || isAuth) {
				navigate('/')
			}
		}

		fetch()
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			userName: '',
			email: '',
			password: '',
		},
		mode: 'all',
	})

	if (isAuth || token) {
		return <Navigate to='/' />
	}

	return (
		<RegisterComponent
			formSubmit={formSubmit}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
		/>
	)
}
