import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

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

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
	const modalEl = document.getElementById('modal')

	if (!modalEl) {
		return null
	}

	return createPortal(<ModalOverlay>{children}</ModalOverlay>, modalEl)
}

export default Modal
