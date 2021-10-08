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
  
  export const HOME=() =>{
	return (
		<>
		<br/>
		
	  <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
	
		 <ImageButton
				
				focusRipple
				
				style={{
				  width: "33.3333333%",
				}}
			  >
				<ImageSrc style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }} />
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
					to ="/student/singin"
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
					to ="/Admin/singin"
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
				<ImageSrc style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }} />
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
					to ="/teacher/singin"
					>Teacher</Link>
					<ImageMarked className="MuiImageMarked-root" />
				  </Typography>
				</Image>
			  </ImageButton>		
		   </Box>
		   </>
  );
}



    