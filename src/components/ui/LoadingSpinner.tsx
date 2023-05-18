import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Svg = styled.svg`
	width: 70px;
	height: 70px;
	animation: ${rotateAnimation} 1s linear infinite;
`

const Circle = styled.circle`
	fill: none;
	stroke-width: 8;
	stroke-linecap: round;
	stroke: ${({ theme }) => theme.colors.primaryBg};
	stroke-dasharray: 190;
	stroke-dashoffset: 5;
`

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.secondaryBg};
`

const LoadingSpinner = () => {
	return (
		<LoadingWrapper>
			<Svg viewBox='0 0 100 100'>
				<Circle cx='50' cy='50' r='40' />
			</Svg>
		</LoadingWrapper>
	)
}

export default LoadingSpinner
