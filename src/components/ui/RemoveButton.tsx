import { Minus } from 'lucide-react'
import styled from 'styled-components'

interface RemoveButtonProps {
	onClick: () => void
}

const StyledButton = styled.button`
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	margin-right: 12px;

	svg {
		color: ${({ theme }) => theme.colors.lightText};
	}

	&:hover {
		opacity: 1;
		background-color: ${({ theme }) => theme.colors.errorBg};

		svg {
			color: white;
		}
	}
`

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
	return (
		<StyledButton type='button'>
			<Minus onClick={onClick} size={22} />
		</StyledButton>
	)
}

export default RemoveButton
