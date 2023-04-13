import React from 'react'
import { FieldValues } from 'react-hook-form'
import styled from 'styled-components'

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
	}

	span {
		color: red;
		font-size: 14px;
		font-weight: 500;
	}
`

const Input = styled.input`
	padding: 12px 16px;
	width: 100%;
`
const TextArea = styled.textarea`
	resize: none;
	padding: 12px 16px;
	width: 100%;
`

type Props = {
	label: string
	name: string
	register: (...args: any[]) => any
	errors: FieldValues['errors']
	required?: boolean
}

const InputField: React.FC<Props> = ({ label, name, register, errors }) => {
	console.log(errors)
	return (
		<InputWrapper>
			<LabelsContainer>
				{' '}
				<label>{label}</label>
				<span>{errors[name]?.message}</span>
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
