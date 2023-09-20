import { FC, useEffect } from 'react'

import { ReportsComponent } from './ReportsComponent'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IOperationsRes } from '../../types/Fetch.interface'

export const Reports: FC = () => {
	const { fetchCategoriesName, fetchOperations } = useActions()
	const { categories, operations } = useTypedSelector(state => state)

	useEffect(() => {
		if (categories.categoriesName.length === 0) {
			fetchCategoriesName(null)
		}
		if (operations.items.length === 0) {
			fetchOperations(null)
		}
	}, [])

	const items = categories.categoriesName.map(el => {
		const name = el

		const sum = (items: IOperationsRes[]): number =>
			items.reduce<number>((acc: number, item: IOperationsRes) => {
				if (item.nameCategories === name) {
					return (acc += Number(item.sum))
				}

				return acc
			}, 0)

		return {
			name,
			sum: sum(operations.items),
		}
	})

	return <ReportsComponent items={items} />
}
