import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "HOME",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	{
		title: "Students",
		path: "/students",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Lecture",
				path: "/students/lecture",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Exercice",
				path: "/students/exercice",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Chekpoint",
				path: "/students/chekpoint",
				icon: <IoIcons.IoIosPaper />,
			},

		],
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},

];
