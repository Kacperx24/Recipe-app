import styled from 'styled-components'

const SubmitButton = styled.button`
	background-color: ${({ theme }) => theme.colors.successBg};
	padding: 14px 24px;
	text-decoration: none;
	display: flex;
	align-items: center;
	font-size: 15px;
	gap: 8px;
	color: ${({ theme }) => theme.colors.altText};
`

export default SubmitButton
