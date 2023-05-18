import { FC } from 'react'
import styled from 'styled-components'

import CountryFilterButton from './CountryFilterButton'
import TimeFilterButton from './TimeFilterButton'
import SearchButton from './SearchButton'
import { FilterState, UpdateFilter } from 'src/hooks/useFilters'
import AppliedFilters from './AppliedFilters'

interface FiltersProps {
	updateFilter: UpdateFilter
	filters: FilterState
}

const Container = styled.div`
	padding: 50px 70px 0px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
	max-width: 1600px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		justify-content: flex-start;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
		gap: 40px;
	}
`

const Filters: FC<FiltersProps> = ({ updateFilter, filters }) => {
	const updateTitleFilter = (value: string) => {
		updateFilter('title', value)
	}

	const updateCountryFilter = (value: string[]) => {
		updateFilter('countries', value)
	}

	const updateTimeFilter = (value: number) => {
		updateFilter('maxTime', value)
	}

	return (
		<Container>
			<SearchButton onUpdate={updateTitleFilter} />
			<CountryFilterButton
				onUpdate={updateCountryFilter}
				countries={filters.countries}
			/>
			<TimeFilterButton onUpdate={updateTimeFilter} maxTime={filters.maxTime} />
			<AppliedFilters
				onResetCountryFilter={() => updateCountryFilter([])}
				onResetTimeFilter={() => updateTimeFilter(120)}
				maxTime={filters.maxTime}
				countries={filters.countries}
			/>
		</Container>
	)
}

export default Filters
