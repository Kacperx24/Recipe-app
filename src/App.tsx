import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddRecipeForm from './pages/AddRecipeForm'
import MainPage from './pages/MainPage'
import { QueryClientProvider, QueryClient } from 'react-query'
import Contexts from './Contexts'

const GlobalStyle = createGlobalStyle`
* {
	font-family: Cabin;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

button {
	outline: none;
	border: none;
	border-radius: 4px;
	font-weight: 600;
	cursor: pointer;
	transition: .1s ease-in-out;
	color: #383838;
	
}

button:active{
	transform: scale(0.95);
}

input,textarea {
	outline: none;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	padding: 12px 16px;

}
a {
  text-decoration: none;
  color: #fff;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c0c0c0;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F5F5F5;
}

`

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: '/form',
				element: <AddRecipeForm />,
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
