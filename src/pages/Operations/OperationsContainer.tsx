import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { OperationsComponent } from './OperationsComponent'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'

export const Operations: FC = () => {
	const { fetchOperations, fetchDeleteOperations, fetchCategoriesName } =
		useActions()
	const { auth, operations, categories } = useTypedSelector(state => state)
	const navigate = useNavigate()

	const deleteOperation = (id: string): void => {
		fetchDeleteOperations(id)
	}

	const token = window.localStorage.getItem('token')

	useEffect(() => {
		const fetch = async () => {
			if ((auth.isAuth || token) && operations.items.length === 0)
				await fetchOperations(null)
			await fetchCategoriesName(null)
		}
		fetch()
	}, [fetchOperations, token])

	return (
		<OperationsComponent
			navigate={navigate}
			items={operations.items}
			deleteOperation={deleteOperation}
		/>
	)
}
