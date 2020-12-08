import React, { ChangeEvent, memo, useCallback, useState } from 'react';
import { SearchInputCss } from '../../shared/styles.css';
import { SearchInputContainerCss } from './index.css';
import { CommandsList } from './CommandsList';

export const TabsContent = memo(function TabsContent() {
	const [search, setSearch] = useState('');
	const handleSearchChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
		[]
	);

	return (
		<>
			<SearchInputContainerCss>
				<SearchInputCss placeholder="Search..." onChange={handleSearchChange} autoFocus />
			</SearchInputContainerCss>
			<CommandsList search={search} />
		</>
	);
});
