import { Navigate } from 'react-router-dom'

import { useActions } from '../hooks/useActions'

interface IProps {
	children: React.ReactNode
}

export const RequireAuth = ({ children }: IProps) => {
	const { fetchAuthMe } = useActions()

	const token = window.localStorage.getItem('token')

	if (token) {
		fetchAuthMe(null)
	} else {
		return <Navigate to='/login' />
	}

	return <>{children}</>
}
