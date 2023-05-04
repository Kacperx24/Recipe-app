import { Minus } from 'lucide-react'
import styled from 'styled-components'

interface RemoveButtonProps {
	onClick: () => void
}

const StyledButton = styled.button`
	background-color: transparent;
	opacity: 0.7;
	margin-right: 12px;
	&:hover {
		opacity: 1;
	}
`

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
	return (
		<StyledButton type='button'>
			<Minus color='#9da1a8' onClick={onClick} />
		</StyledButton>
	)
}

export default RemoveButton
