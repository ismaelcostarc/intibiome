import { useState, useCallback, useEffect} from "react";

export const useResize = (myRef) => {
  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(1000)
  
  const handleResize = useCallback(() => {
      setWidth(myRef.current.offsetWidth)
      setHeight(myRef.current.offsetHeight)
  }, [myRef])

  useEffect(() => {
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef, handleResize])

  return { width, height }
}