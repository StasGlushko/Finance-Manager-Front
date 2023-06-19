import { Pie } from 'react-chartjs-2'
import { FC } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import s from './PieInfo.module.scss'

type item = {
	name: string
	sum: string | number
}

interface itemToFrom {
	date: string
	msDate: string
	isActive: {
		active: boolean
		is: 'to' | 'from' | ''
	}
}

interface IProps {
	items: item[] | undefined
	rgb: string[]
	from: string
	to: string
	fromItems: itemToFrom[] | []
	toItems: itemToFrom[] | []
	handleChangeTo: (e: SelectChangeEvent) => void
	handleChangeFrom: (e: SelectChangeEvent) => void
}

export const PieInfoComponent: FC<IProps> = ({
	items,
	rgb,
	from,
	to,
	toItems,
	fromItems,
	handleChangeTo,
	handleChangeFrom,
}) => (
	<div className={s.container}>
		<div className={s.wrapper}>
			<div className={s.fromToWrap}>
				<FormControl sx={{ minWidth: 300 }} size='small'>
					<InputLabel id='demo-simple-select-label'>from</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={from}
						label='from'
						onChange={handleChangeFrom}>
						{fromItems.map(el => (
							<MenuItem value={el.date}>{el.date}</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl sx={{ minWidth: 300 }} size='small'>
					<InputLabel id='demo-simple-select-label'>to</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={to}
						label='to'
						onChange={handleChangeTo}>
						{toItems.map(el => (
							<MenuItem value={el.date}>{el.date}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<Pie
				className={s.circle}
				data={{
					labels:
						items &&
						items.map(el => {
							if (Number(el.sum) > 0) return el.name
						}),
					datasets: [
						{
							label: 'My First Dataset',
							data:
								items &&
								items.map(el => {
									if (Number(el.sum) > 0) return el.sum
								}),
							backgroundColor: rgb,
							hoverOffset: 4,
						},
					],
				}}
			/>
			<ul className={s.info}>
				{items &&
					items.map((el, i) => {
						return (
							<li key={i}>
								{el.name}: {el.sum}$
								<span
									style={{
										display: 'inline-block',
										width: 30,
										height: 12,
										backgroundColor: rgb.at(i),
										marginLeft: 10,
									}}
								/>
							</li>
						)
					})}
			</ul>

			<div className={s.totalSum}>
				<div className={s.wrap}>
					Total sum:{' '}
					{items && items.reduce((acc, el) => (acc += Number(el.sum)), 0)}$
				</div>
			</div>
		</div>
	</div>
)
