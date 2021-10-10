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
		title: "Teacher",
		path: "/teacher",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

	},	
			{
				title: "Add Student",
				path: "/teacher/addstudent",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Add Lecture ",
				path: "/teacher/lecture",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Add Exercice",
				path: "/teacher/exercice",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Add Checkpoint",
				path: "/teacher/checkpoint",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Student statistics",
				path: "/teacher/studentstatistic",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "add somthing here",
				path: "/teacher/somthing",
				icon: <IoIcons.IoIosPaper />,
			},
		
	
	
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},

];
