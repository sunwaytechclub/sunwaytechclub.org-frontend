import TopNavbar from '../src/components/TopNavbar.svelte';

export default {
    title: 'Navbar/Mobile Top Navbar',
    component: TopNavbar,
    argTypes: {
        navigations: {
            name: 'Navigations',
            description: 'An array of all the navigation section paths'
        }
    }
};

const DefaultTemplate = (args) => ({
    Component: TopNavbar,
    props: {
        expand: args.expand,
        navigations: args.navigations
    }
})

export const Default = DefaultTemplate.bind({})
Default.args = {
    expand: false,
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
            path: "/stores",
        },
        {
            title: "My Profile",
            path: "/profile",
        },
    ]
}
