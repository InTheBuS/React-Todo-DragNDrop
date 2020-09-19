import React, {useState, useCallback} from 'react';
import './App.css';
import TodoContainers from "./TodoContainers/TodoContainers";
import {connect} from "react-redux";
import {
    addContainer,
    addTask, compareSearchTask,
    completeTaskToggle,
    deleteContainer,
    deleteTask,
    editTask
} from "./Redux/TodoListContainer";
import {useOutsideAlerter} from "./components/OutsideClick/OutsideClick";
import {debounce} from "./components/Debounce/debounce";
import {Modal} from './components/Modal/Modal'


const App = (props) => {

    const [searchValue, setSearchValue] = useState('')
    const [needToSearch, setNeedToSearch] = useState(false)

    const {
        showModal, setShowModal,
        containerId, setContainerId,
        taskTittle, setTaskTittle,
        taskBody, setTaskBody,
        taskId, setTaskId,
        ref
    } = useOutsideAlerter()

    const openModal = (containerId, taskId, taskTittle, taskBody) => {
        setShowModal(() => !showModal)
        setContainerId(() => containerId)
        setTaskTittle(() => taskTittle)
        setTaskBody(() => taskBody)
        setTaskId(() => taskId)
    }

    function createContainer() {
        props.addContainer()
    }

    function search() {
        if (searchValue.trim()) {
            setNeedToSearch(false)
        }
        if (searchValue.trim()) {
            setNeedToSearch(true)
            props.compareSearchTask(searchValue)
        }
    }

    function clearSearch () {
        setSearchValue('')
        setNeedToSearch(false)
    }

    function searchInputOnChange (myText) {
        console.log( myText)
        if (myText.trim()) {
            setNeedToSearch(true)
            props.compareSearchTask(myText.trim())
        }
        if (!myText.trim()) {
            setNeedToSearch(false)
        }
    }

    const debouncedSearchInputOnChange = useCallback(debounce( q => searchInputOnChange(q), 500), [])

    function setCurrentSearchInput (myText) {
        setSearchValue(myText)
    }

    function combineSearchInputs (e) {
        let myText = e.target.value
        setCurrentSearchInput(myText);
        debouncedSearchInputOnChange(myText)
    }



    return (
        <div className='appTodo'>
            <button className='newContainerBtn' value='Добавить контейнер' onClick={createContainer}>Добавить
                контейнер
            </button>
            <div className='searchContainer'>
                <button className='clearSearchButton' onClick={clearSearch}>Очистить</button>
                <input className='searchInput' value={searchValue} onChange={combineSearchInputs} />
                <button className='searchButton' onClick={search}>Поиск</button>
            </div>

            <TodoContainers containers={props.containers} searchContainers={props.containersBySearchValue} deleteContainer={props.deleteContainer}
                            addTask={props.addTask} deleteTask={props.deleteTask} openModal={openModal}
                            toggleTaskComplete={props.completeTaskToggle} needToSearch={needToSearch} searchValue={searchValue}/>

            {showModal
                ? <Modal setShowModal={setShowModal} ref={ref}
                         containerId={containerId} addTask={props.addTask}
                         taskTittle={taskTittle} taskBody={taskBody}
                         taskId={taskId} editTask={props.editTask}
                />
                : null}
        </div>
    );
}


const mapStateToProps = (state) => ({
    containers: state.TodoReducer.containers,
    containersBySearchValue: state.TodoReducer.containersBySearchValue

})


export default connect(mapStateToProps, {
    addContainer,
    addTask,
    deleteContainer,
    deleteTask,
    editTask,
    completeTaskToggle,
    compareSearchTask
})(App)


