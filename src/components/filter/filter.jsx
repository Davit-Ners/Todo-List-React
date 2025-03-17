import { useState } from "react";
import style from './filter.module.css';

export default function Filter({ data, onFilter = () => {}} ) {

    const [ filter, setFilter ] = useState('all');

    const onAction = () => {
        onFilter(filter);
    }
    
    return (
        <div className={style['filter']}>
            <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">Aucun filtre</option>
                <option value="notDone">En cours</option>
                <option value="urgent">Urgente</option>
                <option value="done">Terminées</option>
            </select>
            <button onClick={onAction}>Filtrer</button>
        </div>
    );
};