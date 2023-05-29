import { MatcherFunction, render } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/theme'

export const renderWithTheme = (component: ReactNode) => {
	return {
		...render(<ThemeProvider theme={theme}>{component}</ThemeProvider>),
	}
}
