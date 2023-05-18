import { ArrowLeft } from 'lucide-react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledButton = styled.button`
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	width: 44px;
	height: 44px;

	&:hover {
		background-color: #aaaaaa16;
	}
`

const GoBackButton = () => {
	const navigate = useNavigate()

	return (
		<StyledButton onClick={() => navigate(-1)}>
			<ArrowLeft size={26} color='#aaaaaa' />
		</StyledButton>
	)
}

export default GoBackButton
