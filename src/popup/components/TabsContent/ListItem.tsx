import React, { FC, memo, useCallback, MouseEvent } from 'react';
import { FavoriteIconContainer, HeartEmptySvgCss, HeartFullSvgCss, ListItemCss } from './index.css';
import { Button } from '../Button';
import { useFavoritesState } from '../../store/favorites';
import { SearchPopup } from './SearchPopup';

interface ListItemProps {
	name: string;
	command: string;
	searchPopup: string;
	setSearchPopup: (searchKey: string) => void;
}

export const ListItem: FC<ListItemProps> = memo(function ListItem({
	name,
	command,
	searchPopup,
	setSearchPopup,
}) {
	const handleSelectCommand = useCallback(() => setSearchPopup(name), [setSearchPopup, name]);

	const [favorites, toggleFavorite] = useFavoritesState();

	const handleToggleFavorite = useCallback(
		(e: MouseEvent, name: string) => {
			e.stopPropagation();

			toggleFavorite(name);
		},
		[toggleFavorite]
	);

	const closeSearchPopup = useCallback(() => setSearchPopup(''), [setSearchPopup]);

	return (
		<ListItemCss>
			<Button onClick={handleSelectCommand}>
				{name} - {command}
			</Button>
			<FavoriteIconContainer onClick={(e) => handleToggleFavorite(e, name)}>
				{favorites.includes(name) ? <HeartFullSvgCss /> : <HeartEmptySvgCss />}
			</FavoriteIconContainer>

			{searchPopup === name && (
				<SearchPopup name={name} command={command} onCloseSearchPopup={closeSearchPopup} />
			)}
		</ListItemCss>
	);
});
