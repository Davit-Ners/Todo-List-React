import { useState } from "react";
import Task from "../../components/task/task.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import json from '../../data/todo.json'
import style from './todo-list.module.css';

export default function TodoList() {

    const [ data, setData ] = useState(json.todo);
    const [ lastTaskId, setTaskId ] = useState(json.lastId);

    const onSubmit = (name, desc, priority) => {
        setTaskId(lastTaskId + 1);
        setData(val => [...val, { id: lastTaskId + 1, name, desc, priority, done: false }]);
    }

    const onDelete = (id) => {
        const index = data.findIndex(t => t.id == id);
        setData(val => val.toSpliced(index, 1));
    }

    const onFinish = (id) => {
        const index = data.findIndex(t => t.id == id);
        data[index].done = true;
        setData([...data]);
    }
    
    return (
        <div className={style['todo-list']}>
            <TodoForm onAction={onSubmit}/>

            <div>
                <h2>Liste des taches</h2>
                {data.map(task => <Task key={task.id} {...task} onDelete={onDelete} onFinish={onFinish}/>)}
            </div>
        </div>
    );
};