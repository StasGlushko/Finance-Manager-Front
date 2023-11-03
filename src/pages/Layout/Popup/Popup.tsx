import s from './Popup.module.scss'
import { IoClose } from 'react-icons/io5'
import { FC } from 'react'
import * as React from 'react'
import { useNavigate, useMatches } from 'react-router-dom'
import { Paths } from '@/routing/paths'

interface IProps {
	children: React.ReactNode
}

export const Popup: FC<IProps> = ({ children }) => {
	const navigate = useNavigate()
	const matches = useMatches()

	const pathName = matches[1].pathname

	const closePopup: React.MouseEventHandler<
		HTMLButtonElement | HTMLDivElement
	> = () => {
		if (pathName === '/categories') {
			navigate(Paths.categories)
		} else if (pathName === '/operations') {
			navigate(Paths.operations)
		}
	}

	return (
		<div className={s.bg} onClick={closePopup}>
			<div
				onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
					e.stopPropagation()
				}
				className={s.popupContainer}>
				<button onClick={closePopup} className={s.close}>
					<IoClose />
				</button>

				{children}
			</div>
		</div>
	)
}
