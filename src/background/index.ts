import { urlBuilder } from '../shared/UrlBuilder';

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
	suggest(urlBuilder.getSuggestions(text));
});

chrome.omnibox.onInputEntered.addListener((text) => {
	chrome.tabs.update(urlBuilder.computeRedirect(text));
});
