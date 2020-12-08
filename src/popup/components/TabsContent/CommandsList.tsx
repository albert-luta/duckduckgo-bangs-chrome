import React, { FC, memo, useState } from 'react';
import { useFavoritesState } from '../../store/favorites';
import { Tabs, useTabState } from '../../store/tabs';
import websites from '../../../constants/websites';
import { ListContainerCss, NoCommandFoundMessageCss } from './index.css';
import { ListItem } from './ListItem';

const getFavoritesArray = (websites: any, favorites: string[]) => {
	return Object.entries(websites).filter(([name]) => favorites.includes(name));
};

interface CommandsListProps {
	search: string;
}

export const CommandsList: FC<CommandsListProps> = memo(function CommandsList({ search }) {
	const [favorites] = useFavoritesState();
	const [tab] = useTabState();

	const matches = (() => {
		const arrayToSearchIn =
			tab === Tabs.All ? Object.entries(websites) : getFavoritesArray(websites, favorites);

		return arrayToSearchIn.filter(
			([name, { command }]: any) =>
				name.toLowerCase().startsWith(search) || command.toLowerCase().startsWith(search)
		);
	})();

	const computeNoCommandFoundMessage = () => {
		if (search) {
			return `We're sorry, there are no ${tab === Tabs.Favorites ? 'favorite ' : ''}commands
			that start with ${search}...`;
		} else if (tab === Tabs.Favorites) {
			return 'You have no favorite commands yet...';
		}
	};

	const [searchPopup, setSearchPopup] = useState('');

	return (
		<ListContainerCss>
			{matches.length > 0 ? (
				matches.map(([name, { command }]: any) => (
					<ListItem
						name={name}
						command={command}
						searchPopup={searchPopup}
						setSearchPopup={setSearchPopup}
					/>
				))
			) : (
				<NoCommandFoundMessageCss>
					{computeNoCommandFoundMessage()}
				</NoCommandFoundMessageCss>
			)}
		</ListContainerCss>
	);
});
