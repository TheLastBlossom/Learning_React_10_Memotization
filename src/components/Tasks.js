import React, { useMemo, useRef, useState } from 'react'

export const Tasks = () => {
    let newTask = useRef();
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(2000);
    const addNewTask = (e) => {
        e.preventDefault();
        if (newTask.current.value.length > 0) {
            if (tasks.length === 0) {
                setTasks([newTask.current.value]);
            } else {
                setTasks(task => [...task, newTask.current.value]);
            }
        }       
    }
    const deleteTask = (id) => {
        let newTasks = tasks.filter((task, index) => index !== id);
        setTasks(newTasks);
    }
    const increase = ()=>{
        setCounter(counter + 1);
    }
    const makePrints = (times) =>{
        for(let i=0; i<times; i++){
            console.log("Executing wahahhaha");
        }
        return `Counter: ${counter}`;
    }
    const memoCounter = useMemo(()=>makePrints(counter), [counter]);
    return (
        <div>
            <form onSubmit={addNewTask}>
                <input type='text' ref={newTask} />
                <input type='submit' value={"Add new task"} />
            </form>
            <h2>{memoCounter}</h2>
            <button onClick={increase}>Increase counter</button>
            {tasks.length > 0 && <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>{task} &nbsp;
                        <button onClick={() => deleteTask(index)}>X</button>
                    </li>
                })}
            </ul>}
        </div>
    )
}
