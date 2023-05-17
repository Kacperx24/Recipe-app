import styled from 'styled-components'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getRecipes } from '../api'
import { LoadingSpinner } from '../components/ui'
import { RecipeList } from '../components/recipe-list'
import { Filters } from 'src/components/filters'
import useFilters from 'src/hooks/useFilters'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.primaryBg};
	min-height: 100vh;
`

const ListContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const MainPage = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ['recipes'],
		queryFn: getRecipes,
	})

	const { filters, updateFilter, filteredRecipes } = useFilters(data?.recipes)

	if (isLoading) {
		return <LoadingSpinner />
	}

	return (
		<Container>
			<Header />
			<ListContent>
				<Filters updateFilter={updateFilter} filters={filters} />
				<RecipeList recipes={filteredRecipes} />
				<Outlet />
			</ListContent>
		</Container>
	)
}

export default MainPage
