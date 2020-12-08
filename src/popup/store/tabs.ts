import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

export const SELECTED_TAB_LS = 'selectedTab';
export enum Tabs {
	All = 'all',
	Favorites = 'favorites',
}

export const tabState = atom<Tabs>({
	key: 'tabState',
	default: Tabs.All,
});

export const useTabState = () => {
	const [tab, setTab] = useRecoilState(tabState);

	const updateTab = useCallback((newTab: Tabs) => {
		setTab(newTab);
		chrome.storage.sync.set({ [SELECTED_TAB_LS]: newTab });
	}, []);

	return [tab, updateTab] as [Tabs, (newTab: Tabs) => void];
};
