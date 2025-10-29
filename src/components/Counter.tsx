'use client'

import { useEffect, useRef, useState } from 'react'

function Counter({ end = 0, duration = 2000 }) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0]
                if (entry.isIntersecting && !hasAnimated) {
                    animateCount()
                    setHasAnimated(true)
                }
            },
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [hasAnimated])

    function animateCount() {
        const startTime = performance.now()

        function update(timestamp: any) {
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const count = Math.floor(progress * end)
            setValue(count)

            if (progress < 1) {
                requestAnimationFrame(update)
            } else {
                setValue(end)
            }
        }

        requestAnimationFrame(update)
    }

    return <span ref={ref}>{value}</span>
}

export default Counter
