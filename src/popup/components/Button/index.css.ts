import styled, { css } from 'styled-components';
import { getColor, hexToRgba } from '../../utils';

export const ButtonCss = styled.button<{ active: boolean; background?: string }>`
	padding: 5px 0;
	background: ${({ background, theme: { colors } }) =>
		background != null ? getColor(colors, background) : 'transparent'};
	transition: background ${({ theme: { transitions } }) => transitions.speeds.normal};

	&:hover {
		background: ${({ background, theme: { colors } }) => {
			if (background == null) return hexToRgba('#ffffff', 0.15);
			return hexToRgba(getColor(colors, background), 0.85);
		}};
	}

	${({ active, background, theme: { colors } }) =>
		active &&
		css`
			background: ${() => {
				if (background == null) return hexToRgba('#ffffff', 0.2);
				return hexToRgba(getColor(colors, background), 0.8);
			}} !important;
		`}
`;
