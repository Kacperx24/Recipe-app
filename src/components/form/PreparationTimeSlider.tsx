import { FC } from 'react'
import styled from 'styled-components'
import { RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { FormData } from '../../types'
import Paragraph from '../ui/Paragraph'

interface Props {
	register: UseFormRegister<FormData>
	validation: RegisterOptions
	errors: Record<string, any>
	watch: UseFormWatch<FormData>
}

const SliderWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const StyledParagraph = styled(Paragraph)`
	span {
		margin: 0 2px 0 4px;
		color: #36af89;
		font-size: 21px;
	}
`

const RangeInput = styled.input`
	margin: 24px 0 12px;
	-webkit-appearance: none;
	width: 240px;
	height: 4px;
	background-color: #43cb9f;
	outline: none;
	border-radius: 2px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		background: #43cb9f;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	&::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background-color: #43cb9f;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	&:hover::-moz-range-thumb {
		background-color: #43cb9f;
	}
`

const ErrorMessage = styled.span`
	// Styluj komunikat o błędzie
`

const PreparationTimeSlider: FC<Props> = ({
	register,
	validation,
	errors,
	watch,
}) => {
	const preparationTime = watch('preparationTime', 5)

	return (
		<SliderWrapper>
			<StyledParagraph fontWeight={600} fontSize={18}>
				Preparation Time: <span>{preparationTime}</span> min
			</StyledParagraph>
			<RangeInput
				type='range'
				min='5'
				max='120'
				step='5'
				{...register('preparationTime', validation)}
			/>
			{errors.preparationTime && (
				<ErrorMessage>This field is required</ErrorMessage>
			)}
		</SliderWrapper>
	)
}

export default PreparationTimeSlider
