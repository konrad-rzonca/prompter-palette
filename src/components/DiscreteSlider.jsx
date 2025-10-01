import React, { useState, useMemo, useRef, useEffect } from 'react'
import cn from 'classnames'
import Tooltip from './Tooltip.jsx'

export default function DiscreteSlider({ count = 5, valueIndex, onChange, onDrag, labels = [], selectedLabel = '' }) {
    const safeCount = Math.max(2, count)
    const trackRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [dragX, setDragX] = useState(0)

    const lastDraggedIndex = useRef(null)

    const derivedPct = useMemo(() => {
        if (valueIndex == null) return -1
        return (valueIndex / (safeCount - 1)) * 100
    }, [valueIndex, safeCount])

    // THE FIX: The display percentage should only use the live `dragX` if we are
    // dragging AND there's a valid value. Otherwise, it must follow `derivedPct`.
    // This removes the need for the problematic useEffect.
    const displayPct = (isDragging && valueIndex != null) ? dragX : derivedPct

    const getIndexFromX = (clientX) => {
        if (!trackRef.current) return 0
        const rect = trackRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
        const ratio = x / rect.width
        return Math.round(ratio * (safeCount - 1))
    }

    const handlePointerDown = (e) => {
        e.preventDefault()
        setIsDragging(true)
        const newIndex = getIndexFromX(e.clientX || e.touches[0].clientX)
        setDragX((newIndex / (safeCount - 1)) * 100)

        if (onDrag) {
            onDrag(newIndex)
        }
        lastDraggedIndex.current = newIndex
    }

    const handlePointerMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const clientX = e.clientX || e.touches[0].clientX
        if (!trackRef.current) return
        const rect = trackRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
        setDragX((x / rect.width) * 100)

        if (onDrag) {
            const newIndex = getIndexFromX(clientX)
            if (newIndex !== lastDraggedIndex.current) {
                onDrag(newIndex)
                lastDraggedIndex.current = newIndex
            }
        }
    }

    const handlePointerUp = (e) => {
        if (!isDragging) return
        e.preventDefault()
        setIsDragging(false)
        const clientX = e.clientX || e.changedTouches[0].clientX
        const newIndex = getIndexFromX(clientX)
        onChange(newIndex)
        lastDraggedIndex.current = null
    }

    const handleTrackClick = (e) => {
        const newIndex = getIndexFromX(e.clientX)
        onChange(newIndex)
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handlePointerMove)
            window.addEventListener('mouseup', handlePointerUp)
            window.addEventListener('touchmove', handlePointerMove)
            window.addEventListener('touchend', handlePointerUp)
        }
        return () => {
            window.removeEventListener('mousemove', handlePointerMove)
            window.removeEventListener('mouseup', handlePointerUp)
            window.removeEventListener('touchmove', handlePointerMove)
            window.removeEventListener('touchend', handlePointerUp)
        }
    }, [isDragging, onDrag, onChange])


    return (
        <div className="dslider">
            <div className="dslider-track" ref={trackRef} onClick={handleTrackClick}>
                <div className="dslider-fill" style={{ width: `${displayPct}%` }} />
                <div className="dslider-stops">
                    {Array.from({ length: safeCount }).map((_, i) => (
                        <div
                            key={i}
                            className="dslider-stop"
                            style={{ left: `${(i / (safeCount - 1)) * 100}%` }}
                        >
                            <Tooltip content={labels[i] || ''}>
                                <div
                                    className="dslider-stop-dot"
                                />
                            </Tooltip>
                        </div>
                    ))}
                </div>
                {derivedPct >= 0 && (
                    <div
                        className={cn('dslider-thumb', isDragging && 'dragging')}
                        style={{ left: `${displayPct}%` }}
                        onMouseDown={handlePointerDown}
                        onTouchStart={handlePointerDown}
                        aria-hidden
                        title={selectedLabel}
                    />
                )}
            </div>
        </div>
    )
}