import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

export const FAVORITES_LS = 'favorites';

export const favoritesState = atom<string[]>({
	key: 'favoritesState',
	default: [],
});

export const useFavoritesState = () => {
	const [favorites, setFavorites] = useRecoilState(favoritesState);

	const toggleFavorite = useCallback((value: string) => {
		setFavorites((favorites) => {
			let newFavorites;

			if (favorites.includes(value)) {
				const index = favorites.indexOf(value);

				newFavorites = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
			} else {
				newFavorites = [...favorites, value];
			}

			chrome.storage.sync.set({ [FAVORITES_LS]: newFavorites });

			return newFavorites;
		});
	}, []);

	return [favorites, toggleFavorite] as [string[], (value: string) => void];
};
