import { FC, useEffect, useState } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import { AiOutlineHome } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { GrTransaction } from 'react-icons/gr'

import { Paths } from '@/routing/paths'
import { AsideComponent } from './AsideComponent'
import { useLocation } from 'react-router-dom'
import { useActions } from '@hooks/useActions'

export interface ILink {
	path: string
	text: string
	icon: ReactJSXElement
	isActive: boolean
}

export const Aside: FC = () => {
	const [links, setLinks] = useState<ILink[]>([
		{
			path: Paths.home,
			text: 'Home',
			icon: <AiOutlineHome />,
			isActive: true,
		},
		{
			path: Paths.categories,
			text: 'Categories',
			icon: <BiCategory />,
			isActive: false,
		},
		{
			path: Paths.operations,
			text: 'Operations',
			icon: <GrTransaction />,
			isActive: false,
		},
	])

	const [standardSize, setStandardSize] = useState<boolean>(true)
	const toggleSize = (): void => {
		setStandardSize(!standardSize)
	}

	const { logout } = useActions()

	const logoutFn = (): void => {
		logout()
	}

	const activeIdEl = (): number => {
		return links.findIndex(el => el.isActive)
	}

	const location = useLocation()

	useEffect(() => {
		setLinks(links => {
			return links.map(el => {
				if (el.path === location.pathname) {
					el.isActive = true
				} else {
					el.isActive = false
				}
				return el
			})
		})
	}, [location])

	return (
		<AsideComponent
			links={links}
			logoutFn={logoutFn}
			activeIdEl={activeIdEl}
			toggleSize={toggleSize}
			standardSize={standardSize}
		/>
	)
}
