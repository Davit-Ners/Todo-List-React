import Task from "../../components/task/task.jsx";
import TodoForm from "../../components/todo-form/todo-form.jsx";
import data from '../../data/todo.json'
import style from './todo-list.module.css';

export default function TodoList() {
    return (
        <div className={style['todo-list']}>
            <TodoForm />

            <div>
                <h2>Liste des taches</h2>
                {data.todo.map(task => <Task key={task.id} {...task} />)}
            </div>
        </div>
    );
};