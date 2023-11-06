import { FC } from 'react'
import { Link } from 'react-router-dom'

import s from '../Aside.module.scss'

import { ILink } from '../AsideContainer'

interface IProps {
	links: ILink[]
	standardSize: boolean
}

export const Nav: FC<IProps> = ({ links, standardSize }) => {
	return (
		<nav className={s.linkList}>
			{links.map(el => (
				<Link
					key={el.path}
					className={s.link + ' ' + (el.isActive ? s.active : '')}
					to={el.path}>
					<span>{el.icon}</span>
					{standardSize && el.text}
				</Link>
			))}
		</nav>
	)
}
