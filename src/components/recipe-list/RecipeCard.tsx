import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { CheckRecipeButton, Paragraph, Tag } from '../ui'
import { Recipe } from 'src/types'
import {
	capitalizeFirstLetter,
	findCountryImage,
	getColorByDifficulty,
} from 'src/utils'
import PreparationTime from '../ui/PreparationTime'

interface RecipeCardProps {
	recipeData: Recipe
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const Card = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.altText};
	border-radius: 12px;
	transition: 0.2s;
	box-shadow: 0px 2px 5px #8a8a8a21;

	&:hover {
		transform: scale(1.04);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		box-shadow: 0px 5px 15px #8a8a8a39;
	}
`

const CardContent = styled.div`
	padding: 8px;
	gap: 10px;
	width: 300px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		width: 340px;
		padding: 12px;
	}
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

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		img {
			height: 40px;
			width: 40px;
		}
	}
`

const CardDetails = styled.div`
	flex-grow: 1;
	padding: 6px 0;
	display: flex;
`

const Title = styled(Paragraph)`
	padding: 4px 72px 0 8px;
	font-size: 17px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 19px;
		padding: 4px 80px 4px 8px;
	}
`

const DetailsRow = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 12px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		gap: 14px;
		margin-top: 14px;
	}
`

const RecipeCard: FC<RecipeCardProps> = ({ recipeData }) => {
	const {
		title,
		country,
		preparationTime,
		ingredients,
		steps,
		id,
		difficulty,
	} = recipeData || {}

	return (
		<Container>
			<Link to={`/recipe/${id}`}>
				<Card>
					<CheckRecipeButton>Check</CheckRecipeButton>
					<CardContent>
						<Title fontWeight={600}>{title}</Title>
						<CardDetails>
							<CountryImageWrapper>
								<img src={findCountryImage(country)} alt={country} />
							</CountryImageWrapper>
							<div>
								<DetailsRow>
									<Tag color={getColorByDifficulty(difficulty)}>
										{capitalizeFirstLetter(difficulty)}
									</Tag>
									<PreparationTime time={preparationTime} />
								</DetailsRow>
								<DetailsRow>
									<Tag color='#ff7b22'>{ingredients.length} ingredients</Tag>
									<Tag color='#ff7b22' variant='secondary'>
										{steps.length} steps
									</Tag>
								</DetailsRow>
							</div>
						</CardDetails>
					</CardContent>
				</Card>
			</Link>
		</Container>
	)
}

export default RecipeCard
