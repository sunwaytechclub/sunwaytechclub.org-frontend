import Breadcrumb from '../src/components/Breadcrumb.svelte';

export default {
    title: 'Header/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        paths: {
            name: 'Paths',
            description: 'An array of all the breadcrumbs in path'
        }
    }
};

const DefaultTemplate = (args) => ({
    Component: Breadcrumb,
    props: {
        paths: args.paths
    }
})

export const Default = DefaultTemplate.bind({})
Default.args = {
    paths: [
        {
            title: "Past Events",
            path: "/event",
        },
        {
            title: "AGM",
            path: "/event/1",
        },
    ]
}
