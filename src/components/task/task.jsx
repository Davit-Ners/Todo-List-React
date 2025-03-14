export default function Task({ name, desc = '', priority }) {
    return (
        <div className="task">
            <div className="txt">
                <p>{name}</p>
                <p>{desc}</p>
            </div>
            <div className="task-btn">
                <button>Terminer</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};