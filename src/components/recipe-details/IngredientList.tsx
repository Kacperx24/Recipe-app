import React, { FC } from 'react'
import { Ingredient } from 'src/types'
import styled from 'styled-components'
import { Paragraph } from '../ui'

interface IngredientListProps {
	ingredients: Ingredient[]
}

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
	max-width: 480px;
	margin: 25px 0 40px;
`

const StyledParagraph = styled(Paragraph)`
	color: ${({ theme }) => theme.colors.secondaryText};
`

const IngredientList: FC<IngredientListProps> = ({ ingredients }) => {
	return (
		<>
			<Paragraph fontSize={19} fontWeight={600}>
				Ingredients
			</Paragraph>
			<List>
				{ingredients?.map(({ unit, quantity, name }) => (
					<StyledParagraph center fontWeight={500}>
						{quantity} {unit} {name}
					</StyledParagraph>
				))}
			</List>
		</>
	)
}

export default IngredientList
