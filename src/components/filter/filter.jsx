import { useState } from "react";

export default function Filter({ data, onFilter = () => {}} ) {

    const [ filter, setFilter ] = useState('Done');

    const onAction = () => {
        //TODO Filter Callback ???
        onFilter(filter);
    }
    
    return (
        <div className="filter">
            <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="notDone">En cours</option>
                <option value="Urgent">Urgente</option>
                <option value="Done">Terminées</option>
            </select>
            <button onClick={onFilter}>Filtrer</button>
        </div>
    );
};