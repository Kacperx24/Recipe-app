import React, { FC, useEffect, useRef, useState } from 'react'
import { FilterCard, Paragraph, SelectButton } from '../ui'
import styled from 'styled-components'
import countriesData from 'src/data/countries'
import useClickOutside from 'src/hooks/useClickOutside'
import FilterButton from './FilterButton'

interface CountryFilterButtonProps {
	onUpdate: (value: string[]) => void
	countries: string[]
}

const List = styled.div`
	padding: 6px 20px 18px;
`

const ListItem = styled.div`
	margin-top: 12px;
	display: flex;
	gap: 12px;
`
const Wrapper = styled.div`
	position: relative;
`

const CountryFilterButton: FC<CountryFilterButtonProps> = ({
	onUpdate,
	countries,
}) => {
	const [isActive, setIsActive] = useState(false)
	const filterCardRef = useRef<HTMLDivElement>(null)
	const filterBtnRef = useRef<HTMLButtonElement>(null)

	useClickOutside([filterCardRef, filterBtnRef], () => setIsActive(false))

	const handleToggleFilter = (value: string) => {
		if (countries.includes(value)) {
			onUpdate(countries.filter(countryName => countryName !== value))

			return
		}
		onUpdate([...countries, value])
	}

	return (
		<Wrapper>
			<FilterButton ref={filterBtnRef} onClick={() => setIsActive(!isActive)}>
				Filter by countries
			</FilterButton>
			{isActive && (
				<FilterCard ref={filterCardRef}>
					<List>
						{countriesData.map(({ label, value }) => (
							<ListItem key={value}>
								<SelectButton
									picked={countries.includes(value)}
									onClick={() => handleToggleFilter(value)}
								/>
								<Paragraph fontSize={15}>{label}</Paragraph>
							</ListItem>
						))}
					</List>
				</FilterCard>
			)}
		</Wrapper>
	)
}

export default CountryFilterButton
