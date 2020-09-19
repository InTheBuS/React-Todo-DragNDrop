import React,{useState} from "react";

export const Modal = React.forwardRef((props, ref) => {

    const [tittle, setTittle] = useState(props.taskTittle ? props.taskTittle : 'Поменяй меня на титул новой задачи !')
    const [bodyText, setBodyTex] = useState(props.taskBody ? props.taskBody : 'А меня поменяй на саму задачу !')

    function changeTittle (e) {
        setTittle(e.target.value)
    }
    function changeBodyText (e) {
        setBodyTex(e.target.value)
    }
    function handleAddTask () {
        props.taskId
            ? props.editTask(tittle, bodyText, props.containerId, props.taskId)
            : props.addTask(tittle, bodyText, props.containerId, null)

        props.setShowModal(false)
    }

    return (
        <div className='modalContainerShadow' >
            <div className='modalContainer' ref={ref}>
                <div className='modalTittle'>
                    <h1>Tittle</h1>
                    <textarea className='modalTextArea' placeholder='Tittle' onChange={changeTittle} value={tittle}></textarea>
                </div>
                <div className='modalBody'>
                    <h3>Body</h3>
                    <textarea className='modalTextArea' placeholder='What is your task?' onChange={changeBodyText} value={bodyText}></textarea>
                </div>
                <button className='submit' onClick={handleAddTask}>Submit</button>
            </div>
        </div>
)})