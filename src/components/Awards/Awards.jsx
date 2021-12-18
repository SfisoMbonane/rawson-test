import React from 'react';
// @material-ui
import { Typography, Tooltip, Button } from '@mui/material';
// local
import useStyles from './styles';

const Awards = (awards) => {
	const classes = useStyles();
	const [showRemaining, setShowRemaining] = React.useState(false);

	const [showAwards, setShowAwards] = React.useState(
		awards.awards.data.all_awardings.slice(0, 4) || {},
	);

	const remainingItems = awards.awards.data.all_awardings.length - 4;

	const showAllAwards = () => {
		setShowAwards(awards.awards.data.all_awardings);
		setShowRemaining(true);
	};

	return (
		<div className={classes.flexSpaced}>
			{showAwards.map((n) => (
				<Tooltip
					key={n}
					classes={{
						tooltip: classes.customTooltip,
						arrow: classes.customArrow,
					}}
					title={
						<div className={classes.tooltipContent}>
							<img
								src={n.icon_url}
								alt='awards'
								className={classes.tootipIcon}
							/>
							<Typography align='center' className={classes.info}>
								{`${n.name} Award`}
							</Typography>
							<Typography align='center' className={classes.info}>
								{n.description}
							</Typography>
						</div>
					}
					placement='top'
					arrow
				>
					<div className={classes.flex}>
						<img
							src={n.icon_url}
							alt='awards'
							className={classes.icon}
						/>
						<Typography style={{ fontSize: 10, marginTop: 5 }}>
							{n.count}
						</Typography>
					</div>
				</Tooltip>
			))}
			{remainingItems > 0 && showRemaining === false ? (
				<Button
					size='small'
					onClick={showAllAwards}
					style={{ fontSize: 10 }}
				>{`& ${remainingItems} more`}</Button>
			) : null}
		</div>
	);
};

export default Awards;
