import React from 'react';
import axios from 'axios';
// @material-ui
import { Paper, Typography, Chip, Button } from '@mui/material';
// @icons
import {
	ThumbDownOffAltOutlined as ThumbDownOffAltOutlinedIcon,
	ThumbUpOutlined as ThumbUpOutlinedIcon,
	ChatBubbleOutline as ChatBubbleOutlineIcon,
	ReplyOutlined as ReplyOutlinedIcon,
	BookmarkBorderOutlined as BookmarkBorderOutlinedIcon,
	MoreHorizOutlined as MoreHorizOutlinedIcon,
	Add as AddIcon,
} from '@mui/icons-material';
// @components
import { intToString } from '../Utilities/converter';
import Awards from '../Awards/Awards';
// local
import useStyles from './styles';

const MainView = () => {
	const classes = useStyles();
	const [data, setData] = React.useState([]);
	const baseURL = 'https://reddit.com/.json';

	const fetchData = async () => {
		try {
			const response = await axios
				.get(`https://cors-anywhere.herokuapp.com/${baseURL}`)
				.then((response) => {
					setData(response.data.data.children);
				});
			return response;
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	const isUrl = (s) => {
		var regexp =
			/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&*+,;=.]+$/;

		return regexp.test(s);
	};

	return (
		<div>
			{data &&
				data.map((n) => (
					<Paper className={classes.paper} key={n.data.id}>
						<div className={classes.container}>
							<div className={classes.viewsContainer}>
								<ThumbUpOutlinedIcon />
								<Typography
									style={{ fontSize: 15, fontWeight: 700 }}
								>
									{intToString(n.data.ups)}
								</Typography>
								<ThumbDownOffAltOutlinedIcon />
							</div>

							<div className={classes.content}>
								<div className={classes.contentContainer}>
									<Typography
										style={{
											fontSize: 15,
											fontWeight: 700,
										}}
									>
										{n.data.subreddit_name_prefixed}
										<span className={classes.postDetails}>
											{` -
										Posted by u/${n.data.author} 10 hours
										ago`}
										</span>
									</Typography>

									<div className={classes.awards}>
										<Awards awards={n} />
									</div>
								</div>

								<div className={classes.flex}>
									<div>
										<Typography
											style={{
												fontSize: 20,
												fontWeight: 700,
											}}
										>
											{n.data.title}
										</Typography>
										<Typography
											style={{
												fontSize: 13,
												marginTop: 10,
											}}
										>
											{n.data.selftext}
										</Typography>
									</div>

									{n.data.link_flair_text ? (
										<Chip
											label={n.data.link_flair_text}
											style={{
												background: `${n.data.link_flair_background_color}`,
												marginLeft: 10,
												color: 'white',
											}}
										/>
									) : null}
								</div>

								<div>
									{n.data.is_video === true ? (
										<video
											width='90%'
											height='50%'
											controls
										>
											<source
												src={
													n.data.secure_media
														.reddit_video
														.scrubber_media_url
												}
												type='video/mp4'
											/>
										</video>
									) : isUrl(n.data.thumbnail) ? (
										<img
											src={n.data.thumbnail}
											className={classes.thumbnail}
											alt='thumbnail'
										/>
									) : null}
								</div>
								<div className={classes.flexSpaced}>
									<div className={classes.flex}>
										<ChatBubbleOutlineIcon
											className={classes.icon}
										/>
										<Typography>
											{intToString(n.data.num_comments)}{' '}
											Comments
										</Typography>
									</div>

									<div className={classes.flex}>
										<ReplyOutlinedIcon
											className={classes.icon}
										/>
										<Typography>Share</Typography>
									</div>

									<div className={classes.flex}>
										<BookmarkBorderOutlinedIcon
											className={classes.icon}
										/>
										<Typography>Save</Typography>
									</div>

									<div className={classes.flex}>
										<MoreHorizOutlinedIcon />
									</div>
								</div>
							</div>
							<div>
								<Button
									variant='contained'
									startIcon={<AddIcon />}
									size='small'
									style={{ fontSize: 10 }}
								>
									Join
								</Button>
							</div>
						</div>
					</Paper>
				))}
		</div>
	);
};

export default MainView;
