import { FC } from 'react'
import styled from 'styled-components'
import { Recipe } from 'src/types'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
	recipes: Recipe[]
}

const Container = styled.div`
	padding: 60px 0px;
	width: 100%;
	max-width: 1200px;
`

const List = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 35px 20px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 50px 20px;
	}
`

const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
	return (
		<Container>
			<List>
				{recipes.map(item => (
					<RecipeCard recipeData={item} key={item.id} />
				))}
			</List>
		</Container>
	)
}

export default RecipeList
