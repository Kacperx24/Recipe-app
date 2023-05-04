import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormData, Ingredient } from '../../types'
import IngredientsList from './IngredientsList'
import IngredientForm from './IngredientForm'
import Paragraph from '../ui/Paragraph'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import ErrorMessage from '../ui/ErrorMessage'

interface IngredientsProps {
	setValue: UseFormSetValue<FormData>
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 40px 0;
	width: 100%;
`

const Ingredients = ({ setValue, register, errors }: IngredientsProps) => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])

	const removeIngredient = (id: string) => {
		setIngredients(prev => prev.filter(item => item.id !== id))
	}

	useEffect(() => {
		setValue('ingredients', ingredients)
	}, [ingredients])

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
				removeIngredient={removeIngredient}
			/>
			{errors.ingredients && !ingredients.length && (
				<ErrorMessage>{errors.ingredients.message}</ErrorMessage>
			)}
		</Container>
	)
}

export default Ingredients
