import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    let tasks: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    let tasks1: Array<TaskType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Jentelmens of fortune", isDone: true},
    ]
    return (
        <div className='App'>
            <Todolist title="What to learn" tasks={tasks}/>
            <Todolist title="Movies" tasks={tasks1}/>
        </div>
    );
}

export default App;
