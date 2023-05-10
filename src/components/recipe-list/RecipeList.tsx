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
	padding: 40px 0px;
	width: 100%;
	max-width: 1200px;
`

const List = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
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
