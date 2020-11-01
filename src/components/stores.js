import { writable } from 'svelte/store';
import {writable} from 'svelte/store';

// Stores for router
export const Route = writable(undefined);
export const params = writable(undefined);
export const currentUser = writable(null);