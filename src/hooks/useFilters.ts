import { useState } from 'react'
import { Recipe } from 'src/types'

export interface FilterState {
	title: string
	maxTime: number
	countries: string[]
}

export type UpdateFilter = (
	filterName: keyof FilterState,
	value: string | number | null | string[]
) => void

const initialState: FilterState = {
	title: '',
	maxTime: 120,
	countries: [],
}

const useFilters = (recipes: Recipe[]) => {
	const [filters, setFilters] = useState(initialState)

	const updateFilter: UpdateFilter = (filterName, value) => {
		setFilters(prevState => ({
			...prevState,
			[filterName]: value,
		}))
	}

	const resetFilters = () => {
		setFilters(initialState)
	}

	const filteredRecipes = recipes?.filter(recipe => {
		const matchesTitle = recipe.title
			.toLowerCase()
			.includes(filters.title.toLowerCase())
		const matchesMaxTime = filters.maxTime
			? recipe.preparationTime <= filters.maxTime
			: true
		const matchesCountry = filters.countries.length
			? filters.countries.includes(recipe.country)
			: true

		return matchesTitle && matchesMaxTime && matchesCountry
	})

	return {
		filters,
		updateFilter,
		resetFilters,
		filteredRecipes,
	}
}

export default useFilters
