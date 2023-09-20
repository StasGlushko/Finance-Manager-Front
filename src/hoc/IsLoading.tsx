import { FC } from 'react'

import { Loader } from '../components/Loader/Loader'

interface IProps {
	children: React.ReactNode
}

export const IsLoading: FC<IProps> = ({ children }) => {
	const loading = false
	
   return loading ? <Loader /> : <>{children}</>
}
