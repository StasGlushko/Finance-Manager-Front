import { useEffect, FC } from 'react'

import { CategoriesComponent } from './CategoriesComponent'
import { useActions } from '@hooks/useActions'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'

export const Categories: FC = () => {
	const { fetchCategories, fetchDeleteCategories } = useActions()
	const { auth, categories } = useTypedSelector(state => state)
	const navigate = useNavigate()

	const deleteCategory = (id: string): void => {
		fetchDeleteCategories(id)
	}

	const token = window.localStorage.getItem('token')

	useEffect(() => {
		const fetch = async () => {
			if (auth.isAuth || token) await fetchCategories(null)
		}
		if (categories.items.length === 0) fetch()
	}, [fetchCategories, token])

	return (
		<CategoriesComponent
			navigate={navigate}
			items={categories.items}
			deleteCategory={deleteCategory}
		/>
	)
}
