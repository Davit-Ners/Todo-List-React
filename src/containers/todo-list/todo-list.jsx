import { useState } from "react";
import Task from "../../components/task/task.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import style from './todo-list.module.css';
import Filter from "../../components/filter/filter.jsx";

export default function TodoList() {

    const [ data, setData ] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const [ lastTaskId, setTaskId ] = useState(JSON.parse(localStorage.getItem('lastId')) || 0);
    const [ filter, setFilter ] = useState('all');
    const [ modify, setModify ] = useState(false);
    const [ modifiedTask, setModifiedTask ] = useState({newId: '', newName: '', newDesc: '', newPriority: 'mid', newLimitDate: ''});

    console.log(data);

    const onSubmit = (id, name, desc, priority, modify, createdAt, limitDate, hasLimitDate) => {
        if (modify) {
            console.log(id, data[0].id);
            const newData = data.map(t => t.id === id ? { ...t, id, name, desc, priority, dateLimit: hasLimitDate ? new Date(limitDate).getTime() : "" } : t);
            localStorage.setItem('data', JSON.stringify(newData));
            setData(newData);
            setModify(false);
            return;
        }
        localStorage.setItem('lastId', lastTaskId + 1);
        setTaskId((id) => id + 1);
        localStorage.setItem('data', JSON.stringify([{ id: lastTaskId + 1, name, desc, priority, done: false, createdAt, dateLimit: hasLimitDate ? new Date(limitDate).getTime() : "" }, ...data]));
        setData(JSON.parse(localStorage.getItem('data')));
    }

    const onDelete = (id) => {
        const index = data.findIndex(t => t.id == id);
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        setData([...data]);
    }

    const onFinish = (id) => {
        const index = data.findIndex(t => t.id == id);
        data[index].done = true;
        localStorage.setItem('data', JSON.stringify(data));
        setData([...data]);
    }

    const onReset = (id) => {
        const index = data.findIndex(t => t.id == id);
        data[index].done = false;
        localStorage.setItem('data', JSON.stringify(data));
        setData([...data]);
    }

    const onFilter = (filter) => {
        setFilter(filter);
    }
    const onModify = (id, name, desc, priority, dateLimit) => {
        setModify(true);
        setModifiedTask({id, newName: name, newDesc: desc, newPriority: priority, newLimitDate: dateLimit});
    }
    
    const onClose = () => {
        setModify(false);
    }

    const filteredData = data.filter(task => {
        if (filter === 'done') return task.done;
        if (filter === 'notDone') return !task.done;
        if (filter === 'urgent') return task.priority === 'high';
        return true;
    });
    
    return (
        <div className={style['todo-list']}>
            <TodoForm onAction={onSubmit}/>
            {modify && <TodoForm onAction={onSubmit} modify={modify} {...modifiedTask} onClose={onClose}/>}

            <div className={style['task-list']}>
                <h2>{data.length > 0 ? 'Liste des taches' : "Vous n'avez aucune tache en cours."}</h2>

                {filteredData.map(task => <Task key={task.id} {...task} onModify={onModify} onDelete={onDelete} onFinish={onFinish} onReset={onReset}/>)}
            </div>

            <Filter onFilter={onFilter}/>
        </div>
    );
};