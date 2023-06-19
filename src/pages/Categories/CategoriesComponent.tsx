import { FC } from 'react'
import { Outlet, NavigateFunction } from 'react-router-dom'

import s from './Categories.module.scss'
import { CategoriesCard } from '../../components/CategoriesCard/CategoriesCard'
import { Paths } from '../../routing/paths'
import { ICategoriesRes } from '../../types/Fetch.interface'
import { Container } from '../../ui/Layout/Container/Container'

interface IProps {
	navigate: NavigateFunction
	items: ICategoriesRes[]
	deleteCategory: (id: string) => void
}

export const CategoriesComponent: FC<IProps> = ({
	navigate,
	items,
	deleteCategory,
}) => (
	<Container>
		<h2 className={s.title}>Categories of expenditure/income</h2>
		{items.length > 0 ? (
			<>
				<ul className={s.titles}>
					<li
						style={{
							width: '18%',
						}}>
						title
					</li>
					<li
					// style={{
					// 	width: '18%',
					// }}
					>
						description
					</li>
				</ul>
				<ul className={s.listWrap}>
					{items.map(el => (
						<CategoriesCard
							key={el._id}
							info={el}
							navigate={navigate}
							deleteCategory={deleteCategory}
						/>
					))}
				</ul>
			</>
		) : (
			<div className={s.listWrap}>
				Categories are missing, create new categories
			</div>
		)}
		<button className={s.btn} onClick={() => navigate(Paths.addEdit)}>Add new category</button>
		<Outlet />
	</Container>
)
