import styled from 'styled-components'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getRecipes } from '../api'
import { LoadingSpinner } from '../components/ui'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.primaryBg};
	min-height: 100vh;
`
const MainPage = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ['recipes'],
		queryFn: getRecipes,
	})

	if (isLoading) {
		return <LoadingSpinner />
	}

	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	)
}

export default MainPage
