export default function Task({ id, name, desc = '', priority, onDelete = () => {} }) {

    const handleDelete = () => {
        onDelete(id)      
    };
    
    return (
        <div className="task">
            <div className="txt">
                <p>{name}</p>
                <p>{desc}</p>
            </div>
            <div className="task-btn">
                <button>Terminer</button>
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
};