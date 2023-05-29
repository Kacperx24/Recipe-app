import { FC, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import { UnitSelect } from './index'
import { Ingredient } from 'src/types'
import { AddButton } from '../ui'
import { handleEnterClick } from 'src/utils'

interface IngredientFormProps {
	setIngredients: (
		update: Ingredient[] | ((prev: Ingredient[]) => Ingredient[])
	) => void
}

const InputContainer = styled.div`
	display: flex;
	margin: 20px auto 0;
	justify-content: center;
	gap: 12px;
	height: 40px;
	max-width: 100%;
`

const NameInput = styled.input<{ error: boolean }>`
	padding: 12px;
	flex: 1;
	font-size: 15px;
	font-weight: 600;
	min-width: 0;
	max-width: 200px;
	box-shadow: ${({ error }) => (error ? '0 0 0 2px #f77575' : 'none')};
`

const QuantityInput = styled.input<{ error: boolean }>`
	padding: 12px 6px;
	width: 50px;
	font-weight: 600;
	font-size: 15px;
	text-align: center;
	box-shadow: ${({ error }) => (error ? '0 0 0 2px #f77575' : 'none')};

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

const IngredientForm: FC<IngredientFormProps> = ({ setIngredients }) => {
	const [currentIngredient, setCurrentIngredient] = useState<Ingredient>({
		unit: 'g',
		quantity: '',
		name: '',
		id: '',
	})
	const [isSubmitAttempted, setIsSubmitAttempted] = useState(false)

	const handleAddIngredient = () => {
		const { unit, quantity, name } = currentIngredient
		if (unit && quantity && name) {
			setIngredients(prev => [...prev, { ...currentIngredient, id: uuid() }])
			setCurrentIngredient(prev => ({
				...prev,
				quantity: '',
				name: '',
				id: '',
			}))
			setIsSubmitAttempted(false)
			return
		}
		setIsSubmitAttempted(true)
	}

	const handleSetUnit = (unit: string) => {
		setCurrentIngredient(prev => ({ ...prev, unit }))
	}

	const handleSetQuantity = (quantity: string) => {
		setCurrentIngredient(prev => ({ ...prev, quantity }))
	}

	const handleSetName = (name: string) => {
		setCurrentIngredient(prev => ({ ...prev, name }))
	}

	return (
		<InputContainer>
			<QuantityInput
				error={isSubmitAttempted && !currentIngredient.quantity.length}
				value={currentIngredient.quantity}
				onChange={e => handleSetQuantity(e.target.value)}
				type='number'
				onKeyDown={e => handleEnterClick(e, handleAddIngredient)}
				data-testid='quantity-input'
			/>
			<UnitSelect setUnit={handleSetUnit} />
			<NameInput
				error={isSubmitAttempted && !currentIngredient.name.length}
				value={currentIngredient.name}
				onChange={e => handleSetName(e.target.value)}
				onKeyDown={e => handleEnterClick(e, handleAddIngredient)}
				data-testid='name-input'
			/>{' '}
			<AddButton type='button' onClick={handleAddIngredient}>
				Add
			</AddButton>
		</InputContainer>
	)
}

export default IngredientForm
