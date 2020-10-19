/*
 Global router, see routes.sample.js if you would like to create new routes in folder.
*/
import Navaid from "navaid";
import EventRouter from '@/units/event/routes'
import ProfileRouter from '@/units/profile/routes'

const router = Navaid("/");

// Add first-level folder routers here
[
    ...EventRouter('/event'),
    ...ProfileRouter('/profile')
].map(route => {
    router.on(route[0], route[1])
})


export default router