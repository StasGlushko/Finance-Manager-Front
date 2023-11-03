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
import { useActions } from '@/hooks/useActions'

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
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							<Link to={Paths.home}>Finance Manager</Link>
						</Typography>
						<Link to={Paths.categories}>
							<Button sx={{ color: 'white', display: 'block' }}>
								Categories
							</Button>
						</Link>
						<Link to={Paths.operations}>
							<Button sx={{ color: 'white', display: 'block' }}>
								Operations
							</Button>
						</Link>
						<Link to={Paths.reports}>
							<Button sx={{ color: 'white', display: 'block' }}>
								Reports
							</Button>
						</Link>

						<div>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'>
								<AccountCircle />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleCloseMenu}>
								<Link to={Paths.login}>
									<MenuItem
										style={{ color: 'black' }}
										onClick={handleClose}>
										Logout
									</MenuItem>
								</Link>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</header>
	)
}
