import React from 'react'
import { useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import {
	IngredientList,
	RecipeTags,
	StepList,
} from 'src/components/recipe-details'

import { Modal, ModalTitle, Paragraph } from 'src/components/ui'
import { Recipe } from 'src/types'
import styled from 'styled-components'

const Description = styled(Paragraph)`
	margin-top: 25px;
	color: ${({ theme }) => theme.colors.secondaryText};
	text-align: center;
`

const RecipeDetails = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const data = queryClient.getQueryData<{ recipes: Recipe[] }>('recipes')
	const recipeData = data?.recipes.find((recipe: Recipe) => recipe.id === id)
	const {
		title,
		description,
		ingredients,
		steps,
		difficulty,
		preparationTime,
		country,
	} = recipeData || {}

	return (
		<Modal>
			<ModalTitle>{title}</ModalTitle>
			<Description fontWeight={400} fontSize={17}>
				{description}
			</Description>
			<RecipeTags
				preparationTime={preparationTime ?? 30}
				difficulty={difficulty}
				ingredients={ingredients ?? []}
				steps={steps ?? []}
				country={country ?? ''}
			/>
			<IngredientList ingredients={ingredients ?? []} />
			<StepList steps={steps ?? []} />
		</Modal>
	)
}

export default RecipeDetails
