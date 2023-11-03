import { FC } from 'react'
import { Outlet, NavigateFunction } from 'react-router-dom'

import s from './Operations.module.scss'
import { OperationsCard } from '@components/OperationsCard/OperationsCard'
import { Paths } from '@/routing/paths'
import { IOperationsRes } from '@/types/Fetch.interface'
import { Container } from '@pages/Layout/Container/Container';

interface IProps {
	navigate: NavigateFunction
	items: IOperationsRes[]
	deleteOperation: (id: string) => void
}

export const OperationsComponent: FC<IProps> = ({
	navigate,
	items,
	deleteOperation,
}) => (
	<Container>
		<h2 className={s.title}>Operations</h2>
		{items.length > 0 ? (
			<>
				<ul className={s.titles}>
					<li style={{
						width: '18%'
					}}>Category</li>
					<li style={{
						width: '10.5%'
					}}>Type</li>
					<li style={{
						width: '5.5%'
					}}>Sum</li>
					<li style={{
						width: '33.5%'
					}}>Description</li>
					<li>Date</li>
				</ul>
				<ul className={s.listWrap}>
					{items.map(el => (
						<OperationsCard
							key={el._id}
							info={el}
							navigate={navigate}
							deleteOperation={deleteOperation}
						/>
					))}
				</ul>
			</>
		) : (
			<div className={s.listWrap}>
				Operations are missing, create new operations
			</div>
		)}
		<button className={s.btn} onClick={() => navigate(Paths.addEdit)}>Add new operation</button>
		<Outlet />
	</Container>
)
