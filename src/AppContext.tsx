import { FC, ReactNode, createContext, useState } from 'react'

type ModalType = 'form' | 'details'

interface AppContextType {
	modalIsOpen: boolean
	modalType: ModalType | null
	openModal: (type: ModalType) => void
	closeModal: () => void
}

const AppContext = createContext<AppContextType>({
	modalIsOpen: false,
	modalType: null,
	openModal: () => {},
	closeModal: () => {},
})

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [modalType, setModalType] = useState<ModalType | null>(null)

	const openModal = (type: ModalType) => {
		setModalIsOpen(true)
		setModalType(type)
	}

	const closeModal = () => {
		setModalIsOpen(false)
		setModalType(null)
	}

	const modalContextValue = {
		modalIsOpen,
		modalType,
		openModal,
		closeModal,
	}
	return (
		<AppContext.Provider value={modalContextValue}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContext
