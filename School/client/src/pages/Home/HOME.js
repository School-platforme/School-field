import React from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 350,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 300,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export const HOME = () => {
  return (
    <>
    

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // marginTop: "155px",
          Width: "100%",
        }}
      >
        <ImageButton
          focusRipple
          style={{
            width: "33.33333%",
            height: "730px",
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url("https://news.cgtn.com/news/3d63444e314d7a4d7951444f79556a4e7941444f31457a6333566d54/img/15917604eb8f47739afc5062c0f6834e/15917604eb8f47739afc5062c0f6834e.jpeg")`,
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              <Link className="link1" to="/student/singin">
                Student
              </Link>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "33.3333333%",
            height: "730px",
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url("https://www.iae-bordeaux.fr/application/files/8315/9412/2280/Article_Master_Management_Administration_Entreprises_960x540.jpg")`,
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              <Link className="link1" to="/Admin/singin">
                Admin{" "}
              </Link>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "33.3333333%",
            height: "730px",
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url("https://www.teachaway.com/sites/default/files/styles/header_image_1200/public/2020-04/shutterstock_1283704207.png?itok=lmxKa3qt")`,
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              <Link className="link1" to="/teacher/singin">
                Teacher
              </Link>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
  
    </>
  );
};
