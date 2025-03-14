import style from './task.module.css';
import clsx from 'clsx';

export default function Task({ id, name, desc = '', priority, done, onDelete = () => {} }) {

    const handleDelete = () => {
        onDelete(id)      
    };
    
    return (
        <div className={clsx(style['task'], done && style['is-done'])}>
            <div className="txt">
                <p>{name}</p>
                <p>{desc}</p>
            </div>
            <div className={style['task-btn']}>
                <button disabled={done}>Terminer</button>
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
};