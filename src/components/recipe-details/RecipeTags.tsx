import React, { FC } from 'react'
import {
	capitalizeFirstLetter,
	findCountryImage,
	getColorByDifficulty,
} from 'src/utils'
import styled from 'styled-components'
import { PreparationTime, Tag } from '../ui'
import { Difficulty, Ingredient, Step } from 'src/types'

interface RecipeTagsProps {
	difficulty: Difficulty | undefined
	ingredients: Ingredient[]
	steps: Step[]
	preparationTime: number
	country: string
}

const Tags = styled.div`
	margin: 40px 0 40px;
	display: flex;
	flex-direction: column;
	gap: 36px;
`
const TagRow = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
`
const CountryImageWrapper = styled.div`
	padding: 0 24px 0 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		height: 36px;
		width: 36px;
	}
`

const RecipeTags: FC<RecipeTagsProps> = ({
	difficulty,
	ingredients,
	steps,
	preparationTime,
	country,
}) => {
	return (
		<Tags>
			<TagRow>
				<CountryImageWrapper>
					<img src={findCountryImage(country)} alt={country} />
				</CountryImageWrapper>
				<PreparationTime time={preparationTime ?? 30} />
			</TagRow>
			<TagRow>
				<Tag color={getColorByDifficulty(difficulty)}>
					{capitalizeFirstLetter(difficulty)}
				</Tag>
				<Tag color='#2ebabe'>{ingredients?.length} ingredients</Tag>
				<Tag variant='secondary' color='#2ebabe'>
					{steps?.length} steps
				</Tag>
			</TagRow>
		</Tags>
	)
}

export default RecipeTags
