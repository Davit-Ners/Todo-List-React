import { useId } from "react";

export default function TodoForm() {
    
    const inputId = useId();
    
    return (
        <div className="todo-form">
            <h2>Ajouter une nouvelle tache</h2>
            <div className="form-container">

                <div className="input-container">
                    <label htmlFor={inputId + '-name'}>Nom</label>
                    <input type="text" id={inputId + '-name'} />
                </div>

                <div className="input-container">
                    <label htmlFor={inputId + '-desc'}>Description</label>
                    <textarea id={inputId + '-desc'}></textarea>
                </div>

                <div className="input-container">
                    <label htmlFor={inputId + '-priority'}>Nom</label>
                    <select id={inputId + '-priority'}>
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