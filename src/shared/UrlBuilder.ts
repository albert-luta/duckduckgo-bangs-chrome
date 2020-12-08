import websites, { SEARCH_SYMBOL } from '../constants/websites';

class UrlBuilder {
	private commands = Object.values(websites).map(({ command }) => command);

	getSuggestions(text: string) {
		if (text.includes(' ')) return [];

		return this.commands
			.filter((command) => command.startsWith(text))
			.map((command) => ({
				content: command + ' ',
				description: command + ' {search text}',
			}));
	}

	computeRedirect(text: string) {
		const firstSpace = text.indexOf(' ');
		const command = text.slice(0, firstSpace);
		const search = text.slice(firstSpace + 1);

		let url;
		if (this.commands.includes(command)) {
			const websiteUrl = Object.values(websites).find(
				(website) => website.command === command
			)!.url;

			url = this.computeUrl(websiteUrl, search);
		} else {
			url = this.computeUrl(websites.google.url, search);
		}

		return { url };
	}

	private computeUrl(url: string, search: string) {
		return url.replace(SEARCH_SYMBOL, encodeURI(search));
	}
}

export const urlBuilder = new UrlBuilder();
