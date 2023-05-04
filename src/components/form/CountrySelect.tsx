import { useState } from 'react'
import styled from 'styled-components'
import Paragraph from '../ui/Paragraph'

import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import CountryButton from './CountryButton'
import countries from '../../data/countries'
import { Country, FormData } from '../../types'
import ErrorMessage from '../ui/ErrorMessage'

const SelectWrapper = styled.div`
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const CountriesWrapper = styled.div`
	padding: 20px 0;
	display: grid;
	gap: 12px;
	grid-template-columns: repeat(4, 1fr);
	@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
		grid-template-columns: repeat(6, 1fr);
	}
`

interface CountrySelectProps {
	setValue: UseFormSetValue<FormData>
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
}

const CountrySelect = ({ setValue, errors, register }: CountrySelectProps) => {
	const [pickedCountry, setPickedCountry] = useState<Country | null>(null)

	const pickCountry = (country: Country) => {
		setPickedCountry(country)
		setValue('country', country.value)
	}

	return (
		<SelectWrapper>
			<input
				type='hidden'
				{...register('country', { required: 'Country is required' })}
			/>
			<Paragraph fontSize={18} fontWeight={600}>
				{pickedCountry
					? `Picked country: ${pickedCountry.label}`
					: 'Pick country'}
			</Paragraph>
			<CountriesWrapper>
				{countries.map(country => (
					<CountryButton
						key={country.value}
						country={country}
						active={!pickedCountry || country.value === pickedCountry?.value}
						onClick={pickCountry}
					/>
				))}
			</CountriesWrapper>
			{errors.country && <ErrorMessage>{errors.country.message}</ErrorMessage>}
		</SelectWrapper>
	)
}

export default CountrySelect
