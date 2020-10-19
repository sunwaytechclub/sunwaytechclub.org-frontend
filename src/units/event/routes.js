import run from "@/utils/run";
import Router from "@/utils/generateRouter";

let ROUTES = [
    // Current routes go here
    ['/', () => run(import("./upcoming/Index.svelte"))],
    ['/past', () => run(import("./past/Index.svelte"))],
    ['/registration/:eventId', obj => run(import("./registration/Index.svelte"), obj)],
    ['/detail/:eventId', obj => run(import("./detail/Index.svelte"), obj)],
]
export default Router(ROUTES, [ // Optional 
    // All sub-routers go here
])