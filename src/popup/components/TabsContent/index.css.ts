import styled from 'styled-components';
import HeartEmptySvg from '../../../inline-svgs/heart-empty.svg';
import HeartFullSvg from '../../../inline-svgs/heart-full.svg';
import { hexToRgba } from '../../utils';
import CheckSvg from '../../../inline-svgs/check.svg';
import CloseSvg from '../../../inline-svgs/close.svg';

export const SearchInputContainerCss = styled.div`
	padding: 10px 8px;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary2};
`;

export const ListContainerCss = styled.ul`
	padding: 5px 0;
	height: 300px;
	overflow: auto;
`;

export const ListItemCss = styled.li`
	position: relative;
	display: flex;
	align-items: center;
`;

export const HeartEmptySvgCss = styled(HeartEmptySvg)``;

export const HeartFullSvgCss = styled(HeartFullSvg)``;

export const FavoriteIconContainer = styled.div`
	padding: 0 15px;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 25px;
	}

	${HeartFullSvgCss} path {
		fill: ${({ theme: { colors } }) => colors.heart};
	}

	&:hover {
		${HeartEmptySvgCss} path {
			fill: ${({ theme: { colors } }) => colors.heart};
		}

		${HeartFullSvgCss} path {
			fill: white;
		}
	}
`;

export const NoCommandFoundMessageCss = styled.p`
	color: ${hexToRgba('#ffffff', 0.5)};
	padding: 15px;
	text-align: center;
`;

export const SearchPopupContainer = styled.div`
	background: black;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 5px;
	right: 5px;

	display: flex;

	button {
		width: 100px;
		margin-left: 5px;
		border-radius: 5px;
	}
`;

export const CheckSvgCss = styled(CheckSvg)`
	width: 18px;
	transform: translateY(2px);
`;
export const CloseSvgCss = styled(CloseSvg)`
	width: 15px;
`;
