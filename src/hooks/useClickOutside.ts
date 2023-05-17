import { useEffect, RefObject } from 'react'

function useClickOutside(refs: RefObject<HTMLElement>[], callback: () => void) {
	const handleClick = (e: MouseEvent) => {
		if (
			refs.every(ref => ref.current && !ref.current.contains(e.target as Node))
		) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [refs, callback])
}

export default useClickOutside
