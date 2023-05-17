import { Check } from 'lucide-react'
import React, { FC } from 'react'
import styled from 'styled-components'

interface SelectButtonProps {
	picked: boolean
	onClick: () => void
}

const Button = styled.button<{ picked: boolean }>`
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid
		${({ theme, picked }) => (picked ? 'none' : theme.colors.lightText)};
	color: ${({ theme, picked }) =>
		picked ? theme.colors.altText : theme.colors.lightText};
	border-radius: 4px;
	background-color: ${({ picked, theme }) =>
		picked ? theme.colors.successBg : theme.colors.altText};
`
const SelectButton: FC<SelectButtonProps> = ({ picked, onClick }) => {
	return (
		<Button picked={picked} onClick={onClick}>
			<Check size={12} />
		</Button>
	)
}

export default SelectButton
