const ADD_CONTAINER = 'ADD_CONTAINER'
const DELETE_CONTAINER = 'DELETE_CONTAINER'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const EDIT_TASK = 'EDIT_TASK'
const TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK'
const COMPARE_SEARCH_WITH_TASK = 'COMPARE_SEARCH_WITH_TASK'

function uniq() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let initialState = {
    containersBySearchValue: {},
    containers: {
        [uniq()]: {
            tasks: [{
                id: uniq(),
                completed: false,
                tittle: 'Реализовать TODO приложение.',
                text: 'Создать функционирующее TODO приложение с drag and drop.'
            },
                {
                    id: uniq(),
                    completed: false,
                    tittle: 'Реализовать TODO приложение.',
                    text: 'Чтобы четко было.'
                }]
        },
        [uniq()]: {
            tasks: [{
                id: uniq(),
                completed: false,
                tittle: 'Реализовать Второй независимый столбик.',
                text: 'Вроде работает.'
            }]
        }
    }
}

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTAINER: {
            return {
                ...state,
                containers: {...state.containers, [uniq()]: {id: uniq(), tasks: []}}
            }
        }
        case DELETE_CONTAINER: {
            const filteredContainers = Object.entries(state.containers).filter(el => el[0] !== action.id)
            const entriesToObj = Object.fromEntries(filteredContainers)
            return {
                ...state,
                containers: {...entriesToObj}
            }
        }
        case ADD_TASK: {
            const containerId = action.containerId;
            let ifTaskDragged = action.afterDragContainerId ? state.containers[action.afterDragContainerId].tasks[action.dragIndex] : ''
            let newTaskIndex = action.index === null ? state.containers[containerId].tasks.length : action.index;
            let newTask = {
                id: action.taskId ? action.taskId : uniq(),
                completed: action.completed ? action.completed : ifTaskDragged.completed,
                tittle: action.tittle ? action.tittle : ifTaskDragged.tittle,
                text: action.text ? action.text : ifTaskDragged.text
            }
            const valid = (action.dragIndex < action.index) && (action.containerId === action.afterDragContainerId);
            return {
                ...state,
                containers: {
                    ...state.containers,
                    [containerId]: {
                        ...state.containers[containerId],
                        tasks: [
                            ...state.containers[containerId].tasks.filter((_, index) =>
                                valid ? index <= newTaskIndex : index < newTaskIndex
                            ),
                            newTask,
                            ...state.containers[containerId].tasks.filter((_, index) =>
                                valid ? index > newTaskIndex : index >= newTaskIndex
                            )
                        ]
                    }
                }
            }
        }
        case EDIT_TASK: {
            const editedTaskContainer = state.containers[action.containerId].tasks.map(task => {
                if (task.id === action.taskId) {
                    task.completed = false;
                    task.tittle = action.tittle;
                    task.text = action.text;
                    return task
                } else {
                    return task
                }
            })
            return {
                ...state,
                containers: {
                    ...state.containers,
                    [action.containerId]: {
                        ...state.containers[action.containerId],
                        tasks: [
                            ...editedTaskContainer
                        ]
                    }
                }
            }
        }
        case DELETE_TASK: {
            const currentIndex = (action.beforeDragTaskIndex > action.afterDragTaskIndex) && (action.containerId === action.afterDragContainerId)
                ? action.beforeDragTaskIndex + 1
                : action.beforeDragTaskIndex + 0
            let checking = action.beforeDragTaskIndex + 1 ? currentIndex : action.taskId
            const tasks = state.containers[action.containerId].tasks.filter((task, index) => {
                if (typeof checking == 'number') {
                    if (index !== currentIndex) {
                        return task
                    }
                } else if (typeof checking == 'string') {
                    if (task.id !== action.taskId) {
                        return task
                    }
                }
            })

            return {
                ...state,
                containers: {
                    ...state.containers, [action.containerId]: {tasks}
                }
            }
        }
        case TOGGLE_COMPLETE_TASK: {
            let toggledTaskContainer = state.containers[action.containerId].tasks.map(task => {
                if (task.id === action.taskId) {
                    task.completed = !task.completed
                    return task
                } else return task
            })
            return {
                ...state,
                containers: {
                    ...state.containers,
                    [action.containerId]: {
                        ...state.containers[action.containerId],
                        tasks: [
                            ...toggledTaskContainer
                        ]
                    }
                }
            }
        }
        case COMPARE_SEARCH_WITH_TASK: {
            let needToSearchValue = action.searchValue.toUpperCase()
            let myState = Object.entries(state.containers).reduce(function (contArr, cont) {
                let validTasks = cont[1].tasks.reduce(function (taskArr, task) {
                    if (task.tittle.toUpperCase().includes(needToSearchValue) || task.text.toUpperCase().includes(needToSearchValue)) {
                        taskArr.push(task)
                    }
                    return taskArr
                }, [])
                if (validTasks.length > 0) {
                    let myCont = {
                        ...cont,
                        1: {tasks: [...validTasks]}
                    }
                    contArr.push(myCont)
                }
                return contArr
            }, [])
            let toObj = Object.fromEntries(myState)
            return  {
                ...state,
                containersBySearchValue: {...toObj}
            }
        }
        default:
            return state
    }
}

export const addTask = (tittle, text, containerId, index, taskId, dragIndex, afterDragContainerId) => ({
    type: ADD_TASK,
    tittle,
    text,
    containerId,
    index,
    taskId,
    dragIndex,
    afterDragContainerId
})

export const editTask = (tittle, text, containerId, taskId) => ({type: EDIT_TASK, tittle, text, containerId, taskId})

export const deleteTask = (containerId, taskId, beforeDragTaskIndex, afterDragTaskIndex, afterDragContainerId) =>
    ({
        type: DELETE_TASK,
        containerId,
        taskId,
        beforeDragTaskIndex,
        afterDragTaskIndex,
        afterDragContainerId
    })

export const addContainer = () => ({type: ADD_CONTAINER})

export const deleteContainer = (id) => ({type: DELETE_CONTAINER, id})

export const completeTaskToggle = (containerId, taskId) => ({type: TOGGLE_COMPLETE_TASK, containerId, taskId})

export const compareSearchTask = (searchValue) => ({type: COMPARE_SEARCH_WITH_TASK, searchValue})

