import Breadcrumb from '../src/components/Breadcrumb.svelte';

export default {
    title: 'Navbar/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        navigations: {
            name: 'Breadcrumbs',
            description: 'An array of all the breadcrumbs in path'
        }
    }
};

const DefaultTemplate = (args) => ({
    Component: Breadcrumb,
    props: {

    }
})

export const Default = DefaultTemplate.bind({})
Default.args = {

}
