// Put SEARCH_SYMBOL where the search text should be

export const SEARCH_SYMBOL = '{}';

const websites = {
	dexOnline: {
		command: 'dex',
		url: `https://dexonline.ro/definitie/${SEARCH_SYMBOL}`,
	},
	google: {
		command: 'g',
		url: `https://www.google.com/search?q=${SEARCH_SYMBOL}`,
	},
	reddit: {
		command: 'reddit',
		url: `https://www.reddit.com/search/?q=${SEARCH_SYMBOL}`,
	},
	wikipedia: {
		command: 'wiki',
		url: `https://en.wikipedia.org/w/index.php?search=${SEARCH_SYMBOL}`,
	},
	youtube: {
		command: 'yt',
		url: `https://www.youtube.com/results?search_query=${SEARCH_SYMBOL}`,
	},
	npm: {
		command: 'npm',
		url: `https://www.npmjs.com/search?q=${SEARCH_SYMBOL}`,
	},
	mdn: {
		command: 'mdn',
		url: `https://developer.mozilla.org/en-US/search?q=${SEARCH_SYMBOL}`,
	},
	github: {
		command: 'gh',
		url: `https://github.com/search?q=${SEARCH_SYMBOL}`,
	},
};

export default websites;
