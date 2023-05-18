import styled from 'styled-components'

const RangeInput = styled.input<{ width?: number }>`
	margin: 24px 0 12px;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	width: ${({ width }) => (width ? `${width}px` : '240px')};
	height: 4px;
	background-color: #43cb9f;
	outline: none;
	border-radius: 2px;
	padding: 0;

	&::-webkit-slider-thumb {
		appearance: none;
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		background: #43cb9f;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	&::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background-color: #43cb9f;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	&:hover::-moz-range-thumb {
		background-color: #43cb9f;
	}
`

export default RangeInput
