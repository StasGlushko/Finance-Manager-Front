import { FC } from 'react'
import { NavigateFunction } from 'react-router-dom'

import s from './OperationsCard.module.scss'
import { Paths } from '../../routing/paths'
import { IOperationsRes } from '@/types/Fetch.interface'

interface IProps {
	info: IOperationsRes
	navigate: NavigateFunction
	deleteOperation: (id: string) => void
}

export const OperationsCard: FC<IProps> = ({
	info,
	navigate,
	deleteOperation,
}) => (
	<li className={s.card}>
		<div className={s.nameCategories}>{info.nameCategories}</div>
		<div className={s.typeOperations}>{info.typeOperations}</div>
		<div className={s.sum}>
			{info.sum}
			{info.sum > 999 ? <span className={s.showSum}>{info.sum}</span> : null}
		</div>
		<div className={s.description}>{info.description}</div>
		<div className={s.date}>{info.date}</div>
		<button
			onClick={() => navigate(`${Paths.addEdit}/${info._id}`)}
			className={s.editButton}>
			Edit
		</button>
		<button
			onClick={() => deleteOperation(info._id)}
			className={s.deleteButton}>
			Delete
		</button>
	</li>
)
