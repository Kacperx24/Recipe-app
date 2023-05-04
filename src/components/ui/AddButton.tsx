import styled from 'styled-components'

const AddButton = styled.button`
	height: 100%;
	padding: 0 16px;
	background-color: ${({ theme }) => theme.colors.successBg};
	color: ${({ theme }) => theme.colors.altText};
`

export default AddButton
