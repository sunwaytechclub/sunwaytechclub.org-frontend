import { action } from "@storybook/addon-actions";

import SearchField from "../src/components/SearchField.svelte";

export default {
	title: "Search Field/Search Field",
	component: SearchField,
};

const DefaultTemplate = (args) => ({
	Component: SearchField,
	on: {
		message: action("Message"),
	},
	props: {
		data: args.data,
		fields: args.fields,
		field_id: args.field_id,
		placeholder: args.placeholder,
	},
});

export const Default = DefaultTemplate.bind({});
Default.args = {
	data: [
		{
			_id: "00001",
			eventName: "Excel Workshop",
		},
		{
			_id: "00002",
			eventName: "Python Workshop",
		},
		{
			_id: "00003",
			eventName: "HacktoberFest 2020",
		},
	],
	fields: ["eventName"],
	field_id: "_id",
	placeholder: "Looking for an event",
};
