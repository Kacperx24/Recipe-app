import { FC, ReactNode } from 'react'
import NotificationProvider from './context/NotificationContext'

interface ContextsProps {
	children: ReactNode | ReactNode[]
}

const Contexts: FC<ContextsProps> = ({ children }) => {
	return <NotificationProvider>{children}</NotificationProvider>
}

export default Contexts
