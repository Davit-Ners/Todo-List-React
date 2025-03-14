import TodoForm from "../../components/todo-form/todo-form.jsx";
import data from '../../data/todo.json'

console.log(data);

export default function TodoList() {
    return (
        <div>
            <TodoForm />
        </div>
    );
};