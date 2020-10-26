import TopNavbar from '../src/components/TopNavbar.svelte';

export default {
    title: 'Navbar/Mobile Top Navbar',
    component: TopNavbar
};

const DefaultTemplate = (args) => ({
    Component: TopNavbar,
})

export const Default = DefaultTemplate.bind({})
Default.args = {

}
