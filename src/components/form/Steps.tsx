import { FC, KeyboardEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { RecipeFormData, Step } from '../../types'
import { StepsList } from './index'
import { v4 as uuid } from 'uuid'
import { handleEnterClick } from '../../utils'
import { ErrorMessage, Paragraph, AddButton } from '../ui'

interface StepsProps {
	setValue: UseFormSetValue<RecipeFormData>
	register: UseFormRegister<RecipeFormData>
	errors: FieldValues['errors']
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 40px;
`

const Input = styled.input`
	max-width: 400px;
	font-size: 15px;
	font-weight: 600;
	flex: 1;
`

const InputContainer = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	margin: 20px auto 0;
	gap: 12px;
	height: 40px;
`

const Steps: FC<StepsProps> = ({ setValue, register, errors }) => {
	const [inputValue, setInputValue] = useState('')
	const [steps, setSteps] = useState<Step[]>([])

	const handleRemoveStep = (id: string) => {
		const updatedSteps = steps
			.filter(item => item.id !== id)
			.map((step, index) => {
				return { ...step, point: index + 1 }
			})
		setSteps(updatedSteps)
	}

	const handleAddStep = () => {
		if (inputValue.trim()) {
			setSteps(prev => [
				...prev,
				{ name: inputValue, point: steps.length + 1, id: uuid() },
			])
			setInputValue('')
		}
	}

	useEffect(() => {
		setValue('steps', steps)
	}, [steps, setValue])
	return (
		<Container>
			<input
				type='hidden'
				{...register('steps', { required: 'Preparation steps are required' })}
			/>
			<Paragraph fontSize={18} fontWeight={600}>
				Add steps
			</Paragraph>
			<InputContainer>
				<Input
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
						handleEnterClick(e, handleAddStep)
					}
				/>
				<AddButton onClick={handleAddStep} type='button'>
					Add
				</AddButton>
			</InputContainer>
			<StepsList steps={steps} onRemoveStep={handleRemoveStep} />
			{errors.steps && !steps.length && (
				<ErrorMessage>{errors.steps.message}</ErrorMessage>
			)}
		</Container>
	)
}

export default Steps
