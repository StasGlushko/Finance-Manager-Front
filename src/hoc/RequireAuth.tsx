import { useNavigate } from 'react-router-dom'
import { FC, useEffect } from 'react'

import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface IProps {
	children: React.ReactNode
}

export const RequireAuth: FC<IProps> = ({ children }) => {
	const { isAuth } = useTypedSelector(state => state.auth)
	const { fetchAuthMe } = useActions()
	const navigate = useNavigate()

	const token = window.localStorage.getItem('token')

	const authorize = () => {
		if (!isAuth) {
			if (token) {
				 fetchAuthMe(null)
			} else {
				navigate('/login')
			}
		}
	}

	useEffect(() => {
		authorize()
	}, [isAuth])

	return <>{children}</>
}
