import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.primaryBg};
	min-height: 100vh;
`
const MainPage = () => {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	)
}

export default MainPage
