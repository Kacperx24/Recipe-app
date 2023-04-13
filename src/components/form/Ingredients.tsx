import React, { useState } from 'react'
import styled from 'styled-components'
import UnitSelect from './UnitSelect'
import { Ingredient } from '../../types'
import { v4 as uuid } from 'uuid'
import IngredientsList from './IngredientsList'

const Container = styled.div`
	margin: 40px 0;
	width: 100%;
`

const InputContainer = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
	gap: 12px;
	height: 40px;
	max-width: 100%;
`

const NameInput = styled.input`
	padding: 12px;
	flex: 1;
	font-size: 15px;
	font-weight: 600;
	min-width: 0;
	max-width: 200px;
`

const QuantityInput = styled.input`
	padding: 12px 6px;
	width: 50px;
	font-weight: 600;
	font-size: 15px;
	text-align: center;
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
`

const AddButton = styled.button`
	height: 100%;
	padding: 0 16px;
	background-color: ${({ theme }) => theme.colors.successBg};
	color: ${({ theme }) => theme.colors.altText};
`

const Ingredients = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [currentIngredient, setCurrentIngredient] = useState<Ingredient>({
		unit: 'g',
		quantity: '',
		name: '',
		id: '',
	})
	const addIngredient = () => {
		const { unit, quantity, name } = currentIngredient
		if (unit && quantity && name) {
			setIngredients(prev => [...prev, { ...currentIngredient, id: uuid() }])
			setCurrentIngredient(prev => ({
				...prev,
				quantity: '',
				name: '',
				id: '',
			}))
		}
	}

	const removeIngredient = (id: string) => {
		setIngredients(prev => prev.filter(item => item.id !== id))
	}

	const setUnit = (unit: string) => {
		setCurrentIngredient(prev => ({ ...prev, unit }))
	}

	const setQuantity = (quantity: string) => {
		setCurrentIngredient(prev => ({ ...prev, quantity }))
	}
	const setName = (name: string) => {
		setCurrentIngredient(prev => ({ ...prev, name }))
	}

	return (
		<Container>
			<InputContainer>
				<QuantityInput
					value={currentIngredient.quantity}
					onChange={e => setQuantity(e.target.value)}
					type='number'
				/>
				<UnitSelect setUnit={setUnit} />
				<NameInput
					value={currentIngredient.name}
					onChange={e => setName(e.target.value)}
				/>{' '}
				<AddButton type='button' onClick={addIngredient}>
					Add
				</AddButton>
			</InputContainer>
			<IngredientsList />
		</Container>
	)
}

export default Ingredients
