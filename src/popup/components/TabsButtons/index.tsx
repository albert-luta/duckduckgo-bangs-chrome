import React, { memo, useCallback } from 'react';
import { TabsButtonsContainer } from './index.css';
import { Tabs, useTabState } from '../../store/tabs';
import { Button } from '../Button';

export const TabsButtons = memo(function TabsButtons() {
	const [tab, setTab] = useTabState();

	const changeToTabAll = useCallback(() => setTab(Tabs.All), []);
	const changeToTabFavorites = useCallback(() => setTab(Tabs.Favorites), []);

	return (
		<TabsButtonsContainer>
			<Button active={tab === Tabs.All} onClick={changeToTabAll}>
				All
			</Button>
			<Button active={tab === Tabs.Favorites} onClick={changeToTabFavorites}>
				Favorites
			</Button>
		</TabsButtonsContainer>
	);
});
