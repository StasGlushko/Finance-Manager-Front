import { FC } from 'react'

import s from './Container.module.scss'

interface IProps {
	children: React.ReactNode
}

export const Container: FC<IProps> = ({ children }) => {
	return <div className={s.container}>{children}</div>
}
