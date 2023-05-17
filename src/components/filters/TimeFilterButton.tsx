import React, { FC, useRef, useState } from 'react'
import { FilterCard, Paragraph, RangeInput } from '../ui'
import styled from 'styled-components'
import useClickOutside from 'src/hooks/useClickOutside'
import FilterButton from './FilterButton'

interface TimeFilterButtonProps {
	onUpdate: (value: number) => void
	maxTime: number
}

const Wrapper = styled.div`
	position: relative;
`

const TimeFilterContent = styled.div`
	padding: 18px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TimeLabel = styled(Paragraph)`
	margin-top: 18px;
	span {
		font-weight: 600;
		font-size: 17px;
		color: ${({ theme }) => theme.colors.successBg};
	}
`

const TimeFilterButton: FC<TimeFilterButtonProps> = ({ onUpdate, maxTime }) => {
	const [isActive, setIsActive] = useState(false)
	const filterCardRef = useRef<HTMLDivElement>(null)
	const filterBtnRef = useRef<HTMLButtonElement>(null)

	useClickOutside([filterCardRef, filterBtnRef], () => setIsActive(false))

	const handleInputChange = (value: string) => {
		onUpdate(parseInt(value))
	}

	return (
		<Wrapper>
			<FilterButton ref={filterBtnRef} onClick={() => setIsActive(!isActive)}>
				Filter by time
			</FilterButton>
			{isActive && (
				<FilterCard ref={filterCardRef}>
					<TimeFilterContent>
						<Paragraph fontSize={15} fontWeight={600} center>
							Preparation time
						</Paragraph>
						<TimeLabel fontSize={15} fontWeight={500}>
							Up to <span>{maxTime}</span> mins
						</TimeLabel>
						<RangeInput
							width={140}
							type='range'
							min='5'
							max='120'
							step='5'
							value={maxTime}
							onChange={e => handleInputChange(e.target.value)}
						/>
					</TimeFilterContent>
				</FilterCard>
			)}
		</Wrapper>
	)
}

export default TimeFilterButton
