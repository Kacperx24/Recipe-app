import React, { FC } from 'react'
import { Ingredient } from 'src/types'
import styled from 'styled-components'
import { Paragraph, RemoveButton } from '../ui'

interface IngredientListProps {
	ingredients: Ingredient[]
	onRemoveIngredient: (id: string) => void
}

const Container = styled.div`
	width: 100%;
	padding: 40px 10px 0;
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		padding: 40px 50px 0;
	}
`

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 100%);
	grid-template-rows: repeat(12, auto);
	grid-auto-flow: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		grid-template-rows: repeat(6, auto);
		grid-template-columns: repeat(2, 50%);
	}
`

const ListItem = styled.div`
	padding: 10px 0;
	display: flex;
`

const StyledParagraph = styled(Paragraph)`
	span {
		font-size: 20px;
	}
`

const IngredientList: FC<IngredientListProps> = ({
	ingredients,
	onRemoveIngredient,
}) => {
	return (
		<Container>
			<ListContainer>
				{ingredients.map(({ name, unit, quantity, id }) => (
					<ListItem key={id}>
						<RemoveButton onClick={() => onRemoveIngredient(id)} />
						<StyledParagraph>
							<span>{quantity}</span>
							{unit} of {name}
						</StyledParagraph>
					</ListItem>
				))}
			</ListContainer>
		</Container>
	)
}

export default IngredientList
