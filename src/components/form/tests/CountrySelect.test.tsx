import { fireEvent, screen, waitFor } from '@testing-library/react'
import CountrySelect from '../CountrySelect'
import countries from 'src/data/countries'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from 'src/test-utils'

const mockSetValue = jest.fn()
const mockRegister = jest.fn()

const renderCountrySelect = () => {
	return renderWithTheme(
		<CountrySelect
			register={mockRegister}
			setValue={mockSetValue}
			errors={{}}
		/>
	)
}

describe('CountrySelect', () => {
	it('renders correctly', async () => {
		renderCountrySelect()

		expect(screen.getByText('Pick country')).toBeInTheDocument()

		await waitFor(() => {
			countries.forEach(country => {
				expect(screen.getByAltText(country.label)).toBeInTheDocument()
			})
		})
	})

	it('handles country selection', async () => {
		renderCountrySelect()

		fireEvent.click(screen.getByAltText(countries[0].label))

		expect(mockSetValue).toHaveBeenCalledWith('country', countries[0].value)

		expect(
			screen.getByText(`Picked country: ${countries[0].label}`)
		).toBeInTheDocument()
	})
})
