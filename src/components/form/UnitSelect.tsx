import { FC, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styled, { css } from 'styled-components'
import Paragraph from '../ui/Paragraph'
import { UNITS } from '../../data/constants'

interface UnitSelectProps {
	setUnit: (unit: string) => void
}

const Container = styled.div`
	display: flex;
	gap: 6px;
`

const UnitsContainer = styled.div`
	width: 20px;
	text-align: center;
	height: 40px;
	position: relative;
	overflow: hidden;
`

const UnitItem = styled.div<{ position: string }>`
	position: absolute;
	height: 100%;
	width: 100%;
	top: ${({ position }) => position};
	display: flex;
	align-items: center;
	justify-content: center;
	${({ position }) =>
		(position === '100%' || position === '0%') &&
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

const calculatePosition = (index: number, selectedIndex: number) => {
	if (index === selectedIndex) return '0%'
	if (index === selectedIndex - 1 || (selectedIndex === 0 && index === 2))
		return '100%'
	return '-100%'
}

const UnitSelect: FC<UnitSelectProps> = ({ setUnit }) => {
	const [selectedUnitIndex, setSelectedUnitIndex] = useState(0)

	const changeUnitIndex = () => {
		setSelectedUnitIndex(prev => (prev + 1) % UNITS.length)
		setUnit(UNITS[selectedUnitIndex])
	}

	return (
		<Container>
			<UnitsContainer>
				{UNITS.map((item, index) => (
					<UnitItem
						key={item}
						position={calculatePosition(index, selectedUnitIndex)}
					>
						<Paragraph>{item}</Paragraph>
					</UnitItem>
				))}
			</UnitsContainer>
			<ButtonContainer>
				<ChevronDown onClick={changeUnitIndex} />
			</ButtonContainer>
		</Container>
	)
}

export default UnitSelect
