import { useEffect } from "react"

const useTitle = (title) => {

    useEffect(() => {

        document.title = `MRP-${title}`

    }, [title])
}

export default useTitle;