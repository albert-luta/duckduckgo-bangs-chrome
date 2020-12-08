import { useRecoilState } from 'recoil';
import { SELECTED_TAB_LS, tabState } from '../../store/tabs';
import { favoritesState, FAVORITES_LS } from '../../store/favorites';
import { useEffect } from 'react';

export const useInitializeStateFromChromeStorage = () => {
	const [initialTab, setPersistedTab] = useRecoilState(tabState);
	const [initialFavorites, setPersistedFavorites] = useRecoilState(favoritesState);

	useEffect(() => {
		chrome.storage.sync.get([SELECTED_TAB_LS, FAVORITES_LS], (res) => {
			setPersistedTab(res[SELECTED_TAB_LS] ?? initialTab);
			setPersistedFavorites(res[FAVORITES_LS] ?? initialFavorites);
		});
	}, []);
};
