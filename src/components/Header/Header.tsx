import { FC, useState } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { Button } from '@mui/material'

import { Paths } from '@/routing/paths'
import { useActions } from '@hooks/useActions'

export const Header: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const { logout } = useActions()

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		logout()
		setAnchorEl(null)
	}

	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	return (
		<header>
			
		</header>
	)
}
