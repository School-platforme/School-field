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
      <br />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          marginTop: "95px",
        }}
      >
        <ImageButton
          focusRipple
          style={{
            width: "33.3333333%",
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
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url("https://i.cbc.ca/1.5433493.1579546014!/fileImage/httpImage/oakridge-secondary-school.jpg")`,
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
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url("https://impacttutors.co.uk/blog/wp-content/uploads/2018/05/secondary-school-image-final-2.jpg")`,
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
