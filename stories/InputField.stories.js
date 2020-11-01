import InputField from "../src/components/InputField.svelte";

export default {
	title: "InputField/InputField",
	component: InputField,
};

const DefaultTemplate = (args) => ({
	Component: InputField,
	props: {
		label: args.label,
		labelStyle: args.labelStyle,
	},
});

export const Default = DefaultTemplate.bind({});
Default.args = {
	label: "Name",
	labelStyle: "width: 420px",
};
