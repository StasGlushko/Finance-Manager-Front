import { FC } from 'react'
import { NavigateFunction } from 'react-router-dom'

import s from './CategoriesCard.module.scss'
import { Paths } from '../../routing/paths'
import { ICategoriesRes } from '../../types/Fetch.interface'

interface IProps {
	info: ICategoriesRes
	navigate: NavigateFunction
	deleteCategory: (id: string) => void
}

export const CategoriesCard: FC<IProps> = ({
	info,
	navigate,
	deleteCategory,
}) => (
	<li className={s.card}>
		<div className={s.title}>{info.title}</div>
		<div className={s.description}>{info.description}</div>
		<button
			className={s.editButton}
			onClick={() => navigate(`${Paths.addEdit}/${info._id}`)}>
			Edit
		</button>
		<button
			onClick={() => deleteCategory(info._id)}
			className={s.deleteButton}>
			Delete
		</button>
	</li>
)
