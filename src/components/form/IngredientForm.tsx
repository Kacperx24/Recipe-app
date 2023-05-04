import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import UnitSelect from './UnitSelect'
import { v4 as uuid } from 'uuid'
import { Ingredient } from '../../types'
import AddButton from '../ui/AddButton'
import { handleEnterClick } from '../../utils'

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
	const [wasSubmitTry, setWasSubmitTry] = useState(false)

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
			setWasSubmitTry(false)
			return
		}
		setWasSubmitTry(true)
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
		<InputContainer>
			<QuantityInput
				error={wasSubmitTry && !currentIngredient.quantity.length}
				value={currentIngredient.quantity}
				onChange={e => setQuantity(e.target.value)}
				type='number'
				onKeyDown={e => handleEnterClick(e, addIngredient)}
			/>
			<UnitSelect setUnit={setUnit} />
			<NameInput
				error={wasSubmitTry && !currentIngredient.name.length}
				value={currentIngredient.name}
				onChange={e => setName(e.target.value)}
				onKeyDown={e => handleEnterClick(e, addIngredient)}
			/>{' '}
			<AddButton type='button' onClick={addIngredient}>
				Add
			</AddButton>
		</InputContainer>
	)
}

export default IngredientForm
