import { createGlobalStyle } from 'styled-components'

export const theme = {
	colors: {
		primaryBg: '#F6F8FA',
		secondaryBg: '#FBD791',
		successBg: '#43cb9f',
		errorBg: '#f85e5e',
		dark: '#061239',
		primaryText: '#383838',
		secondaryText: '#686868',
		lightText: '#AAAEB6',
		lightBorder: '#e9edf1',
		altText: '#ffffff',
	},
	breakpoints: {
		sm: 640,
		md: 1200,
		lg: 1840,
	},
}

export const GlobalStyle = createGlobalStyle`
* {
	font-family: Quicksand;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body{
	background-color: #F6F8FA;

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
