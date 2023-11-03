import { FC } from 'react'
import { Link } from 'react-router-dom'

import s from './Home.module.scss'
import { Paths } from '@/routing/paths'

export const Home: FC = () => {
	return (
		<div className={s.wrapper}>
			<h1>Your finance manager</h1>
			<Link to={Paths.categories}>
				<button className={s.btn}>
					Get started
				</button>
			</Link>
		</div>
	)
}
