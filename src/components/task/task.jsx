import style from './task.module.css';
import clsx from 'clsx';

export default function Task({ id, name, desc = '', priority, done, onDelete = () => {}, onFinish = () => {}, onModify = () => {} }) {

    const handleDelete = () => {
        onDelete(id)      
    };

    const handleDone = () => {
        onFinish(id);
    }

    const handleModify = () => {
        onModify(id, name, desc, priority);
    }
    
    return (
        <div className={clsx(style['task'], done && style['is-done'])}>
            <div className="txt">
                <p>{name}{priority === 'high' ? <span className={style['urgent']}>(Urgent)</span> : ''}</p>
                <p>{desc}</p>
            </div>
            <div className={style['task-btn']}>
                <button onClick={handleDone} disabled={done}>Terminer</button>
                <button onClick={handleDelete}>Supprimer</button>
                <button onClick={handleModify}>Modifier</button>
            </div>
        </div>
    );
};