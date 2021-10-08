import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "HOME",
	path: "/home",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "SingIn",
	// 	path: "/about-us/aim",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// {
	// 	title: "Our Vision",
	// 	path: "/about-us/vision",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// ],
},
// {
// 	title: "Students",
// 	path: "/students",
// 	icon: <IoIcons.IoIosPaper />,
// 	iconClosed: <RiIcons.RiArrowDownSFill />,
// 	iconOpened: <RiIcons.RiArrowUpSFill />,

// 	subNav: [
// 	{
// 		title: "Lecture",
// 		path: "/students/lecture",
// 		icon: <IoIcons.IoIosPaper />,
// 		cName: "sub-nav",
// 	},
// 	{
// 		title: "Exercice",
// 		path: "/students/exercice",
// 		icon: <IoIcons.IoIosPaper />,
// 		cName: "sub-nav",
// 	},
// 	{
// 		title: "Chekpoint",
// 		path: "/students/chekpoint",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	// {
// 	// 	title: "statistics",
// 	// 	path: "/students/statistics",
// 	// 	icon: <IoIcons.IoIosPaper />,
// 	// },
// 	],
// },

{
	title: "Teacher",
	path: "/teacher",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
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
		title: "Event 2",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
}
,
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},

];
