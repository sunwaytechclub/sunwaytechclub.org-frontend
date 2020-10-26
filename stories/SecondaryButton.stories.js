import { action } from '@storybook/addon-actions';

import Button from '../src/components/SecondaryButton.svelte';

export default {
    title: 'Button/Secondary Button',
    component: Button
};

const DefaultTemplate = (args) => ({
    Component: Button,
    on: {
        click: action('Clicked')
    },
    props: {
        disabled: args.disabled,
        style: "margin:1em;"
    }
})

export const Default = DefaultTemplate.bind({})
Default.args = {
    disabled: false
}
