import React from 'react'
import { FieldValues } from 'react-hook-form'
import styled from 'styled-components'

import { ErrorMessage } from '../ui'

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	width: 100%;
	max-width: 440px;
	gap: 8px;
`

const LabelsContainer = styled.div`
	display: flex;
	justify-content: space-between;

	label {
		font-weight: 600;
		font-size: 15px;
		color: ${({ theme }) => theme.colors.primaryText};

		@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
			font-size: 16px;
		}
	}
`

const Input = styled.input`
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 15px;
	}
`
const TextArea = styled.textarea`
	resize: none;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		font-size: 15px;
	}
`

type InputFieldProps = {
	label: string
	name: string
	register: (...args: any[]) => any
	errors: FieldValues['errors']
	required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	name,
	register,
	errors,
}) => {
	return (
		<InputWrapper>
			<LabelsContainer>
				{' '}
				<label>{label}</label>
				<ErrorMessage>{errors[name]?.message}</ErrorMessage>
			</LabelsContainer>
			{name === 'description' ? (
				<TextArea
					{...register(name, { required: 'Description is required' })}
					rows='5'
				/>
			) : (
				<Input {...register(name, { required: 'Name is required' })} />
			)}
		</InputWrapper>
	)
}

export default InputField
