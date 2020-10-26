import { action } from "@storybook/addon-actions";

import SideNavbar from "../src/components/SideNavbar.svelte";

export default {
	title: "Navbar/Side Navbar",
	component: SideNavbar,
};

const DefaultTemplate = (args) => ({
	Component: SideNavbar,
	on: {
		click: action("Clicked"),
	},
	props: {
		collapseFeature: args.collapseFeature,
		name: args.name,
		memberType: args.memberType,
		navigations: args.navigations,
	},
});

export const Default = DefaultTemplate.bind({});
Default.args = {
	collapseFeature: false,
	name: "Anonymous Cute Cute Girl",
	memberType: "Premium Member",
	navigations: [
		{
			title: "Upcoming Events",
			path: "/event",
		},
		{
			title: "Past Events",
			path: "/event/past",
		},
		{
			title: "Merchandise Store",
			path: "/store",
		},
		{
			title: "Dashboard",
			path: "/dashboard",
		},
	],
};
