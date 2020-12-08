import { memo } from 'react';
import { useInitializeStateFromChromeStorage } from '../shared/hooks/useInitializeStateFromChromeStorage';

export const StateInitializer = memo(function StateInitializer() {
	useInitializeStateFromChromeStorage();

	return null;
});
