import { fireEvent, screen } from '@testing-library/react'
import DifficultySelect from '../DifficultySelect'
import { DIFFICULTY_OPTIONS } from 'src/data/constants'
import { capitalizeFirstLetter } from 'src/utils'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from 'src/test-utils'

const mockSetValue = jest.fn()

const mockRegister = jest.fn()

const renderDifficultySelect = () => {
	return renderWithTheme(
		<DifficultySelect
			register={mockRegister}
			setValue={mockSetValue}
			errors={{}}
		/>
	)
}

describe('DifficultySelect', () => {
	it('renders correctly', () => {
		renderDifficultySelect()

		expect(screen.getByText('Pick difficulty')).toBeInTheDocument()

		DIFFICULTY_OPTIONS.forEach(option => {
			expect(
				screen.getByText(capitalizeFirstLetter(option))
			).toBeInTheDocument()
		})
	})

	it('handles difficulty selection', () => {
		renderDifficultySelect()

		DIFFICULTY_OPTIONS.forEach(option => {
			fireEvent.click(screen.getByText(capitalizeFirstLetter(option)))
			expect(mockSetValue).toHaveBeenCalledWith('difficulty', option)
		})
	})
})
