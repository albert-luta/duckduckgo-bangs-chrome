import React, { memo } from 'react';
import { RecoilRoot } from 'recoil';
import { GlobalStylesProvider } from './components/GlobalStyles';
import { StateInitializer } from './components/StateInitializer';
import { TabsButtons } from './components/TabsButtons';
import { TabsContent } from './components/TabsContent';
import { TopContainerCss } from './shared/styles.css';

export const App = memo(function App() {
	return (
		<RecoilRoot>
			<StateInitializer />

			<GlobalStylesProvider>
				<TopContainerCss>
					<TabsContent />
					<TabsButtons />
				</TopContainerCss>
			</GlobalStylesProvider>
		</RecoilRoot>
	);
});
