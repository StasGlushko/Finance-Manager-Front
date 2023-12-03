import { FC } from 'react'

import { BiLogOut } from 'react-icons/bi'
import {
	TbLayoutSidebarLeftExpand,
	TbLayoutSidebarLeftCollapse,
} from 'react-icons/tb'

import s from './Aside.module.scss'

import { ILink } from './AsideContainer'
import { Nav } from './Nav/Nav'

interface IProps {
	activeIdEl: () => number
	logoutFn: () => void
	links: ILink[]
	toggleSize: () => void
	standardSize: boolean
}

export const AsideComponent: FC<IProps> = ({
	links,
	logoutFn,
	activeIdEl,
	standardSize,
	toggleSize,
}) => {
	return (
		<aside className={s.aside + ' ' + (!standardSize ? s.small : '')}>
			<div>
				<h3 className={s.title}>
					<span
						className={s.icon + ' ' + (!standardSize ? s.clickable : '')}
						onClick={() => !standardSize && toggleSize()}>
						{links[activeIdEl()].icon}
					</span>
					<span className={s.hide}>{links[activeIdEl()].text}</span>
					<button
						className={s.toggleShow + ' ' + s.hide}
						onClick={toggleSize}>
						{standardSize && <TbLayoutSidebarLeftCollapse />}
					</button>
				</h3>
				<Nav links={links} />
			</div>
			<button className={s.logoutBtn} onClick={logoutFn}>
				<span className={s.icon}>
					<BiLogOut />
				</span>
				<span className={s.hide}>logout</span>
			</button>
		</aside>
	)
}
