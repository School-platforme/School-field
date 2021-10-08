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
{
	title: "Admin Page",
	path: "/admin",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Add Teacher",
		path: "/admin/addteacher",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Teacher List",
		path: "/admin/teacherlist",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "School statistics",
		path: "/admin/schoolstate",
		icon: <IoIcons.IoIosPaper />,
	},
	// {
	// 	title: "statistics",
	// 	path: "/students/statistics",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	],
},

// {
// 	title: "Teacher",
// 	path: "/teacher",
// 	icon: <FaIcons.FaEnvelopeOpenText />,

// 	iconClosed: <RiIcons.RiArrowDownSFill />,
// 	iconOpened: <RiIcons.RiArrowUpSFill />,

// 	subNav: [
// 	{
// 		title: "Event 1",
// 		path: "/events/events1",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	{
// 		title: "Event 2",
// 		path: "/events/events2",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	],
// }
,
{
	title: "FeedBack",
	path: "/admin/feedback",
	icon: <FaIcons.FaPhone />,
},

];
