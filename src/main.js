import App from './App.svelte';
// import Header from './UI/Header.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

// Create the App and Header after being imported.
// const header = new Header({
// 	target: document.querySelector('#header')
// });

// const app = new App({
// 	target: document.querySelector('#app')
// });

export default app;