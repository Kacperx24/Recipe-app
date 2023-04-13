import React from 'react'
import styled from 'styled-components'
import UnitSelect from './UnitSelect'

const Container = styled.div`
	margin: 40px 0;
	width: 100%;
`

const InputContainer = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
	gap: 16px;
	height: 40px;
	max-width: 340px;
`

const Input = styled.input`
	padding: 12px 16px;
	flex-grow: 1;
`
const QuantityInput = styled.input`
	padding: 12px 16px;
	width: 60px;
	font-weight: 600;
	font-size: 15px;
	text-align: center;
`

const AddButton = styled.button`
	height: 100%;
	padding: 0 16px;
	background-color: ${({ theme }) => theme.colors.successBg};
	color: ${({ theme }) => theme.colors.altText};
`

const IngredientsList = () => {
	return (
		<Container>
			<InputContainer>
				<QuantityInput />
				<UnitSelect />
				<Input /> <AddButton>Add</AddButton>
			</InputContainer>
		</Container>
	)
}

export default IngredientsList
