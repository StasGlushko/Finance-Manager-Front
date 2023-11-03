import { FC, useEffect } from 'react'

import { SelectChangeEvent } from '@mui/material'

import { PieInfoComponent } from './PieInfoComponent'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'

type item = {
	name: string
	sum: string | number
}

interface IProps {
	items: item[] | undefined
}

export const PieInfo: FC<IProps> = ({ items }) => {
	if (!items) return null

	const { from, to, fromItems, toItems } = useTypedSelector(state => state.reports)
	const { operations } = useTypedSelector(state => state)
	const { changeTo, changeFrom, getDates } = useActions()

	// rgb
	const randomRgb = (): string => {
		const num = Math.round(0xffffff * Math.random())
		const r = num >> 16
		const g = (num >> 8) & 255
		const b = num & 255
		return 'rgb(' + r + ', ' + g + ', ' + b + ')'
	}

	const getRgb = (): string[] => {
		return items.map(() => randomRgb())
	}

	const rgb = getRgb()
	//

	// date

	const handleChangeTo = (e: SelectChangeEvent) => {
		changeTo(e.target.value as string)
	}

	const handleChangeFrom = (e: SelectChangeEvent) => {
		changeFrom(e.target.value as string)
	}

	useEffect(() => {
		getDates(operations.items)
	}, [operations.items])

	return (
		<PieInfoComponent
			items={items}
			rgb={rgb}
			from={from}
			to={to}
			fromItems={fromItems}
			toItems={toItems}
			handleChangeTo={handleChangeTo}
			handleChangeFrom={handleChangeFrom}
		/>
	)
}
