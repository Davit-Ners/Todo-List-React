import { useId, useState } from "react";
import style from './todo-form.module.css';
import clsx from "clsx";

export default function TodoForm({ onAction = () => {} }) {
    
    const inputId = useId();
    const [ name, setName ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [ priority, setPriority ] = useState('mid');
    const [ must, setMust ] = useState(false);

    const sendForm = () => {
        if (!name.trim()) {
            setMust(true);
            return;
        }
        setMust(false);
        setName('');
        setPriority('mid');
        setDesc('');
        onAction(name, desc, priority);
    }
    
    return (
        <div className={style["todo-form"]}>
            <h2>Ajouter une nouvelle tache</h2>
            <div className={style["form-container"]}>

                <div className={style['input-container']}>
                    <label className={clsx(must && style['must'])} htmlFor={inputId + '-name'}>Nom</label>
                    <input required type="text" id={inputId + '-name'} value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={style['input-container']}>
                    <label htmlFor={inputId + '-desc'}>Description</label>
                    <textarea id={inputId + '-desc'} value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>

                <div className={style['input-container']}>
                    <label htmlFor={inputId + '-priority'}>Priorité</label>
                    <select id={inputId + '-priority'} value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Basse</option>
                        <option value="mid">Normal</option>
                        <option value="high">Urgent</option>
                    </select>
                </div>

                <button onClick={sendForm}>Ajouter</button>

            </div>
        </div>
    );
};