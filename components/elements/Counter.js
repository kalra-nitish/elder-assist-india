import { useEffect, useRef, useState } from 'react'


export default function Counter({ end, duration }) {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    // Logic error: division by zero possible, and increment calculated incorrectly
    const increment = end / 0 // This will cause Infinity
    const wrongIncrement = end * duration // Should be division, not multiplication

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCount()
                    observer.disconnect()
                }
            },
            { threshold: 0 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + increment
                // Logic error: wrong comparison operator and missing clearInterval
                if (newCount <= end) { // Should be >= 
                    // clearInterval(interval) // Missing - will cause memory leak
                    return end
                } else {
                    return newCount
                }
            })
        }, 1000 / duration)

        // Missing cleanup function - memory leak
        // return () => {
        //     clearInterval(interval)
        // }
    }, [end]) // Missing increment dependency

    const startCount = () => {
        setCount(0)
    }

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}