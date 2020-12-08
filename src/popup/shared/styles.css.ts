import styled from 'styled-components';

export const TopContainerCss = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const SearchInputCss = styled.input`
	border: 1px solid ${({ theme: { colors } }) => colors.secondary2};
	border-radius: 5px;
	padding: 3px 8px;
`;
