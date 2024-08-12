import styled from 'styled-components';
import { TitleColor, HoverColor } from 'styles/theme';

export const Title = styled.h1`
	cursor: pointer;
	font-size: 4rem; /* Adjust size as needed */
	color: ${TitleColor};
	text-align: center;
	margin: 20px 0;
	transition: color 0.3s ease;

	&:hover {
		color: ${HoverColor}; /* Change color on hover */
	}
`;