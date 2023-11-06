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

// добавити зменшення збільшення aside bar іконки - 'TbLayoutSidebarLeftExpand' 'TbLayoutSidebarLeftCollapse'

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
					{standardSize && links[activeIdEl()].text}
					<button className={s.toggleShow} onClick={toggleSize}>
						{standardSize && <TbLayoutSidebarLeftCollapse />}
					</button>
				</h3>
				<Nav links={links} standardSize={standardSize} />
			</div>
			<button className={s.logoutBtn} onClick={logoutFn}>
				<span>
					<BiLogOut />
				</span>
				{standardSize && 'Logout'}
			</button>
		</aside>
	)
}
