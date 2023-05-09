import { FC } from 'react'
import styled from 'styled-components'
import { CheckRecipeButton, Paragraph, Tag } from '../ui'
import countries from 'src/data/countries'
import { Recipe } from 'src/types'
import { findCountryImage } from 'src/utils'
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
	/* overflow: hidden; */
`

const CardContent = styled.div`
	padding: 8px;
	display: flex;
	gap: 10px;
	width: 320px;
`
const CountryImageWrapper = styled.div`
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		height: 40px;
		width: 40px;
	}
`

const CardDetails = styled.div`
	flex-grow: 1;
	padding: 6px 0;
`

const Title = styled(Paragraph)`
	padding-right: 72px;
	margin-bottom: 16px;
`

const DetailsRow = styled.div`
	display: flex;
	gap: 10px;
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
	} = recipeData || {}
	return (
		<Container>
			<Card>
				<CheckRecipeButton>Check</CheckRecipeButton>
				<CardContent>
					<CountryImageWrapper>
						<img src={findCountryImage(country)} alt={country} />
					</CountryImageWrapper>
					<CardDetails>
						<Title fontSize={17} fontWeight={600}>
							{title}
						</Title>
						<DetailsRow>
							<Tag color='#27d352'>Medium</Tag>
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
					</CardDetails>
				</CardContent>
			</Card>
		</Container>
	)
}

export default RecipeCard
