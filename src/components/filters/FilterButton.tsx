import { ChevronDown } from 'lucide-react'
import { FC, ReactNode, Ref, forwardRef } from 'react'
import styled from 'styled-components'

interface FilterButtonProps {
	onClick: () => void
	children: ReactNode
	ref: Ref<HTMLButtonElement>
}

const Button = styled.button`
	position: relative;
	background-color: ${({ theme }) => theme.colors.altText};
	width: 200px;
	height: 44px;
	padding: 4px 16px;
	border-radius: 8px;
	font-weight: 600;
	box-shadow: 0px 4px 6px #8a8a8a21;
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

const FilterButton: FC<FilterButtonProps> = forwardRef(
	({ onClick, children }, ref) => {
		return (
			<Button onClick={onClick} ref={ref}>
				{children}
				<ChevronDown size={18} />
			</Button>
		)
	}
)

export default FilterButton
