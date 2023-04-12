import styled from 'styled-components'

const ModalTitle = styled.h2`
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	padding-bottom: 16px;
	border-bottom: 3px solid ${({ theme }) => `${theme.colors.lightText}33`};
`

export default ModalTitle
