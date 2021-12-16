import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

export default makeStyles(() =>
	createStyles({
		flex: {
			display: 'flex',
			marginRight: 10,
		},
		flexSpaced: {
			display: 'flex',
			justifyContent: 'flex-start',
		},
		icon: {
			width: 15,
			height: 15,
			marginRight: 5,
			marginTop: 5,
		},
		customTooltip: {
			width: '250px',
			background: 'white',
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
		},
		customArrow: {
			color: 'white',
		},
		awardIcon: {
			width: 15,
			height: 15,
			marginRight: 5,
		},
		iconContainer: {
			display: 'flex',
			marginRight: 10,
		},
		info: {
			color: '#0f325c',
		},
		tootipIcon: {
			width: 50,
			height: 50,
			marginRight: 5,
			marginTop: 5,
			marginBottom: 10,
		},
		tooltipContent: {
			background: 'white',
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
		},
	}),
);
