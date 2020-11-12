import React,{useRef, useState, useEffect} from "react";

export const useOutsideAlerter = () => {
    const ref = useRef(null)
    const [showModal, setShowModal] = useState(false)
    const [containerId, setContainerId] = useState('')
    const [taskId, setTaskId] = useState('')
    const [taskTittle, setTaskTittle] = useState('')
    const [taskBody, setTaskBody] = useState('')

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) setShowModal(false)
    }

    const handleKeyPressed = (event) => {
        if (event.key === 'Escape') setShowModal(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true)
        document.addEventListener('keydown', handleKeyPressed, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
            document.addEventListener('keypress', handleKeyPressed, true)
        }
    }, [ref])
    return {showModal, setShowModal, containerId, setContainerId, taskTittle, setTaskTittle, taskBody, setTaskBody, taskId, setTaskId, ref}
}