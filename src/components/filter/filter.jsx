import { useState } from "react";

export default function Filter({ data, onFilter = () => {}} ) {

    const [ filter, setFilter ] = useState('done');

    const onAction = () => {
        onFilter(filter);
    }
    
    return (
        <div className="filter">
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