import Accordion from "../src/components/Accordion.svelte";

export default {
	title: "Accordion/Accordion",
	component: Accordion,
};

const DefaultTemplate = (args) => ({
	Component: Accordion,
	props: {
		name: args.name,
		expand: args.expand,
		disabled: args.disabled,
		rotate: args.rotate,
		group: args.group,
	},
});

export const Default = DefaultTemplate.bind({});
Default.args = {
	name: "Panel 1",
	expand: false,
	disabled: false,
	rotate: true,
	group: "",
};
