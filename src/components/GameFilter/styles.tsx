import styled from 'styled-components';
import { backgroundColor, secondaryTextColor } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 24px auto;
	color: ${secondaryTextColor};
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`;

export const Label = styled.label`
	display: inline-block;
	margin-right: 16px;
	flex-basis: 25%;
	padding-top: 8px;
	font-weight: bold;
	font-size: 14px;
	color: ${secondaryTextColor};

	&:last-of-type {
		margin-right: 0;
	}
`;

export const Select = styled.select`
	width: 100%;
	padding: 8px 12px;
	margin-top: 8px;
	color: white;
	background-color: ${backgroundColor};
	border: 1px solid ${secondaryTextColor};
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	appearance: none;
	cursor: pointer;
	transition: background-color 0.3s ease, border-color 0.3s ease;

	&:hover {
		background-color: darken(${backgroundColor}, 5%);
		border-color: lighten(${secondaryTextColor}, 10%);
	}

	&:focus {
		outline: none;
		border-color: lighten(${secondaryTextColor}, 15%);
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
	}
`;
