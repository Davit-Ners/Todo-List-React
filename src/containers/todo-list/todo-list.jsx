import { useState } from "react";
import Task from "../../components/task/task.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import json from '../../data/todo.json'
import style from './todo-list.module.css';

export default function TodoList() {

    const [ data, setData ] = useState(json.todo);
    const [ taskId, setTaskId ] = useState(json.lastId);

    const onSubmit = (name, desc, priority) => {
        setTaskId(taskId + 1);
        setData(val => [...val, { id: taskId + 1, name, desc, priority }]);
    }
    
    return (
        <div className={style['todo-list']}>
            <TodoForm onAction={onSubmit}/>

            <div>
                <h2>Liste des taches</h2>
                {data.map(task => <Task key={task.id} {...task} />)}
            </div>
        </div>
    );
};