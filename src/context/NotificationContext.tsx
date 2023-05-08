import { createContext, FC, ReactNode, useState, useCallback } from 'react'
import Notification from '../components/Notification'

interface NotificationOptions {
	message: string
	type: 'success' | 'error' | 'info'
}

interface NotificationContextProps {
	children: ReactNode | ReactNode[]
}

interface NotificationContextType {
	showNotification: (options: NotificationOptions) => void
}

export const NotificationContext = createContext<NotificationContextType>({
	showNotification: () => {},
})

const NotificationProvider: FC<NotificationContextProps> = ({ children }) => {
	const [notification, setNotification] = useState<NotificationOptions | null>(
		null
	)

	const showNotification = useCallback((options: NotificationOptions) => {
		setNotification(options)
		setTimeout(() => {
			setNotification(null)
		}, 3000)
	}, [])

	const value = { showNotification }

	return (
		<NotificationContext.Provider value={value}>
			{children}
			{notification && (
				<Notification message={notification.message} type={notification.type} />
			)}
		</NotificationContext.Provider>
	)
}

export default NotificationProvider
