import { useId, useState } from "react";

export default function TodoForm() {
    
    const inputId = useId();
    const [ name, setName ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [ priority, setPriority ] = useState('mid');
    
    return (
        <div className="todo-form">
            <h2>Ajouter une nouvelle tache</h2>
            <div className="form-container">

                <div className="input-container">
                    <label htmlFor={inputId + '-name'}>Nom</label>
                    <input type="text" id={inputId + '-name'} value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor={inputId + '-desc'}>Description</label>
                    <textarea id={inputId + '-desc'} value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>

                <div className="input-container">
                    <label htmlFor={inputId + '-priority'}>Priorité</label>
                    <select id={inputId + '-priority'} value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Basse</option>
                        <option value="mid">Normal</option>
                        <option value="high">Urgent</option>
                    </select>
                </div>

                <button>Ajouter</button>

            </div>
        </div>
    );
};