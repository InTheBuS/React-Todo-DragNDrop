import React, {useState} from "react";
import Task from "./Task/Task";
import {Droppable} from "react-beautiful-dnd";

const TodoContainer = (props) => {

    const [isHideCompleted, setVisibleTask] = useState(true)

    function hideCompleted () {
        setVisibleTask(!isHideCompleted)
    }

    function deleteContainer() {
        props.deleteContainer(props.containerId)
    }

    function createTask (task) {
        return <Task myTittle={task.tittle}
                     text={task.text}
                     completed={task.completed}
                     taskId={task.id}
                     containerId={props.containerId}
                     key={task.id}
                     deleteTask={props.deleteTask}
                     openModal={props.openModal}
                     index={task.index}
                     toggleTaskComplete={props.toggleTaskComplete}/>
    }

    const filteredTasksToShow = props.tasks.filter((task, index) => {
        if (isHideCompleted) {
            task.index = index
            return task
        }
        if (!isHideCompleted && !task.completed) {
            task.index = index
            return task
        }
        if (!isHideCompleted && task.completed)
            return null
    })
        .map((task) => createTask(task))

    return (
        <div className='todoContainer'>
            <div className='containerTopButtons'>
                <button className='hideCompletedTasksBtn' onClick={hideCompleted} value='Показать только завершенные'>
                    {isHideCompleted ? 'Скрыть завершенные' : 'Показать все'}
                </button>
                <button className='addTaskBtn' value='Добавить задачку' onClick={() => {
                    props.openModal(props.containerId)
                }}>Добавить Задачку
                </button>
            </div>
            <Droppable droppableId={props.containerId}>
                {(provided) => (
                    <div className='droppablePlaceHolder' {...provided.droppableProps} ref={provided.innerRef}>
                        {filteredTasksToShow}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <button className='deleteContainerBtn' value='Удалить контейнер' onClick={deleteContainer}>Удалить
                контейнер
            </button>
        </div>
    )
}

export default TodoContainer
