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

		],
	},
	{
		title: "FeedBack",
		path: "/admin/feedback",
		icon: <FaIcons.FaPhone />,
	},

];
