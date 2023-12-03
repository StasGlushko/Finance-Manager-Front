import { FC } from 'react'
import { Link } from 'react-router-dom'

import s from '../Aside.module.scss'

import { ILink } from '../AsideContainer'

interface IProps {
	links: ILink[]
}

export const Nav: FC<IProps> = ({ links }) => {
	return (
		<nav className={s.linkList}>
			{links.map(el => (
				<Link
					key={el.path}
					className={s.link + ' ' + (el.isActive ? s.active : '')}
					to={el.path}>
					<span>{el.icon}</span>
					<span className={s.hide}>{el.text}</span>
				</Link>
			))}
		</nav>
	)
}
