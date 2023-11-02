import { FC, useEffect, useState } from 'react'

import { Loader } from '../components/Loader/Loader'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface IProps {
	children: React.ReactNode
}

export const IsLoading: FC<IProps> = ({ children }) => {
	const {isLoading} = useTypedSelector(state => state.auth)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(isLoading)
	}, [isLoading])
	
   return loading ? <Loader /> : <>{children}</>
}
