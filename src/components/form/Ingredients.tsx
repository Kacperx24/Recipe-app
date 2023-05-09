import { useState, useEffect, FC } from 'react'
import styled from 'styled-components'
import { RecipeFormData, Ingredient } from 'src/types'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { ErrorMessage, Paragraph } from '../ui'
import { IngredientsList, IngredientForm } from './index'

interface IngredientsProps {
	setValue: UseFormSetValue<RecipeFormData>
	register: UseFormRegister<RecipeFormData>
	errors: FieldValues['errors']
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 40px 0;
	width: 100%;
`

const Ingredients: FC<IngredientsProps> = ({ setValue, register, errors }) => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])

	const handleRemoveIngredient = (id: string) => {
		setIngredients(prev => prev.filter(item => item.id !== id))
	}

	useEffect(() => {
		setValue('ingredients', ingredients)
	}, [ingredients, setValue])

	return (
		<Container>
			<input
				type='hidden'
				{...register('ingredients', { required: 'Ingredients are required' })}
			/>
			<Paragraph fontSize={18} fontWeight={600}>
				Add ingredients
			</Paragraph>
			<IngredientForm setIngredients={setIngredients} />
			<IngredientsList
				ingredients={ingredients}
				onRemoveIngredient={handleRemoveIngredient}
			/>
			{errors.ingredients && !ingredients.length && (
				<ErrorMessage>{errors.ingredients.message}</ErrorMessage>
			)}
		</Container>
	)
}

export default Ingredients
