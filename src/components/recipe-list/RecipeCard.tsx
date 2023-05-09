import { FC } from 'react'
import styled from 'styled-components'
import { CheckRecipeButton, Paragraph, Tag } from '../ui'
import countries from 'src/data/countries'
import { Recipe } from 'src/types'
import {
	capitalizeFirstLetter,
	findCountryImage,
	getColorByDifficulty,
} from 'src/utils'
import { Clock } from 'lucide-react'

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
	border: 2px solid ${({ theme }) => theme.colors.lightBorder};
	border-radius: 12px;
	/* box-shadow: 0 0px 8px rgba(187, 187, 187, 0.2); */
`

const CardContent = styled.div`
	padding: 8px;
	gap: 10px;
	width: 300px;
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

const CardDetails = styled.div`
	flex-grow: 1;
	padding: 6px 0;
	display: flex;
`

const Title = styled(Paragraph)`
	padding: 4px 72px 0 8px;
`

const DetailsRow = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 12px;
`
const PrepTime = styled(Paragraph)`
	color: ${({ theme }) => theme.colors.lightText};
	display: flex;
	align-items: center;
	gap: 6px;
`

const RecipeCard: FC<RecipeCardProps> = ({ recipeData }) => {
	const {
		title,
		description,
		country,
		preparationTime,
		ingredients,
		steps,
		id,
		difficulty,
	} = recipeData || {}
	return (
		<Container>
			<Card>
				<CheckRecipeButton>Check</CheckRecipeButton>
				<CardContent>
					<Title fontSize={17} fontWeight={600}>
						{title}
					</Title>
					<CardDetails>
						<CountryImageWrapper>
							<img src={findCountryImage(country)} alt={country} />
						</CountryImageWrapper>
						<div>
							<DetailsRow>
								<Tag color={getColorByDifficulty(difficulty)}>
									{capitalizeFirstLetter(difficulty)}
								</Tag>
								<PrepTime fontSize={14} fontWeight={500}>
									<Clock size={16} /> {preparationTime}:00
								</PrepTime>
							</DetailsRow>
							<DetailsRow>
								<Tag color='#ff7b22'>{ingredients.length} ingredients</Tag>
								<Tag color='#ff7b22' alt>
									{steps.length} steps
								</Tag>
							</DetailsRow>
						</div>
					</CardDetails>
				</CardContent>
			</Card>
		</Container>
	)
}

export default RecipeCard
