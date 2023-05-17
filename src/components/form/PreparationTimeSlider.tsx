import { FC } from 'react'
import styled from 'styled-components'
import { RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { RecipeFormData } from 'src/types'
import { Paragraph, RangeInput } from '../ui'

interface PreparationTimeSliderProps {
	register: UseFormRegister<RecipeFormData>
	validation: RegisterOptions
	watch: UseFormWatch<RecipeFormData>
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

const PreparationTimeSlider: FC<PreparationTimeSliderProps> = ({
	register,
	validation,
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
		</SliderWrapper>
	)
}

export default PreparationTimeSlider
