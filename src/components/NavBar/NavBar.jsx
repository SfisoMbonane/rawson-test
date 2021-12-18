import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

export default function PrimarySearchAppBar() {
	const menuId = 'primary-search-account-menu';

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				style={{ background: 'white', justifyContent: 'space-between' }}
			>
				<Toolbar
					style={{
						background: 'white',
						justifyContent: 'space-between',
						display: 'flex',
					}}
				>
					<img
						src='https://res.cloudinary.com/getspark/image/upload/v1639839757/download_c98cuv.png'
						alt='logo'
						style={{ width: 100 }}
					/>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder='Search Reddit'
						inputProps={{ 'aria-label': 'search google maps' }}
						style={{ background: '#f6f7f8' }}
						startAdornment={
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						}
					/>

					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
