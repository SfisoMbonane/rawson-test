import React from 'react';
// @components
import MainView from './components/Main/Main.jsx';
import NavBar from './components/NavBar/NavBar';
// @local
import useStyles from './styles';

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div style={{ position: 'sticky' }}>
				<NavBar />
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<MainView />
			</div>
		</div>
	);
};

export default App;
