import React, { FC } from 'react'
import styled from 'styled-components'
import { Recipe } from 'src/types'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
	recipes: Recipe[]
}

const Container = styled.div`
	display: flex;
	justify-content: center;
`

const Content = styled.div`
	padding: 20px;
	width: 100%;
	max-width: 1200px;
`

const List = styled.div`
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`

const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
	return (
		<Container>
			<Content>
				<List>
					{recipes.map(item => (
						<RecipeCard recipeData={item} key={item.id} />
					))}
				</List>
			</Content>
		</Container>
	)
}

export default RecipeList
