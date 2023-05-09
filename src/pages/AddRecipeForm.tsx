import React, { KeyboardEvent } from 'react'
import styled from 'styled-components'

import {
	Steps,
	InputField,
	CountrySelect,
	PreparationTimeSlider,
	SubmitButton,
	Ingredients,
	DifficultySelect,
} from '../components/form'
import { handleEnterClick } from '../utils'
import { GoBackButton, Modal, ModalTitle } from '../components/ui'

import useAddRecipeForm from '../hooks/useAddRecipeForm'

const Container = styled.div`
	width: 94%;
	max-width: 640px;
	background-color: ${({ theme }) => theme.colors.primaryBg};
	border-radius: 12px;
	overflow: hidden;
`

const ContentWrapper = styled.div`
	position: relative;
	padding: 30px 20px;
	width: 100%;
	overflow-y: auto;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Form = styled.form`
	margin-top: 18px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`

const GoBackWrapper = styled.div`
	position: absolute;
	left: 20px;
	top: 20px;
`

const AddRecipeForm = () => {
	const { register, errors, handleSubmit, setValue, watch } = useAddRecipeForm()

	return (
		<Modal>
			<Container>
				<ContentWrapper>
					<GoBackWrapper>
						<GoBackButton />
					</GoBackWrapper>
					<ModalTitle>Add recipe</ModalTitle>
					<Form
						onKeyDown={(e: KeyboardEvent<HTMLFormElement>) =>
							handleEnterClick(e)
						}
						onSubmit={handleSubmit}
					>
						<InputField
							label='Title'
							name='title'
							register={register}
							errors={errors}
						/>
						<InputField
							label='Description'
							name='description'
							register={register}
							errors={errors}
						/>
						<CountrySelect
							setValue={setValue}
							errors={errors}
							register={register}
						/>

						<PreparationTimeSlider
							register={register}
							validation={{ required: true }}
							watch={watch}
						/>

						<Ingredients
							setValue={setValue}
							register={register}
							errors={errors}
						/>

						<Steps setValue={setValue} register={register} errors={errors} />
						<DifficultySelect
							setValue={setValue}
							register={register}
							errors={errors}
						/>
						<SubmitButton type='submit'>Add recipe</SubmitButton>
					</Form>
				</ContentWrapper>
			</Container>
		</Modal>
	)
}

export default AddRecipeForm
