import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import { GlobalStyle, theme } from './theme'
import AddRecipeForm from './pages/AddRecipeForm'
import MainPage from './pages/MainPage'
import Contexts from './Contexts'
import RecipeDetails from './pages/RecipeDetails'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: '/form',
				element: <AddRecipeForm />,
			},
			{
				path: '/recipe/:id',
				element: <RecipeDetails />,
			},
		],
	},
])

const queryClient = new QueryClient()

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<QueryClientProvider client={queryClient}>
				<Contexts>
					<RouterProvider router={router} />
				</Contexts>
			</QueryClientProvider>
		</ThemeProvider>
	)
}

export default App
