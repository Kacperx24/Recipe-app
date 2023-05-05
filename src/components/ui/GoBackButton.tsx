import React from 'react'
import { ArrowLeft } from 'lucide-react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface GoBackButtonProps {
	onClick?: () => void
}

const StyledButton = styled.button`
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	width: 40px;
	height: 40px;
	&:hover {
		background-color: #aaaaaa16;
	}
`

const GoBackButton = ({ onClick }: GoBackButtonProps) => {
	const navigate = useNavigate()

	return (
		<StyledButton onClick={() => navigate(-1)}>
			<ArrowLeft size={24} color='#aaaaaa' />
		</StyledButton>
	)
}

export default GoBackButton
