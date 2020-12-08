import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

export const GlobalStylesProvider = memo(function GlobalStylesProvider({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			{children}
		</ThemeProvider>
	);
});
