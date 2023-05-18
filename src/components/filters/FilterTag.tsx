import { X } from 'lucide-react'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface FilterTagProps {
	onClick: () => void
	children: ReactNode
}

const Button = styled.button`
	position: relative;
	background-color: ${({ theme }) => theme.colors.altText};
	height: 44px;
	padding: 4px 16px;
	border-radius: 8px;
	font-weight: 600;
	/* box-shadow: 0px 4px 0px 2px #8a8a8a21; */
	border: 2px solid #8a8a8a21;
	text-align: left;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ theme }) => theme.colors.secondaryText};
	color: #868686;

	&:active {
		transform: none;
	}
`
const IconWrapper = styled.div`
	margin-left: 16px;
`

const FilterTag: FC<FilterTagProps> = ({ onClick, children }) => {
	return (
		<Button>
			{children}
			<IconWrapper>
				<X size={18} onClick={onClick} />
			</IconWrapper>
		</Button>
	)
}

export default FilterTag
