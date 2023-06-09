import { useContext } from 'react'

import { NotificationContext } from '../context/NotificationContext'

const useNotification = () => {
	const context = useContext(NotificationContext)

	return context
}

export default useNotification
