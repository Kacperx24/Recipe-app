import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import GoBackButton from './GoBackButton'

interface ModalProps {
	children: ReactNode
	maxWidth?: number
}

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

const Container = styled.div<{ maxWidth: number }>`
	width: 94%;
	max-width: ${({ maxWidth }) => `${maxWidth}px`};
	background-color: ${({ theme }) => theme.colors.primaryBg};
	border-radius: 12px;
	overflow: hidden;
`

const ContentWrapper = styled.div`
	position: relative;
	padding: 30px 20px;
	width: 100%;
	overflow-y: auto;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const GoBackWrapper = styled.div`
	position: absolute;
	left: 20px;
	top: 20px;
`

const Modal: FC<ModalProps> = ({ children, maxWidth = 640 }) => {
	const modalEl = document.getElementById('modal')

	if (!modalEl) {
		return null
	}

	return createPortal(
		<ModalOverlay>
			<Container maxWidth={maxWidth}>
				<ContentWrapper>
					<GoBackWrapper>
						<GoBackButton />
					</GoBackWrapper>
					{children}
				</ContentWrapper>
			</Container>
		</ModalOverlay>,
		modalEl
	)
}

export default Modal
