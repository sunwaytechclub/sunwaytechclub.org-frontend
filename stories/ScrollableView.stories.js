import ScrollableView from "../src/components/ScrollableView.svelte";

export default {
	title: "ScrollableView/ScrollableView",
	component: ScrollableView,
};

const DefaultTemplate = (args) => ({
	Component: ScrollableView,
	props: {
		columnGap: args.columnGap,
		numDisplayItem: args.numDisplayItem,
	},
});

export const Default = DefaultTemplate.bind({});
Default.args = {
	columnGap: 20,
	numDisplayItem: 4,
};
