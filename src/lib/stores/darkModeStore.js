import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const store = writable(null);

async function init() {
	if (browser) {
		let darkMode = JSON.parse(localStorage.getItem('page-builder-dark-mode'));

		if (darkMode == true) {
			// saved data = true
			store.set(true);
		} else if (darkMode == false) {
			// saved data = false
			store.set(false);
		} else if (darkMode == null) {
			// saved data = empty
			store.set(false);
		}
	}
}

async function set(currentMode) {
	if (browser) {
		localStorage.setItem('page-builder-dark-mode', currentMode);
	}
}

export const darkModeStore = {
	subscribe: store.subscribe, // Expose the store's value with $value
	init,
	set
};
