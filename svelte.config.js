import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
  preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',  // path to public directory
			assets: 'build',  // path to public directory
			fallback: null
		}),
		paths: {
			base: '/sveltekit_gh',
			assets: 'https://wykhuh.github.io/sveltekit_gh'
		}
	}
};

export default config;
