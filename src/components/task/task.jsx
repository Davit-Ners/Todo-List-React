import style from './task.module.css';
import clsx from 'clsx';

export default function Task({ id, name, desc = '', priority, done, failed = false, createdAt, dateLimit,  
    onDelete = () => {}, onFinish = () => {}, onModify = () => {}, onReset = () => {} 
}) {

    const formateCreateDate = new Date(parseInt(createdAt));
    const formatLimitDate = dateLimit && new Date(parseInt(dateLimit));
    console.log(dateLimit);

    const handleDelete = () => {
        onDelete(id)      
    };

    const handleDone = () => {
        onFinish(id);
    }

    const handleModify = () => {
        onModify(id, name, desc, priority);
    }

    const handleReset = () => {
        onReset(id);
    }
    
    return (
        <div className={clsx(style['task'], done && style['is-done'], failed && style['failed'])}>
            <div className="txt">
                <p>{name}{priority === 'high' ? <span className={style['urgent']}>(Urgent)</span> : ''}</p>
                <p>{desc}</p>
                {dateLimit && <p>A faire pour le {formatLimitDate.toLocaleDateString()} <br /> à {formatLimitDate.toLocaleTimeString().slice(0, 5)}</p>}
            </div>
            <div className={style['task-btn']}>
                <button onClick={handleDone} disabled={done}>Terminer</button>
                <button onClick={handleDelete}>Supprimer</button>
                {done ? 
                    <button onClick={handleReset}>Remettre en cours</button> : 
                    <button onClick={handleModify} >Modifier</button>}
            </div>
        </div>
    );
};