import React from "react";
import TodoContainer from "./TodoContainer/TodoContainer";
import '../App.css';
import {DragDropContext} from "react-beautiful-dnd";

const TodoContainers = (props) => {

    const containersToShow = !props.needToSearch ? props.containers : props.searchContainers
    const containersToArray = Object.entries(containersToShow)

    function onDragEnd (result) {

        if (!result.destination) return

        if (result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index) return

        const draggableId = result.draggableId
        const beforeDragContainerId = result.source.droppableId
        const beforeDragIndex = result.source.index
        const afterDragContainerId = result.destination.droppableId
        const afterDragIndex = result.destination.index

        props.addTask(null, null, afterDragContainerId, afterDragIndex, draggableId, beforeDragIndex, beforeDragContainerId)
        props.deleteTask(beforeDragContainerId, draggableId, beforeDragIndex, afterDragIndex, afterDragContainerId)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='todosContainers'>
                {containersToArray.map(
                    (container, index) =>
                        <TodoContainer tasks={container[1].tasks}
                                       containerId={container[0]}
                                       key={container[0]}
                                       deleteContainer={props.deleteContainer}
                                       addTask={props.addTask}
                                       deleteTask={props.deleteTask}
                                       openModal={props.openModal}
                                       toggleTaskComplete={props.toggleTaskComplete}/>
                )}
            </div>
        </DragDropContext>
    )
}

export default TodoContainers