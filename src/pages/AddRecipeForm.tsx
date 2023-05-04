import React, { FormEvent, KeyboardEvent } from 'react'
import Modal from '../components/ui/Modal'
import styled from 'styled-components'
import ModalTitle from '../components/ui/ModalTitle'
import { useForm } from 'react-hook-form'
import InputField from '../components/form/InputField'
import CountrySelect from '../components/form/CountrySelect'
import { FormData } from '../types'
import PreparationTimeSlider from '../components/form/PreparationTimeSlider'
import SubmitButton from '../components/form/SubmitButton'
import Ingredients from '../components/form/Ingredients'
import Steps from '../components/form/Steps'
import { handleEnterClick } from '../utils'

const Container = styled.div`
	width: 94%;
	max-width: 640px;
	background-color: ${({ theme }) => theme.colors.primaryBg};
	border-radius: 12px;
	overflow: hidden;
`

const ContentWrapper = styled.div`
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

const AddRecipeForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<FormData>()

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault()
		handleSubmit(onSubmit)()
	}

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<Modal>
			<Container>
				<ContentWrapper>
					<ModalTitle>Add recipe</ModalTitle>
					<Form
						onKeyDown={(e: KeyboardEvent<HTMLFormElement>) =>
							handleEnterClick(e)
						}
						onSubmit={e => handleFormSubmit(e)}
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
						<SubmitButton type='submit'>Add recipe</SubmitButton>
					</Form>
				</ContentWrapper>
			</Container>
		</Modal>
	)
}

export default AddRecipeForm
