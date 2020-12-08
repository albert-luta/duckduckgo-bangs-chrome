import React, { FC, memo, ChangeEvent, useState, useCallback, KeyboardEvent } from 'react';
import { SearchInputCss } from '../../shared/styles.css';
import { CheckSvgCss, CloseSvgCss, SearchPopupContainer } from './index.css';
import { Button } from '../Button';
import { urlBuilder } from '../../../shared/UrlBuilder';

const computeRedirectText = (command: string, search: string) => `${command} ${search}`;

const redirect = (command: string, search: string) => {
	const text = computeRedirectText(command, search);

	chrome.tabs.update(urlBuilder.computeRedirect(text));
	window.close();
};

interface SearchPopupProps {
	name: string;
	command: string;
	onCloseSearchPopup: () => void;
}

export const SearchPopup: FC<SearchPopupProps> = memo(function SearchPopup({
	name,
	command,
	onCloseSearchPopup,
}) {
	const [searchPopupText, setSearchPopupText] = useState('');
	const handleChangeSearchPopupText = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setSearchPopupText(e.target.value),
		[]
	);

	const handleKeyDownSearchPopup = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				e.preventDefault();

				redirect(command, searchPopupText);
			}
		},
		[command, searchPopupText]
	);

	return (
		<SearchPopupContainer>
			<SearchInputCss
				placeholder={`Search in ${name}...`}
				onChange={handleChangeSearchPopupText}
				onKeyDown={handleKeyDownSearchPopup}
				autoFocus
			/>
			<Button background="green" onClick={() => redirect(command, searchPopupText)}>
				<CheckSvgCss />
			</Button>
			<Button onClick={onCloseSearchPopup} background="red">
				<CloseSvgCss />
			</Button>
		</SearchPopupContainer>
	);
});
