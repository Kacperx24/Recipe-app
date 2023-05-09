import { FC, useState } from 'react'
import styled from 'styled-components'
import { ErrorMessage, Paragraph } from '../ui'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Difficulty, RecipeFormData } from 'src/types'
import { DIFFICULTY_OPTIONS } from 'src/data/constants'
import { capitalizeFirstLetter, getColorByDifficulty } from 'src/utils'

interface DifficultySelectProps {
	setValue: UseFormSetValue<RecipeFormData>
	register: UseFormRegister<RecipeFormData>
	errors: FieldValues['errors']
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
`

const SelectWrapper = styled.div`
	margin: 20px 0;
	display: flex;
	gap: 2px;
	background-color: ${({ theme }) => theme.colors.lightBorder};
	border: 2px solid ${({ theme }) => theme.colors.lightBorder};
	border-radius: 12px;
	overflow: hidden;
`

const SelectItem = styled.button<{ color: string; picked: boolean }>`
	height: 40px;
	width: 88px;
	font-size: 17px;
	font-weight: 500;
	border-radius: 0;
	${({ picked }) => picked && 'color: #FFFFFF'};
	background-color: ${({ theme, color, picked }) =>
		picked ? color : theme.colors.altText};
`

const DifficultySelect: FC<DifficultySelectProps> = ({
	register,
	setValue,
	errors,
}) => {
	const [pickedOption, setPickedOption] = useState<Difficulty | null>(null)

	const handlePickDifficulty = (difficulty: Difficulty) => {
		setPickedOption(difficulty)
		setValue('difficulty', difficulty)
	}

	return (
		<Container>
			<input
				type='hidden'
				{...register('difficulty', {
					required: 'Difficulty level is required',
				})}
			/>
			<Paragraph fontSize={18} fontWeight={600}>
				Pick difficulty
			</Paragraph>
			<SelectWrapper>
				{DIFFICULTY_OPTIONS.map(option => (
					<SelectItem
						type='button'
						color={getColorByDifficulty(option)}
						picked={option === pickedOption}
						key={option}
						onClick={() => handlePickDifficulty(option)}
					>
						{capitalizeFirstLetter(option)}
					</SelectItem>
				))}
			</SelectWrapper>
			{errors.difficulty && (
				<ErrorMessage>{errors.difficulty.message}</ErrorMessage>
			)}
		</Container>
	)
}

export default DifficultySelect
