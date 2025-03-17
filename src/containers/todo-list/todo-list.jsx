import { useState } from "react";
import Task from "../../components/task/task.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import json from '../../data/todo.json'
import style from './todo-list.module.css';
import Filter from "../../components/filter/filter.jsx";

export default function TodoList() {

    const [ data, setData ] = useState(json.todo);
    const [ lastTaskId, setTaskId ] = useState(json.lastId);
    const [ filter, setFilter ] = useState('all');
    const [ modify, setModify ] = useState(false);
    const [ modifiedTask, setModifiedTask ] = useState({newId: '', newName: '', newDesc: '', newPriority: 'mid'});

    const onSubmit = (id, name, desc, priority, modify) => {
        if (modify) {
            setData((value) => 
                value.map(t => 
                    t.id === id 
                        ? { ...t, id, name, desc, priority }
                        : t
                )
            );
            setModify(false);
            return;
        }
        setTaskId(lastTaskId + 1);
        setData(val => [...val, { id: lastTaskId + 1, name, desc, priority, done: false }]);
    }

    const onDelete = (id) => {
        setData(val => val.filter(t => t.id != id));
    }

    const onFinish = (id) => {
        const index = data.findIndex(t => t.id == id);
        data[index].done = true;
        setData([...data]);
    }

    const onFilter = (filter) => {
        setFilter(filter);
    }
    const onModify = (id, name, desc, priority) => {
        setModify(true);
        setModifiedTask({id, newName: name, newDesc: desc, newPriority: priority});
    }
    const filteredData = data.filter(task => {
        if (filter === 'done') return task.done;
        if (filter === 'notDone') return !task.done;
        if (filter === 'urgent') return task.priority === 'high';
        return true;
    });
    
    return (
        <div className={style['todo-list']}>
            <TodoForm onAction={onSubmit} modify={modify} {...modifiedTask}/>

            <div>
                <h2>Liste des taches</h2>

                {filteredData.map(task => <Task key={task.id} {...task} onModify={onModify} onDelete={onDelete} onFinish={onFinish}/>)}
            </div>

            <Filter onFilter={onFilter}/>
        </div>
    );
};