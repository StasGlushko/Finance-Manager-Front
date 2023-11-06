import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import s from './Root.module.scss'

import { Header } from '@components/Header/Header'
import { Aside } from '@/components/Aside/AsideContainer'

export const Root: FC = () => {
	return (
		<div className={s.container}>
			<Aside />
			<div className={s.content}>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
