import styled from 'styled-components'

const CheckRecipeButton = styled.button`
	position: absolute;
	top: -2px;
	right: -2px;
	background-color: ${({ theme }) => theme.colors.successBg};
	border-radius: 0 12px 0 12px;
	padding: 8px 0;
	width: 62px;
	color: ${({ theme }) => theme.colors.altText};
`

export default CheckRecipeButton
