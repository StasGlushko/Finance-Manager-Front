import { Navigate, useNavigate } from 'react-router-dom'
import { FC, useEffect } from 'react'

import { useActions } from '../hooks/useActions'

interface IProps {
	children: React.ReactNode
}

export const RequireAuth: FC<IProps> = ({ children }) => {
	const { fetchAuthMe } = useActions()
	const navigate = useNavigate()

	const token = window.localStorage.getItem('token')

	// if (token) {
	// 	fetchAuthMe(null)
	// } else {
	// 	return <Navigate to='/login' />
	// }

	useEffect(() => {
		if (token) {
			fetchAuthMe(null)
		} else {
			navigate('/login')
		}
	})

	return <>{children}</>
}
