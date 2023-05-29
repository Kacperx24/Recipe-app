import { renderWithTheme } from 'src/test-utils'
import InputField from '../InputField'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const mockRegister = jest.fn()

describe('InputField', () => {
	it('renders correctly', () => {
		renderWithTheme(
			<InputField
				label='test label'
				name='title'
				register={mockRegister}
				errors={{}}
			/>
		)

		expect(screen.getByText('test label')).toBeInTheDocument()
		expect(screen.getByTestId('input')).toBeInTheDocument()
	})

	it('renders textarea for description', () => {
		renderWithTheme(
			<InputField
				label='test label'
				name='description'
				register={mockRegister}
				errors={{}}
			/>
		)

		expect(screen.getByText('test label')).toBeInTheDocument()
		expect(screen.getByTestId('textarea')).toBeInTheDocument()
	})
})
