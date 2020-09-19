import React from "react";
import {Draggable} from "react-beautiful-dnd";

const Task = (props) => {

    function deleteTask() {
        props.deleteTask(props.containerId, props.taskId)
    }

    function toggleTask() {
        props.toggleTaskComplete(props.containerId, props.taskId)
    }

    return (
        <Draggable draggableId={props.taskId} index={props.index}>
            {(provided) => (
                        <div className='taskContainerVisible' {...provided.draggableProps} {...provided.dragHandleProps}
                             ref={provided.innerRef}>
                            <input className='checkedBox' type="checkbox" onChange={toggleTask}
                                   checked={props.completed || ''}/>
                            <div className='taskInfo'>
                                <div className='taskTittle'>
                                    {props.myTittle}
                                </div>
                                <div className='taskBody'>
                                    {props.text}
                                </div>
                            </div>
                            <div className='taskButtons'>
                                <button className='editTaskBtn' onClick={() => {
                                    props.openModal(props.containerId, props.taskId, props.myTittle, props.text)
                                }}>Edit
                                </button>
                                <button className='deleteTaskBtn' onClick={deleteTask}>Delete</button>
                            </div>
                </div>
            )}

        </Draggable>
    )
}

export default Task