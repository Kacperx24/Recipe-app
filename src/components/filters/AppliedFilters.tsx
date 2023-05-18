import { FC } from 'react'
import styled from 'styled-components'

import FilterTag from './FilterTag'
import { findCountryImage } from 'src/utils'

interface AppliedFiltersProps {
	onResetTimeFilter: () => void
	onResetCountryFilter: () => void
	maxTime: number
	countries: string[]
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	span {
		margin: 0px 4px;
		color: ${({ theme }) => theme.colors.successBg};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		flex-direction: row;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		margin-left: 50px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
		gap: 40px;
	}
`

const CountryIcon = styled.div`
	margin: 0 4px;
	width: 22px;
	height: 22px;

	img {
		width: 22px;
		height: 22px;
	}
`

const AppliedFilters: FC<AppliedFiltersProps> = ({
	onResetTimeFilter,
	onResetCountryFilter,
	maxTime,
	countries,
}) => {
	return (
		<Container>
			{maxTime < 120 && (
				<FilterTag onClick={onResetTimeFilter}>
					Up to <span>{maxTime}</span> mins
				</FilterTag>
			)}
			{!!countries.length && (
				<FilterTag onClick={onResetCountryFilter}>
					{countries?.map(value => (
						<CountryIcon>
							<img src={findCountryImage(value)} alt={value} />
						</CountryIcon>
					))}
				</FilterTag>
			)}
		</Container>
	)
}

export default AppliedFilters
