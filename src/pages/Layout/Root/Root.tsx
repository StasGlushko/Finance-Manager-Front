import { Outlet } from 'react-router-dom'
import { Header } from '@components/Header/Header';
import { FC } from 'react';

export const Root: FC = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
