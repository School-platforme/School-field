import React from "react";
import { Link } from "react-router-dom";


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';



const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 350,
	[theme.breakpoints.down('sm')]: {
		width: '100% !important', // Overrides inline-style
		height: 300,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}));

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));

export const HOME = () => {
	return (
		<>
			<br />

			<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>

				<ImageButton

					focusRipple

					style={{
						width: "33.3333333%",
					}}
				>
					<ImageSrc style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-XpPrCe0ZWbkVIi6q5Zhmt_c55pBr-W-MA&usqp=CAU")` }} />
					<ImageBackdrop className="MuiImageBackdrop-root" />
					<Image>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							sx={{
								position: 'relative',
								p: 4,
								pt: 2,
								pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
							}}
						>
							<Link
								className="link1"
								to="/student/singin"
							>Student</Link>
							<ImageMarked className="MuiImageMarked-root" />
						</Typography>
					</Image>
				</ImageButton>
				<ImageButton

					focusRipple

					style={{
						width: "33.3333333%",
					}}
				>
					<ImageSrc style={{ backgroundImage: `url("https://st2.depositphotos.com/1002277/5515/i/600/depositphotos_55150353-stock-photo-admin-cubics.jpg")` }} />
					<ImageBackdrop className="MuiImageBackdrop-root" />
					<Image>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							sx={{
								position: 'relative',
								p: 4,
								pt: 2,
								pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
							}}
						>
							<Link
								className="link1"
								to="/Admin/singin"
							>Admin </Link>
							<ImageMarked className="MuiImageMarked-root" />
						</Typography>
					</Image>
				</ImageButton>
				<ImageButton

					focusRipple

					style={{
						width: "33.3333333%",
					}}
				>
					<ImageSrc style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT-noGFNdfkvTv-bVx2vHT8Bgt7bAKzUjvQ&usqp=CAU")` }} />
					<ImageBackdrop className="MuiImageBackdrop-root" />
					<Image>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							sx={{
								position: 'relative',
								p: 4,
								pt: 2,
								pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
							}}
						>
							<Link
								className="link1"
								to="/teacher/singin"
							>Teacher</Link>
							<ImageMarked className="MuiImageMarked-root" />
						</Typography>
					</Image>
				</ImageButton>
			</Box>
		</>
	);
}



