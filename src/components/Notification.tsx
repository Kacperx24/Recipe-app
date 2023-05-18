import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { getBackgroundColor } from '../utils'

interface NotificationProps {
	message: string
	type: 'success' | 'error' | 'info'
	onDismiss?: () => void
}

const fadeOut = keyframes`
	0% {
	top: 100%;
}

	10% {
	top: calc(100% - 100px);
}

	90% {
	top: calc(100% - 100px);
}

	100% {
	top: 100%;

  }
`

const StyledNotification = styled.div<{ type: 'success' | 'error' | 'info' }>`
	position: fixed;
	right: 20px;
	background-color: ${({ theme, type }) =>
		theme.colors[getBackgroundColor(type)]};
	color: ${({ theme }) => theme.colors.altText};
	padding: 14px 22px;
	font-size: 16px;
	border-radius: 4px;
	z-index: 10;
	animation: ${fadeOut} 3s forwards;
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
		right: 60px;
	}
`

const Notification: FC<NotificationProps> = ({ message, type }) => {
	return <StyledNotification type={type}>{message}</StyledNotification>
}

export default Notification
