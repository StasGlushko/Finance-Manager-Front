import { FC } from 'react'
// import { Line, Pie } from 'react-chartjs-2'

import s from './Reports.module.scss'
import { Container } from '../../ui/Layout/Container/Container'
import { PieInfo } from '../../components/PieInfo/PieInfoContainer';

interface IProps {
	items:
		| {
				name: string
				sum: string | number
		  }[]
		| undefined
}

export const ReportsComponent: FC<IProps> = ({ items }) => (
	<Container>
		<h2 className={s.title}>Reports page</h2>

		<PieInfo items={items} />
	</Container>
)
