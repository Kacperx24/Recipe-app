import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styled, { css } from 'styled-components'
import Paragraph from '../ui/Paragraph'
import { UNITS } from '../../data/constants'

const Container = styled.div`
	display: flex;
	gap: 8px;
`

const UnitsContainer = styled.div`
	width: 20px;
	text-align: center;
	height: 40px;
	position: relative;
	overflow: hidden;
`

const Unit = styled.div<{ selected: boolean; position: string }>`
	position: absolute;
	height: 100%;
	width: 100%;
	top: ${({ position }) => position};
	display: flex;
	align-items: center;
	justify-content: center;
	${({ position, selected }) =>
		(position === '100%' || selected) &&
		css`
			transition: top 0.3s ease-in-out;
		`}
`

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		cursor: pointer;
	}
`

const UnitSelect = () => {
	const [selectedUnitIndex, setSelectedUnitIndex] = useState(0)

	const changeUnitIndex = () => {
		if (selectedUnitIndex < UNITS.length - 1) {
			return setSelectedUnitIndex(prev => prev + 1)
		}
		return setSelectedUnitIndex(0)
	}

	const calculatePosition = (index: number, selectedIndex: number) => {
		console.log(index, selectedIndex)
		if (index === selectedIndex) return '0%'
		if (index === selectedIndex - 1 || (selectedIndex === 0 && index === 2))
			return '100%'
		return '-100%'
	}

	return (
		<Container>
			<UnitsContainer>
				{UNITS.map((item, index) => (
					<Unit
						key={item}
						selected={index === selectedUnitIndex}
						position={calculatePosition(index, selectedUnitIndex)}
					>
						<Paragraph>{item}</Paragraph>
					</Unit>
				))}
			</UnitsContainer>
			<ButtonContainer>
				<ChevronDown onClick={changeUnitIndex} />
			</ButtonContainer>
		</Container>
	)
}

export default UnitSelect
