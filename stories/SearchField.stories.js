import { action } from "@storybook/addon-actions";

import SearchField from "../src/components/SearchField.svelte";

export default {
	title: "Search Field",
	component: SearchField,
};

const DefaultTemplate = (args) => ({
	Component: SearchField,
	on: {
		click: action("Clicked"),
	},
	props: {},
});

export const Default = DefaultTemplate.bind({});
Default.args = {};
