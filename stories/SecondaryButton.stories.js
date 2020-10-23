import { action } from '@storybook/addon-actions';

import Button from '../src/components/SecondaryButton.svelte';

export default {
    title: 'Button/Secondary Button',
    component: Button
};

export const Default = () => ({
    Component: Button,
    on: {
        click: action('Clicked')
    }
})

export const Disabled = () => {
    return {
        Component: Button,
        on: {
            click: action('Clicked')
        },
        props: {
            disabled: true
        }
    }
}