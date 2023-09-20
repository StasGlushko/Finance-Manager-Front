import { FC } from 'react'

import s from './Loading.module.scss'

export const Loading: FC = () => {
	return (
		<div className={s.center}>
		  <div className={s.box}>
  			<div className={s.container}>
  				<span className={s.circle}></span>
  				<span className={s.circle}></span>
  				<span className={s.circle}></span>
  				<span className={s.circle}></span>
  			</div>
  		</div>
		</div>
	)
}
