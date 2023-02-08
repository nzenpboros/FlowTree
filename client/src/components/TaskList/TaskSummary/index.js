import "./styles/styles.css";

const TaskSummary = ({title, tags, dueDate}) => {
    return (
        <div className="taskSummary">
            <div className="bullet">🕒</div>
            <div className="task">
                <div className="title">{title}</div>
                <div className="details">
                    <div className="tags">{tags}</div>
                    <div className="dueDate">{dueDate}</div>
                </div>
            </div>
            <link />
        </div>
    )
}

export default TaskSummary;