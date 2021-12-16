import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

export default makeStyles(() =>
	createStyles({
		paper: {
			minHeight: 150,
			height: 'auto',
			marginBottom: 20,
			width: 800,
		},
		container: {
			display: 'flex',
			justifyContent: 'space-between',
			padding: 20,
		},
		viewsContainer: {
			width: '15%',
		},
		content: {
			width: '90%',
		},
		contentContainer: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		flex: {
			display: 'flex',
			paddingTop: 20,
			paddingRight: 30,
		},
		flexSpaced: {
			display: 'flex',
			justifyContent: 'flex-start',
		},
		icon: {
			marginRight: 5,
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
		text: {
			fontSize: 15,
			fontWeight: 700,
		},
		postDetails: {
			fontSize: 12,
			fontWeight: 40,
			color: '#a7a7a7',
		},
		awards: {
			display: 'flex',
		},
		thumbnail: {
			width: 400,
			height: 400,
			marginTop: 10,
		},
	}),
);
